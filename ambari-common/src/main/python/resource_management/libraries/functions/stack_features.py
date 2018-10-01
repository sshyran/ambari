#!/usr/bin/env python
"""
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

"""

# simplejson is much faster comparing to Python 2.6 json module and has the same functions set.
import ambari_simplejson as json
from resource_management.core.exceptions import Fail
from resource_management.core.logger import Logger
from resource_management.libraries.functions.constants import Direction

# executionCommand for STOP
_ROLE_COMMAND_STOP = 'STOP'

# executionCommand for a custom command (which could be STOP)
_ROLE_COMMAND_CUSTOM = 'CUSTOM_COMMAND'


def check_stack_feature(stack_feature, stack_version):
  """
  Given a stack_feature and a specific stack_version, it validates that the feature is supported by the stack_version.
  IMPORTANT, notice that the mapping of feature to version comes from cluster-env if it exists there.
  :param stack_feature: Feature name to check if it is supported by the stack. For example: "rolling_upgrade"
  :param stack_version: Version of the stack
  :return: Will return True if successful, otherwise, False.
  """
  from resource_management.libraries.script.script import Script
  from resource_management.libraries.execution_command.stack_settings import StackSettings
  from resource_management.libraries.functions.version import compare_versions

  execution_command = Script.get_execution_command()
  stack_settings = Script.get_stack_settings()
  stack_name = stack_settings.get_mpack_name()
  if stack_name is None:
    Logger.warning("Cannot find the stack name in the command. Stack features cannot be loaded")
    return False
  # TODO call stack_settings.get_stack_features() will fail in TestStackFeature, need more investigation
  stack_features_setting = None
  if Script.config and "stackSettings" in Script.config and "stack_features" in Script.config["stackSettings"]:
    stack_features_setting = Script.config["stackSettings"]["stack_features"]

  if not stack_version:
    Logger.debug("Cannot determine if feature %s is supported since did not provide a stack version." % stack_feature)
    return False

  if stack_features_setting:
    data = json.loads(stack_features_setting)

    if stack_name not in data:
      Logger.warning("Cannot find stack features for the stack named {0}".format(stack_name))
      return False

    data = data[stack_name]

    for feature in data[StackSettings.STACK_FEATURES_SETTING]:
      if feature["name"] == stack_feature:
        if "min_version" in feature:
          min_version = feature["min_version"]
          if compare_versions(stack_version, min_version, format = True) < 0:
            return False
        if "max_version" in feature:
          max_version = feature["max_version"]
          if compare_versions(stack_version, max_version, format = True) >= 0:
            return False
        return True
  else:
    Logger.warning("Stack features not defined by stack")

  return False


def get_stack_feature_version(config):
  """
  Uses the specified ConfigDictionary to determine which version to use for stack
  feature checks.

  Normally, the commandParams/version is the correct value to use as it represent the 4-digit
  exact stack version/build being upgrade to or downgraded to. However, there are cases where the
  commands being sent are to stop running services which are on a different stack version from the
  version being upgraded/downgraded to. As a result, the configurations sent for these specific
  stop commands do not match commandParams/version.
  :param config:  a ConfigDictionary instance to extra the hostLevelParams
                  and commandParams from.
  :return: the version to use when checking stack features.
  """
  from resource_management.libraries.script.script import Script
  from resource_management.libraries.execution_command.execution_command import ExecutionCommand

  execution_command = Script.get_execution_command()
  stack_settings = Script.get_stack_settings()

  if "stackSettings" not in config and "commandParams" not in config:
    raise Fail("Unable to determine the correct version since stackSettings and commandParams were not present in the configuration dictionary")

  # should always be there
  # Actually not always, i.e if we restart zookeeper service and no stack_version is included in command.json
  stack_version = stack_settings.get_mpack_version()

  # something like 2.4.0.0-1234; represents the version for the command
  # (or None if this is a cluster install and it hasn't been calculated yet)
  # this is always guaranteed to be the correct version for the command, even in
  # upgrade and downgrade scenarios
  command_version = execution_command.get_new_mpack_version_for_upgrade()
  # TODO we may need add this to execution_command lib
  command_stack = execution_command.get_value("commandParams/target_stack", None)

  # UPGRADE or DOWNGRADE (or None)
  upgrade_direction = execution_command.check_upgrade_direction()

  # start out with the value that's right 99% of the time
  version_for_stack_feature_checks = command_version if command_version is not None else stack_version

  # if this is not an upgrade, then we take the simple path
  if upgrade_direction is None:
    Logger.info(
      "Stack Feature Version Info: Cluster Stack={0}, Command Stack={1}, Command Version={2} -> {3}".format(
        stack_version, command_stack, command_version, version_for_stack_feature_checks))

    return version_for_stack_feature_checks

  # STOP commands are the trouble maker as they are intended to stop a service not on the
  # version of the stack being upgrade/downgraded to
  is_stop_command = _is_stop_command(config)
  if not is_stop_command:
    Logger.info(
      "Stack Feature Version Info: Cluster Stack={0}, Command Stack={1}, Command Version={2}, Upgrade Direction={3} -> {4}".format(
        stack_version, command_stack, command_version, upgrade_direction,
        version_for_stack_feature_checks))

    return version_for_stack_feature_checks

  is_downgrade = upgrade_direction.lower() == Direction.DOWNGRADE.lower()
  # guaranteed to have a STOP command now during an UPGRADE/DOWNGRADE, check direction
  if is_downgrade:
    from resource_management.libraries.functions.upgrade_summary import UpgradeSummary
    version_for_stack_feature_checks = UpgradeSummary().get_service_source_version(service_group_name=None, service_name=None, default_version=version_for_stack_feature_checks)
  else:
    # UPGRADE
      version_for_stack_feature_checks = command_version if command_version is not None else stack_version

  Logger.info(
    "Stack Feature Version Info: Cluster Stack={0}, Command Stack={1}, Command Version={2}, Upgrade Direction={3}, stop_command={4} -> {5}".format(
      stack_version, command_stack, command_version, upgrade_direction,
      is_stop_command, version_for_stack_feature_checks))

  return version_for_stack_feature_checks


def _is_stop_command(config):
  """
  Gets whether this is a STOP command
  :param config:
  :return:
  """
  from resource_management.libraries.functions.default import default

  # STOP commands are the trouble maker as they are intended to stop a service not on the
  # version of the stack being upgrade/downgraded to
  role_command = config["roleCommand"]
  if role_command == _ROLE_COMMAND_STOP:
    return True

  custom_command = default("/commandParams/custom_command", None)
  if role_command == _ROLE_COMMAND_CUSTOM and custom_command == _ROLE_COMMAND_STOP:
    return True

  return False
