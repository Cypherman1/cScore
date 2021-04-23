import api from "../../../http/service";

export default {
  addGate({ commit }, gate) {
    commit("add_gate", gate);
  },
  setSelectedBox({ commit }, selectedBox) {
    commit("set_selected_box", selectedBox);
  },
  setChosingGate({ commit }, chosingGate) {
    commit("set_chosing_gate", chosingGate);
  },
  setDropBox({ commit }, dropBox) {
    commit("set_drop_box", dropBox);
  },
  setIsDragging({ commit }, isDragging) {
    commit("set_is_dragging", isDragging);
  },
  setDraggingGate({ commit }, draggingGate) {
    commit("set_dragging_gate", draggingGate);
  },
  setGatePosition({ commit }, pos) {
    commit("set_gate_position", pos);
  },
  changeGridCol({ commit }, num) {
    commit("change_grid_col", num);
  },
  changeGridRow({ commit }, num) {
    commit("change_grid_row", num);
  },
  calcCircuitInfo({ commit }) {
    commit("calc_circuit_info");
  },
};
