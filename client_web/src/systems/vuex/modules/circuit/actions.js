import api from "../../../http/quantumBroker";

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
  setSelectedlayer({ commit }, selectedLayer) {
    commit("set_selected_layer", selectedLayer);
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
  async updateCircuit({ commit }, circuitInfo) {
    try {
      // const res = await api.post(
      //   "/rest/api/post_quantum_circuit_update",
      //   circuitInfo
      // );
      // if (res.data.status === "success") {
      //   // commit("set_result_info", res.data.data);
      // } else {
      commit("set_result_info", {
        result_info: {
          num_bases: 4,
          bases: ["00", "01", "10", "11"],
          num_layers: 2,
          layers: [
            {
              layer_index: 0,
              probs: {
                "00": 0.5,
                "01": 0.5,
                "10": 0.5,
                "11": 0.5,
              },
              statevectors: {
                "00": "-0.707545+0j",
                "01": "-0.707545+0j",
                "10": "-0.707545+0j",
                "11": "-0.707545+0j",
              },
            },
            {
              layer_index: 1,
              probs: {
                "00": 1,
                "01": 1,
                "10": 0,
                "11": 0,
              },
              statevectors: {
                "00": "-0.707545+0j",
                "01": "-0.707545+0j",
                "10": "-0.707545+0j",
                "11": "-0.707545+0j",
              },
            },
          ],
        },
      });
      commit("set_selected_layer", 1);
      // }
    } catch (ex) {}
  },
};
