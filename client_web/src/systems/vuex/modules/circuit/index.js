import cirtMutations from "./mutations";
import cirtActions from "./actions";
import cirtGetters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    gates: [],
    panelGates: [
      {
        gateType: "ID",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Single qubit identity gate",
      },
      {
        gateType: "H",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Hadamard Gate",
      },
      {
        gateType: "X",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Pauli X (PI rotation over X-axis) aka NOT gate",
      },
      {
        gateType: "Y",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Pauli Y (PI rotation over Y-axis)",
      },
      {
        gateType: "Z",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Pauli Z (PI rotation over Z-axis)",
      },
      {
        gateType: "RX",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Rotation around the X-axis by given angle",
      },
      {
        gateType: "RY",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Rotation around the Y-axis by given angle",
      },
      {
        gateType: "RZ",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Rotation around the Z-axis by given angle",
      },
      {
        gateType: "CX",
        controlQubitsNo: 1,
        targetQubitsNo: 1,
        params: null,
        description: "Controlled NOT (CNOT) gate",
      },
      {
        gateType: "CY",
        controlQubitsNo: 1,
        targetQubitsNo: 1,
        params: null,
        description:
          "Controlled Y gate (controlled rotation over Y-axis by PI)",
      },
      {
        gateType: "CZ",
        controlQubitsNo: 1,
        targetQubitsNo: 1,
        params: null,
        description:
          "Controlled Z gate (controlled rotation over Z-axis by PI)",
      },
      {
        gateType: "U1",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Single-qubit rotation about the Z axis",
      },
      {
        gateType: "U2",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Single-qubit rotation about the X+Z axis",
      },
      {
        gateType: "U3",
        controlQubitsNo: 0,
        targetQubitsNo: 1,
        params: null,
        description: "Generic single-qubit rotation gate with 3 Euler angles",
      },
    ],
    qGrid: [
      [
        { ref: 1, gateId: 1, row: 0, col: 0 },
        { ref: 1, gateId: 1, row: 0, col: 1 },
      ],
    ],
    gRow: 2,
    gCol: 3,
    selectedBox: { x: 0, y: 0, width: 0, height: 0 },
    dropBox: { x: 0, y: 0, width: 0, height: 0 },
    isDragging: false,
    draggingGate: null,
    cWidth: 68,
    cHeight: 74,
    gWidth: 40,
    gHeight: 40,
    chosingGate: null,
    circuitWidth: 0,
    circuitDepth: 0,
    circuitInfo: {},
    resultInfo: {
      result_info: {
        num_layers: 0,
      },
    },
    selectedLayer: 0,
    probsLabel: [],
    probsData: [],
  }),
  mutations: cirtMutations,
  actions: cirtActions,
  getters: cirtGetters,
};
