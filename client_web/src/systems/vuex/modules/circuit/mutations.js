export default {
  add_gate(state, gate) {
    state.gates = [...state.gates, gate];
  },
  set_selected_box(state, selectedBox) {
    state.selectedBox = selectedBox;
  },
  set_chosing_gate(state, chosingGate) {
    state.chosingGate = chosingGate;
  },
  set_drop_box(state, dropBox) {
    state.dropBox = dropBox;
  },
  set_is_dragging(state, isDragging) {
    state.isDragging = isDragging;
  },
  set_dragging_gate(state, draggingGate) {
    state.draggingGate = draggingGate;
  },
  set_gate_position(state, pos) {
    state.gates = state.gates.map((gate) =>
      gate.id === pos.id
        ? {
            ...gate,
            x: pos.x,
            y: pos.y,
            gate_target_qubits: pos.gate_target_qubits,
            gate_layer: pos.gate_layer,
          }
        : gate
    );
  },
  change_grid_row(state, num) {
    state.gRow = state.gRow + num;
  },
  set_result_info(state, resultInfo) {
    // console.log(JSON.stringify(resulInfo));
    state.resultInfo = resultInfo;
    let labels = [];
    let data = [];
    if (resultInfo.result_info.layers) {
      const resultLayerInfo = resultInfo.result_info.layers.find(
        (layer) => layer.layer_index === state.selectedLayer
      );
      Object.keys(resultLayerInfo.probs).map((key) => {
        labels.push(key);
        data.push(resultLayerInfo.probs[key]);
      });
    }
    state.probsLabels = labels;
    state.probsData = data;
  },
  set_selected_layer(state, selectedLayer) {
    state.selectedLayer = selectedLayer;
    let labels = [];
    let data = [];
    if (state.resultInfo.result_info.layers) {
      const resultLayerInfo = state.resultInfo.result_info.layers.find(
        (layer) => layer.layer_index === selectedLayer
      );
      Object.keys(resultLayerInfo.probs).map((key) => {
        labels.push(key);
        data.push(resultLayerInfo.probs[key]);
      });
    }
    state.probsLabels = labels;
    state.probsData = data;
  },
  change_grid_col(state, num) {
    state.gCol = state.gCol + num;
  },
  set_probs_labels(state, probsLabels) {
    state.probsLabels = probsLabels;
  },
  set_probs_data(state, probsData) {
    state.probsData = probsData;
  },
  calc_circuit_info(state) {
    let circuitWidth = 0;
    let circuitDepth = 0;

    state.gates.map((gate) => {
      if (gate.gate_target_qubits[0] >= circuitWidth) {
        circuitWidth = gate.gate_target_qubits[0];
      }
      if (gate.gate_layer >= circuitDepth) {
        circuitDepth = gate.gate_layer;
      }
    });
    state.circuitWidth = circuitWidth + 1;
    state.circuitDepth = circuitDepth + 1;
    state.circuitInfo = {
      ...state.circuitInfo,
      environment: { platform: "default", target: "default" },
    };
    state.circuitInfo = {
      ...state.circuitInfo,
      circuit_info: {
        circuit_width: Number(circuitWidth) + 1,
        circuit_depth: Number(circuitDepth) + 1,
        num_layers: Number(circuitDepth) + 1,
      },
    };
    for (let i = 0; i <= Number(circuitDepth); i++) {
      state.circuitInfo = {
        ...state.circuitInfo,
        circuit_info: {
          ...state.circuitInfo.circuit_info,
          layers: [
            ...(state.circuitInfo.circuit_info.layers || []),
            {
              layer_index: i,
              num_gates: 0,
              gates: [],
            },
          ],
        },
      };
    }
    let layers = state.circuitInfo.circuit_info.layers;
    state.gates.map((gate) => {
      let curentLayer = gate.gate_layer;
      let id = layers.findIndex((obj) => obj.layer_index === curentLayer);
      if (id > -1) {
        layers[id].num_gates++;
        layers[id].gates.push({
          gate_index: layers[id].gates.length,
          gate_type: gate.gate_type,
          gate_control_qubits: gate.gate_control_qubits,
          gate_target_qubits: gate.gate_target_qubits,
          gate_params: gate.gate_params,
        });
      }
    });
    state.circuitInfo = {
      ...state.circuitInfo,
      circuit_info: { ...state.circuitInfo.circuit_info, layers: layers },
    };
  },
};
