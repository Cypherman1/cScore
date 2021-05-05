<template>
  <div class="">
    <div class="designer-header">
      <div class="col"></div>
    </div>
    <div ref="maindesigner" class="designer-main row">
      <div class="col left-panel m-panel">
        <a-tabs default-active-key="1" size="small" :tabBarGutter="0">
          <a-tab-pane key="1" tab="Gates">
            <panel-gate
              v-for="pGate in panelGates"
              :pGate="pGate"
              :key="pGate.gateType"
            ></panel-gate>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Custom gates" force-render>
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="Favorite">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </div>
      <div
        class="col main-panel m-panel"
        @drop="handleDrop"
        @dragover="handleDragOver"
      >
        <div class="designer-panel">
          <svg
            :height="cHeight / 2 + gHeight / 2 + cHeight * gRow + 50"
            :width="cWidth * (gCol + 2) + 80"
          >
            <qu-bit v-for="rowid in gRow" :rowid="rowid" :key="rowid"></qu-bit>
            <drop-box :dropBox="dropBox"></drop-box>
            <quantum-gate
              v-for="gate in gates"
              :gate="gate"
              :key="gate.id"
            ></quantum-gate>
          </svg>
        </div>
        <div class="infomation-panel row">
          <div class="col infomation-panel-col">
            <div class="infomation-panel-header row">
              <div class="ml-1 mt-1">Probability</div>
              <div class="ml-auto">
                <span class="mr-1"> Layer </span>
                <a-select
                  style="width:80px"
                  :value="selectedLayer"
                  @change="handleSelected"
                >
                  <a-select-option
                    v-for="layer in resultInfo.result_info.num_layers"
                    :value="Number(layer) - 1"
                    :key="Number(layer) - 1"
                    >{{ layer - 1 }}</a-select-option
                  >
                </a-select>
              </div>
            </div>
            <div>
              <bar-chart
                :styles="{
                  height: '210px',
                  position: 'relative',
                }"
                :chart-data="probsData"
                :options="{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                }"
              ></bar-chart>
            </div>
          </div>
          <div class="col infomation-panel-col">
            <div class="infomation-panel-header row">
              <div class="ml-1 mt-1">State vector</div>
              <div class="ml-auto">
                <a-button type="link" icon="small-dash" />
              </div>
            </div>
            <div></div>
          </div>
          <div class="col">
            <div class="infomation-panel-header row">
              <div class="ml-1 mt-1">Bloch sphere</div>
              <div class="ml-auto">
                <a-button type="link" icon="small-dash" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="col right-panel m-panel">
        <a-tabs default-active-key="1" size="small" :tabBarGutter="0">
          <a-tab-pane key="1" tab="Circuit info" force-render>
            <vue-json-pretty :data="circuitInfo"> </vue-json-pretty>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Circuit renderer">
            <vue-json-pretty :data="gates"> </vue-json-pretty>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import GNB from "../../../components/frames/commons/GNB.vue";
import QuantumGate from "../../../components/quantum/QuantumGate.vue";
import QuBit from "../../../components/quantum/QuBit";
import DropBox from "../../../components/quantum/DropBox";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { mapGetters, mapActions } from "vuex";
import PanelGate from "../../../components/quantum/PanelGate.vue";
import BarChart from "../../../components/quantum/BarChart.js";
export default {
  components: {
    GNB,
    VueJsonPretty,
    QuantumGate,
    QuBit,
    QuBit,
    DropBox,
    PanelGate,
    DropBox,
    BarChart,
  },
  data() {
    return {
      cWidth: 68,
      cHeight: 74,
      gWidth: 40,
      gHeight: 40,
      moveable: {
        draggable: true,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: false,
        scalable: true,
        throttleScale: 0,
        rotatable: false,
        throttleRotate: 0,
        pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
        origin: false,
      },
      dragOffsetX: null,
      dragOffsetY: null,
      probabilityData: {
        labels: [],
        datasets: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      gates: "circuit/gates",
      qGrid: "circuit/qGrid",
      gRow: "circuit/gRow",
      gCol: "circuit/gCol",
      selectedBox: "circuit/selectedBox",
      dropBox: "circuit/dropBox",
      isDragging: "circuit/isDragging",
      draggingGate: "circuit/draggingGate",
      panelGates: "circuit/panelGates",
      chosingGate: "circuit/chosingGate",
      circuitInfo: "circuit/circuitInfo",
      resultInfo: "circuit/resultInfo",
      selectedLayer: "circuit/selectedLayer",
      probsLabels: "circuit/probsLabels",
      probsData: "circuit/probsData",
    }),
    cursor() {
      return `cursor: ${this.draggingGate ? "grabbing" : "grab"}`;
    },
  },
  mounted() {
    // this.fillData();
  },

  methods: {
    ...mapActions({
      addGate: "circuit/addGate",
      setSelectedBox: "circuit/setSelectedBox",
      setDropBox: "circuit/setDropBox",
      changeGridCol: "circuit/changeGridCol",
      changeGridRow: "circuit/changeGridRow",
      calcCircuitInfo: "circuit/calcCircuitInfo",
      updateCircuit: "circuit/updateCircuit",
      setSelectedlayer: "circuit/setSelectedlayer",
    }),
    // fillData() {
    //   if (this.resultInfo.result_info.layers) {
    //     this.probabilityData = {
    //       labels: this.probsLabels,
    //       datasets: [
    //         {
    //           label: "Probability",
    //           backgroundColor: "#20B2AA",
    //           data: this.probsData,
    //         },
    //       ],
    //     };
    //   }
    // },
    async handleDrop(e) {
      e.preventDefault();
      let col = Math.floor(e.offsetX / this.cWidth);
      let row = Math.floor(e.offsetY / this.cHeight);
      if (!this.draggingGate) {
        this.addGate({
          id: this.$uuid.v4(),
          gate_target_qubits: [row],
          gate_control_qubits: [],
          gate_layer: col,
          gate_type: this.chosingGate,
          gate_params: {},
          x: this.cWidth - this.gWidth + this.cWidth * col,
          y: this.cHeight - this.gHeight + this.cHeight * row,
        });
      }
      this.calcCircuitInfo();
      await this.updateCircuit(this.circuitInfo);
      this.setDropBox(null);
    },
    handleDragOver(e) {
      e.preventDefault();
      let col = Math.floor(e.offsetX / this.cWidth);
      let row = Math.floor(e.offsetY / this.cHeight);
      if (col > this.gCol) this.changeGridCol(1);
      if (row >= this.gRow) this.changeGridRow(1);
      if (col >= 0) {
        this.setDropBox({
          x: this.cWidth - this.gWidth + this.cWidth * col,
          y: this.cHeight - this.gHeight + this.cHeight * row,
          width: this.gWidth,
          height: this.gHeight,
        });
      }
    },
    handleSelected(value) {
      this.setSelectedlayer(value);
      // this.fillData();
    },
  },
};
</script>

<style scoped>
.qbit-lable {
  font: italic 13px;
}

.infomation-panel-header {
  border-bottom: 2px solid lightgray;
  margin-left: -15px;
  margin-right: -15px;
  /* height: 30px; */
  align-items: "center";
}
.designer-main {
  height: calc(100vh - 140px);
}
.designer-header {
  height: 50px;
  background-color: white;
  border-bottom: 2px solid lightgray;
}
.m-panel {
  background-color: white;
}
.left-panel {
  border-right: 2px solid lightgray;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 250px;
  padding-right: 0px;
}
.main-panel {
  border-right: 2px solid lightgray;
}
.infomation-panel {
  height: 250px;
  margin-left: -15px;
  margin-right: -15px;
}
.infomation-panel-col {
  border-right: 2px solid lightgray;
}

.designer-panel {
  border-bottom: 2px solid lightgray;
  margin-left: -15px;
  margin-right: -15px;
  overflow-x: auto;
  overflow-y: auto;
  height: calc(100vh - 388px);
  padding-left: 10px;
}
.right-panel {
  border-right: 2px solid lightgray;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 350px;
  overflow-x: auto;
  overflow-y: auto;
  height: calc(100vh - 138px);
}
.testSVG {
  z-index: 100;
}
</style>
