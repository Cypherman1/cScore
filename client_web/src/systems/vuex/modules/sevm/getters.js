import { getRawPath, getDetectedPath } from "../../../http/service";
export default {
  selectedCamera(state) {
    return state.selectedCamera;
  },
  cameras(state) {
    let cameras = state.cameras;
    cameras.unshift("all cameras");
    return cameras;
  },
  dateRange(state) {
    return state.selectedDateRange;
  },
  tableData(state) {
    return state.tableData.map((row) => ({
      ...row,
      key: row.image_id,
      rawUrl: getRawPath(row.image_id),
      detectedUrl: getDetectedPath(row.image_id),
    }));
  },
  loading(state) {
    return state.loading;
  },
};
