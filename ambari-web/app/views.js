/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// load all views here

require('views/application');
require('views/common/dashrow_view');
require('views/common/timeline_view');
require('views/common/breadcrumbs_view');
require('views/common/clock_view');
require('views/common/checkbox_view');
require('views/common/alert_badge');
require('views/common/log_search_ui_link_view');
require('views/common/log_file_search_view');
require('views/common/log_tail_view');
require('views/common/global/spinner');
require('views/common/ajax_default_error_popup_body');
require('views/common/buttons/button_progress_view');
require('views/common/buttons/wizard_buttons');
require('views/common/chart');
require('views/common/chart/pie');
require('views/common/chart/linear');
require('views/common/chart/linear_time');
require('views/common/modal_popup');
require('views/common/search_box_view');
require('views/common/modal_popups/alert_popup');
require('views/common/modal_popups/edit_dashboard_widget_popup');
require('views/common/modal_popups/manage_kdc_credentials_popup');
require('views/common/modal_popups/confirmation_feedback_popup');
require('views/common/modal_popups/confirmation_popup');
require('views/common/modal_popups/hosts_table_list_popup');
require('views/common/modal_popups/cluster_check_popup');
require('views/common/modal_popups/invalid_KDC_popup');
require('views/common/modal_popups/dependent_configs_list_popup');
require('views/common/modal_popups/select_groups_popup');
require('views/common/modal_popups/logs_popup');
require('views/common/modal_popups/log_file_search_popup');
require('views/common/modal_popups/log_tail_popup');
require('views/common/modal_popups/config_validation/config_validation_failed_popup');
require('views/common/modal_popups/config_validation/config_validation_popup');
require('views/common/editable_list');
require('views/common/not-scrollable-textarea');
require('views/common/host_progress_popup_body_view');
require('views/common/radio_button_view');
require('views/common/rolling_restart_view');
require('views/common/select_custom_date_view');
require('views/common/metric');
require('views/common/time_range');
require('views/common/time_range_list');
require('views/common/form/field');
require('views/common/form/datepicker_view');
require('views/common/form/spinner_input_view');
require('views/common/form/manage_credentials_form_view');
require('views/common/form/dropdown');
require('views/common/quick_view_link_view');
require('views/common/configs/services_config');
require('views/common/configs/service_config_container_view');
require('views/common/configs/service_configs_by_category_view');
require('views/common/configs/service_config_view');
require('views/common/configs/service_config_tab_view');
require('views/common/configs/config_category_container_view');
require('views/common/configs/overriddenPropertyRow_view');
require('views/common/configs/overriddenProperty_view');
require('views/common/configs/config_versions_control_view');
require('views/common/configs/config_versions_dropdown_view');
require('views/common/configs/selectable_popup_body_view');
require('views/common/configs/custom_category_views/notification_configs_view');
require('views/common/configs/config_diff_view');
require('views/common/configs/widgets/config_text_field');
require('views/common/configs/widgets/plain_config_text_field');
require('views/common/configs/widgets/config_widget_view');
require('views/common/configs/widgets/checkbox_config_widget_view');
require('views/common/configs/widgets/directory_config_widget_view');
require('views/common/configs/widgets/combo_config_widget_view');
require('views/common/configs/widgets/number_config_widget_view');
require('views/common/configs/widgets/password_config_widget_view');
require('views/common/configs/widgets/list_config_widget_view');
require('views/common/configs/widgets/radio_button_config_widget_view');
require('views/common/configs/widgets/slider_config_widget_view');
require('views/common/configs/widgets/string_config_widget_view');
require('views/common/configs/widgets/textfield_config_widget_view');
require('views/common/configs/widgets/time_interval_spinner_view');
require('views/common/configs/widgets/toggle_config_widget_view');
require('views/common/configs/widgets/label_config_widget_view');
require('views/common/configs/widgets/test_db_connection_widget_view');
require('views/common/configs/widgets/overrides/config_widget_override_view');
require('views/common/configs/service_config_layout_tab_view');
require('views/common/configs/service_config_layout_tab_compare_view');
require('views/common/configs/controls_view');
require('views/common/assign_master_components_view');
require('views/common/filter_combobox');
require('views/common/filter_combo_cleanable');
require('views/common/pagination_view');
require('views/common/table_view');
require('views/common/progress_bar_view');
require('views/common/controls_view');
require('views/common/chosen_plugin');
require('views/common/export_metrics_menu_view');
require('views/common/dashrow_view');
require('views/common/widget/graph_widget_view');
require('views/common/widget/template_widget_view');
require('views/common/widget/gauge_widget_view');
require('views/common/widget/number_widget_view');
require('views/common/widget/heatmap_widget_view');
require('views/common/helpers/format_date_view');
require('views/common/helpers/format_word_break_view');
require('views/common/helpers/format_null_view');
require('views/common/helpers/format_role_view');
require('views/common/helpers/pluralize_view');
require('views/common/helpers/status_icon_view');
require('views/login');
require('views/main');
require('views/main/menu');
require('views/main/alert_definitions_view');
require('views/main/alerts/alert_definition/alert_definition_summary');
require('views/main/alerts/alert_definition/alert_definition_state');
require('views/main/alerts/definition_details_view');
require('views/main/alerts/alert_search_box');
require('views/main/alerts/alert_definitions_actions_view');
require('views/main/alerts/definition_configs_view');
require('views/main/alerts/manage_alert_groups/select_definitions_popup_body_view');
require('views/main/alerts/add_alert_definition/add_alert_definition_view');
require('views/main/alerts/add_alert_definition/step1_view');
require('views/main/alerts/add_alert_definition/step2_view');
require('views/main/alerts/add_alert_definition/step3_view');
require('views/main/alerts');
require('views/main/alerts/manage_alert_groups_view');
require('views/main/alerts/alert_instances_popup_view');
require('views/main/alerts/manage_alert_notifications_view');
require('views/main/charts');
require('views/main/views/details');
require('views/main/host');
require('views/main/host/combo_search_box');
require('views/main/host/hosts_table_menu_view');
require('views/main/host/details');
require('views/main/host/details/host_component_view');
require('views/main/host/details/host_component_views/datanode_view');
require('views/main/host/details/host_component_views/nodemanager_view');
require('views/main/host/details/host_component_views/regionserver_view');
require('views/main/host/details/host_component_views/tasktracker_view');
require('views/main/host/logs_view');
require('views/main/host/menu');
require('views/main/host/summary');
require('views/main/host/configs');
require('views/main/host/configs_service');
require('views/main/host/configs_service_menu');
require('views/main/host/log_metrics');
require('views/main/host/metrics');
require('views/main/host/stack_versions_view');
require('views/main/host/add_view');
require('views/main/host/host_alerts_view');
require('views/main/host/metrics/cpu');
require('views/main/host/metrics/disk');
require('views/main/host/metrics/load');
require('views/main/host/metrics/memory');
require('views/main/host/metrics/network');
require('views/main/host/metrics/processes');
require('views/main/host/addHost/step4_view');
require('views/main/admin');
require('views/main/admin/service_auto_start');
require('views/main/admin/highAvailability/nameNode/wizard_view');
require('views/main/admin/highAvailability/progress_view');
require('views/main/admin/highAvailability/nameNode/rollback_view');
require('views/main/admin/highAvailability/nameNode/step1_view');
require('views/main/admin/highAvailability/nameNode/step2_view');
require('views/main/admin/highAvailability/nameNode/step3_view');
require('views/main/admin/highAvailability/nameNode/step4_view');
require('views/main/admin/highAvailability/nameNode/step5_view');
require('views/main/admin/highAvailability/nameNode/step6_view');
require('views/main/admin/highAvailability/nameNode/step7_view');
require('views/main/admin/highAvailability/nameNode/step8_view');
require('views/main/admin/highAvailability/nameNode/step9_view');
require('views/main/admin/highAvailability/nameNode/rollbackHA/step1_view');
require('views/main/admin/highAvailability/nameNode/rollbackHA/step2_view');
require('views/main/admin/highAvailability/nameNode/rollbackHA/step3_view');
require('views/main/admin/highAvailability/nameNode/rollbackHA/rollback_wizard_view');
require('views/main/admin/highAvailability/journalNode/wizard_view');
require('views/main/admin/highAvailability/journalNode/progress_view');
require('views/main/admin/highAvailability/journalNode/step1_view');
require('views/main/admin/highAvailability/journalNode/step2_view');
require('views/main/admin/highAvailability/journalNode/step3_view');
require('views/main/admin/highAvailability/journalNode/step4_view');
require('views/main/admin/highAvailability/journalNode/step5_view');
require('views/main/admin/highAvailability/journalNode/step6_view');
require('views/main/admin/highAvailability/journalNode/step7_view');
require('views/main/admin/highAvailability/resourceManager/wizard_view');
require('views/main/admin/highAvailability/resourceManager/step1_view');
require('views/main/admin/highAvailability/resourceManager/step2_view');
require('views/main/admin/highAvailability/resourceManager/step3_view');
require('views/main/admin/highAvailability/resourceManager/step4_view');
require('views/main/admin/highAvailability/hawq/addStandby/wizard_view');
require('views/main/admin/highAvailability/hawq/addStandby/step1_view');
require('views/main/admin/highAvailability/hawq/addStandby/step2_view');
require('views/main/admin/highAvailability/hawq/addStandby/step3_view');
require('views/main/admin/highAvailability/hawq/addStandby/step4_view');
require('views/main/admin/highAvailability/hawq/removeStandby/wizard_view');
require('views/main/admin/highAvailability/hawq/removeStandby/step1_view');
require('views/main/admin/highAvailability/hawq/removeStandby/step2_view');
require('views/main/admin/highAvailability/hawq/removeStandby/step3_view');
require('views/main/admin/highAvailability/hawq/activateStandby/wizard_view');
require('views/main/admin/highAvailability/hawq/activateStandby/step1_view');
require('views/main/admin/highAvailability/hawq/activateStandby/step2_view');
require('views/main/admin/highAvailability/hawq/activateStandby/step3_view');
require('views/main/admin/highAvailability/rangerAdmin/wizard_view');
require('views/main/admin/highAvailability/rangerAdmin/step1_view');
require('views/main/admin/highAvailability/rangerAdmin/step2_view');
require('views/main/admin/highAvailability/rangerAdmin/step3_view');
require('views/main/admin/highAvailability/rangerAdmin/step4_view');
require('views/main/admin/federation/wizard_view');
require('views/main/admin/federation/step1_view');
require('views/main/admin/federation/step2_view');
require('views/main/admin/federation/step3_view');
require('views/main/admin/federation/step4_view');
require('views/main/admin/serviceAccounts_view');
require('views/main/admin/serviceGroups_view');
require('views/main/admin/serviceGroups/upgradeStatus_view');
require('views/main/admin/serviceGroups/serviceGroup_view');
require('views/main/admin/stack_upgrade/upgrade_group_view');
require('views/main/admin/stack_upgrade/upgrade_task_view');
require('views/main/admin/stack_upgrade/upgrade_history_view');
require('views/main/admin/stack_upgrade/upgrade_history_details_view');
require('views/main/admin/stack_upgrade/failed_hosts_modal_view');
require('views/main/admin/mpack_upgrade_view');
require('views/main/admin/mpack_upgrade_view');
require('views/main/admin/mpackUpgrade/downloadOptions_view');
require('views/main/admin/mpackUpgrade/downloadMpacks_view');
require('views/main/admin/mpackUpgrade/selectUpgradeOptions_view');
require('views/main/admin/mpackUpgrade/reviewConfigs_view');
require('views/main/admin/mpackUpgrade/selectUpgradeType_view');
require('views/main/admin/mpackUpgrade/upgradeSummary_view');

require('views/main/admin/kerberos');
require('views/main/admin/kerberos/disable_view');
require('views/main/admin/kerberos/wizard_view');
require('views/main/admin/kerberos/progress_view');
require('views/main/admin/kerberos/step1_view');
require('views/main/admin/kerberos/step2_view');
require('views/main/admin/kerberos/step3_view');
require('views/main/admin/kerberos/step4_view');
require('views/main/admin/kerberos/step5_view');
require('views/main/admin/kerberos/step6_view');
require('views/main/admin/kerberos/step7_view');
require('views/main/admin/kerberos/step8_view');

require('views/main/dashboard');
require('views/main/dashboard/cluster_metrics/cpu');
require('views/main/dashboard/cluster_metrics/load');
require('views/main/dashboard/cluster_metrics/memory');
require('views/main/dashboard/cluster_metrics/network');

require('views/main/dashboard/widget');
require('views/main/dashboard/widgets');
require('views/main/dashboard/widgets/text_widget');
require('views/main/dashboard/widgets/text_widget_single_threshold');
require('views/main/dashboard/widgets/uptime_text_widget');
require('views/main/dashboard/widgets/links_widget');
require('views/main/dashboard/widgets/pie_chart_widget');
require('views/main/dashboard/widgets/cluster_metrics_widget');
require('views/main/dashboard/widgets/namenode_heap');
require('views/main/dashboard/widgets/namenode_cpu');
require('views/main/dashboard/widgets/hdfs_capacity');
require('views/main/dashboard/widgets/datanode_live');
require('views/main/dashboard/widgets/hawqsegment_live');
require('views/main/dashboard/widgets/pxf_live');
require('views/main/dashboard/widgets/namenode_rpc');
require('views/main/dashboard/widgets/metrics_memory');
require('views/main/dashboard/widgets/metrics_network');
require('views/main/dashboard/widgets/metrics_cpu');
require('views/main/dashboard/widgets/metrics_load');
require('views/main/dashboard/widgets/namenode_uptime');
require('views/main/dashboard/widgets/hdfs_links');
require('views/main/dashboard/widgets/yarn_links');
require('views/main/dashboard/widgets/hbase_links');
require('views/main/dashboard/widgets/hbase_master_heap');
require('views/main/dashboard/widgets/hbase_average_load');
require('views/main/dashboard/widgets/hbase_regions_in_transition');
require('views/main/dashboard/widgets/hbase_master_uptime');
require('views/main/dashboard/widgets/resource_manager_heap');
require('views/main/dashboard/widgets/resource_manager_uptime');
require('views/main/dashboard/widgets/node_managers_live');
require('views/main/dashboard/widgets/yarn_memory');
require('views/main/dashboard/widgets/yarn_containers');
require('views/main/dashboard/widgets/supervisor_live');
require('views/main/dashboard/widgets/flume_agent_live');
require('views/main/dashboard/config_history_view');
require('views/main/dashboard/config_history_search_box');


require('views/main/service');
require('views/main/service/service');
require('views/main/service/services/hdfs');
require('views/main/service/services/onefs');
require('views/main/service/services/yarn');
require('views/main/service/services/mapreduce2');
require('views/main/service/services/hbase');
require('views/main/service/services/hive');
require('views/main/service/services/zookeeper');
require('views/main/service/services/flume');
require('views/main/service/services/storm');
require('views/main/service/services/ranger');
require('views/main/service/all_services_actions');
require('views/main/service/menu');
require('views/main/service/item');
require('views/main/service/reconfigure');
require('views/main/service/info/components_list_view');
require('views/main/service/info/menu');
require('views/main/service/info/summary');
require('views/main/service/info/summary/hdfs/common_widgets');
require('views/main/service/info/summary/hdfs/slaves');
require('views/main/service/info/summary/hdfs/widgets');
require('views/main/service/info/configs');
require('views/main/service/info/metric_graphs_view');
require('views/main/service/info/metrics/ambari_metrics/master_average_load');
require('views/main/service/info/metrics/ambari_metrics/regionserver_base');
require('views/main/service/info/metrics/ambari_metrics/regionserver_store_files');
require('views/main/service/info/metrics/ambari_metrics/regionserver_regions');
require('views/main/service/info/metrics/ambari_metrics/regionserver_requests');
require('views/main/service/info/metrics/ambari_metrics/regionserver_block_cache_hit_percent');
require('views/main/service/info/metrics/ambari_metrics/regionserver_compaction_queue_size');
require('views/main/service/info/metrics/flume/channel_sum');
require('views/main/service/info/metrics/flume/channel_size_mma');
require('views/main/service/info/metrics/flume/flume_agent_metrics_section');
require('views/main/service/info/metrics/flume/flume_incoming_sum');
require('views/main/service/info/metrics/flume/flume_incoming_mma');
require('views/main/service/info/metrics/flume/flume_outgoing_sum');
require('views/main/service/info/metrics/flume/flume_outgoing_mma');
require('views/main/service/info/metrics/flume/channel_fill_pct');
require('views/main/service/info/metrics/flume/channel_size');
require('views/main/service/info/metrics/flume/sink_connection_failed');
require('views/main/service/info/metrics/flume/sink_drain_success');
require('views/main/service/info/metrics/flume/source_accepted');
require('views/main/service/info/metrics/flume/gc');
require('views/main/service/info/metrics/flume/jvm_heap');
require('views/main/service/info/metrics/flume/jvm_threads_runnable');
require('views/main/service/info/metrics/flume/cpu_user');
require('views/main/service/info/metrics/flume/flume_metric_graph');
require('views/main/service/info/metrics/flume/flume_metric_graphs');

require('views/main/service/add_view');
require('views/main/service/reassign_view');
require('views/main/service/reassign/step1_view');
require('views/main/service/reassign/step2_view');
require('views/main/service/reassign/step3_view');
require('views/main/service/reassign/step4_view');
require('views/main/service/reassign/step5_view');
require('views/main/service/reassign/step6_view');
require('views/main/service/manage_config_groups_view');
require('views/main/charts/menu');
require('views/main/charts/heatmap');
require('views/main/charts/heatmap/heatmap_rack');
require('views/main/charts/heatmap/heatmap_host');
require('views/main/charts/heatmap/heatmap_host_detail');
require('views/main/service/info/heatmap_view');
require('views/main/service/info/metrics_view');

require('views/main/service/widgets/create/wizard_view');
require('views/main/service/widgets/create/step1_view');
require('views/main/service/widgets/create/step2_view');
require('views/main/service/widgets/create/step3_view');
require('views/main/service/widgets/edit_view');
require('views/main/service/widgets/create/expression_view');

require('views/main/views_view');

require('views/installer');
require('views/wizard/step0_view');
require('views/wizard/step2_view');
require('views/wizard/step3_view');
require('views/wizard/step3/hostLogPopupBody_view');
require('views/wizard/step3/hostWarningPopupBody_view');
require('views/wizard/step3/hostWarningPopupFooter_view');
require('views/wizard/configureDownload_view');
require('views/wizard/selectMpacks_view');
require('views/wizard/customMpackRepos_view');
require('views/wizard/downloadMpacks_view');
require('views/wizard/customProductRepos_view');
require('views/wizard/verifyProducts_view');
require('views/wizard/step5_view');
require('views/wizard/step6_view');
require('views/wizard/step7_view');
require('views/wizard/step7/assign_master_view');
require('views/wizard/step7/credentials_tab_view');
require('views/wizard/step7/databases_tab_view');
require('views/wizard/step7/accounts_tab_view');
require('views/wizard/step7/directories_tab_view');
require('views/main/service/reassign/step7_view');
require('views/wizard/step8_view');
require('views/wizard/step9_view');
require('views/wizard/step9/hostLogPopupBody_view');
require('views/wizard/step10_view');
require('views/loading');

require('views/experimental');
