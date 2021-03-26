export default {
  set_selected_camera(state, camera) {
    state.selectedCamera = camera;
  },
  set_camera_list(state, cameras) {
    state.cameras = cameras;
  },
  set_date_range(state, dateRange) {
    state.selectedDateRange = dateRange;
  },
  set_table_data(state, tableData) {
    state.tableData = tableData;
  },
  set_loading(state, loading) {
    state.loading = loading;
  },
};
