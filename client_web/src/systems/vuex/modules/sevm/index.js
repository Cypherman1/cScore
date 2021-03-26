import sevmMutations from "./mutations";
import sevmActions from "./actions";
import sevmGetters from "./getters";
import moment from "moment";

export default {
  namespaced: true,
  state: () => ({
    tableData: [],
    cameras: [],
    selectedCamera: "all cameras",
    selectedDateRange: [moment(), moment()],
    loading: false,
  }),
  mutations: sevmMutations,
  actions: sevmActions,
  getters: sevmGetters,
};
