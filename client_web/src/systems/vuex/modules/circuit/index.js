import cirtMutations from "./mutations";
import cirtActions from "./actions";
import cirtGetters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    gates: [],
    qGrid: [
      [
        { ref: 1, gateId: 1, row: 0, col: 0 },
        { ref: 1, gateId: 1, row: 0, col: 1 },
      ],
    ],
    gRow: 2,
    gCol: 3,
    selectedBox: { x: 0, y: 0, width: 0, height: 0 },
    isDragging: false,
    draggingGate: null,
  }),
  mutations: cirtMutations,
  actions: cirtActions,
  getters: cirtGetters,
};
