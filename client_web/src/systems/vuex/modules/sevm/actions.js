import api from "../../../http/service";

export default {
  setCamera({ commit }, camera) {
    commit("set_selected_camera", camera);
  },
  async getCameras({ commit }) {
    try {
      const res = await api.get("api/cameras");
      if (res.data.status === "success") {
        commit("set_camera_list", res.data.data);
      }
    } catch (ex) {}
  },
  setDateRange({ commit }, dateRange) {
    commit("set_date_range", dateRange);
  },
  async getTableData({ commit }, data) {
    try {
      commit("set_loading", true);
      const res = await api.get(
        `api/images?from_date=${data.fromDate}&to_date=${data.toDate}&${
          data.camera !== "all cameras" ? "camera_id=" + data.camera : ""
        }`
      );
      if (res.data.status === "success") {
        commit("set_table_data", res.data.data);
      }
      commit("set_loading", false);
    } catch (ex) {
      commit("set_loading", false);
    }
  },
};
