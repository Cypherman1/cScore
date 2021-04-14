export default {
  add_gate(state, gate) {
    state.gates = [...state.gates, gate];
  },
  set_selected_box(state, selectedBox) {
    state.selectedBox = selectedBox;
  },
  set_is_dragging(state, isDragging) {
    state.isDragging = isDragging;
  },
  set_dragging_gate(state, draggingGate) {
    state.draggingGate = draggingGate;
  },
  set_gate_position(state, pos) {
    console.log(pos.gate_target_qubits);
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
  change_grid_col(state, num) {
    state.gCol = state.gCol + num;
  },
};
