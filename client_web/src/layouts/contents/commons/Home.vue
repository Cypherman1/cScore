<template>
  <div class="">
    <div class="designer-header">
      <div class="col"></div>
    </div>
    <div ref="maindesigner" class="designer-main row">
      <div class="col left-panel m-panel">
        <a-tabs default-active-key="1" size="small" :tabBarGutter="0">
          <a-tab-pane key="1" tab="Gates">
            <div class="pl-2" draggable="true" @dragstart="drag">
              <svg class="testSVG" height="80" width="80">
                <rect
                  stroke="black"
                  stroke-width="1"
                  x="5"
                  y="5"
                  :width="this.gWidth"
                  :height="this.gHeight"
                  fill="none"
                ></rect>
                <text
                  class="qbit-label"
                  x="25"
                  y="25"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="black"
                >
                  Y
                </text>
              </svg>
            </div>
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
        <svg
          class="testSVG"
          :height="cHeight / 2 + gHeight / 2 + cHeight * gRow"
          :width="cWidth * (gCol + 2) + 30"
        >
          <g v-for="rowid in gRow">
            <text
              :x="0"
              :y="cHeight / 2 + gHeight / 2 + cHeight * (rowid - 1) - 10"
              class="qbit-lable"
            >
              q{{ rowid - 1 }}
            </text>
            <line
              :y1="cHeight / 2 + gHeight / 2 + cHeight * (rowid - 1)"
              :x1="0"
              :y2="cHeight / 2 + gHeight / 2 + cHeight * (rowid - 1)"
              :x2="cWidth * (gCol + 1) + 30"
              stroke="grey"
              stroke-width="2"
            ></line>
            <!-- <rect
              v-for="(cell, colid) in row"
              :y="cHeight * rowid"
              :x="30 + cWidth * colid"
              :width="cWidth"
              :height="cHeight"
              stroke="none"
              stroke-width="1"
              fill="none"
              :data-row="rowid"
              :data-col="colid"
              class="q-gate-holder"
            ></rect> -->
          </g>
          <rect
            v-if="selectedBox"
            :y="selectedBox.y"
            :x="selectedBox.x"
            :height="selectedBox.height"
            :width="selectedBox.width"
            stroke="grey"
            stroke-width="0"
            fill="lightgrey"
          ></rect>

          <g
            v-for="gate in gates"
            :gate-id="gate.id"
            @mousedown="tdrag"
            @mouseup="tdrop"
            @mousemove="tmove"
            :style="cursor"
          >
            <rect
              stroke="black"
              stroke-width="2"
              :x="gate.x"
              :y="gate.y"
              :width="gWidth"
              :height="gHeight"
              fill="white"
            ></rect>
            <text
              class="qbit-label"
              :x="gate.x + gWidth / 2"
              :y="gate.y + gHeight / 2"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="black"
            >
              {{ gate.gate_type }}
            </text>
          </g>
        </svg>
      </div>
      <div class="col right-panel m-panel">
        <vue-json-pretty :data="gates"> </vue-json-pretty>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { debounce } from "debounce";
import GNB from "../../../components/frames/commons/GNB.vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
export default {
  components: { GNB, VueJsonPretty },
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
    };
  },
  computed: {
    ...mapGetters({
      gates: "circuit/gates",
      qGrid: "circuit/qGrid",
      gRow: "circuit/gRow",
      gCol: "circuit/gCol",
      selectedBox: "circuit/selectedBox",
      isDragging: "circuit/isDragging",
      draggingGate: "circuit/draggingGate",
    }),
    cursor() {
      return `cursor: ${this.draggingGate ? "grabbing" : "grab"}`;
    },
  },
  methods: {
    ...mapActions({
      addGate: "circuit/addGate",
      setSelectedBox: "circuit/setSelectedBox",
      setIsDragging: "circuit/setIsDragging",
      setDraggingGate: "circuit/setDraggingGate",
      setGatePosition: "circuit/setGatePosition",
      changeGridCol: "circuit/changeGridCol",
      changeGridRow: "circuit/changeGridRow",
    }),
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      ev.dataTransfer.effectAllowed = "copy";
    },
    handleDrop(e) {
      e.preventDefault();
      let col = Math.floor((e.clientX - 336) / this.cWidth);
      let row = Math.floor((e.clientY - 120) / this.cHeight);
      this.addGate({
        id: this.$uuid.v4(),
        gate_target_qubits: [row],
        gate_control_qubits: [],
        gate_layer: col,
        gate_type: "Y",
        x: 30 + this.cWidth - this.gWidth + this.cWidth * col,
        y: this.cHeight - this.gHeight + this.cHeight * row,
      });
      this.setSelectedBox(null);
    },
    handleDragOver(e) {
      e.preventDefault();
      let col = Math.floor((e.clientX - 336) / this.cWidth);
      let row = Math.floor((e.clientY - 120) / this.cHeight);
      if (col >= 0) {
        this.setSelectedBox({
          x: 30 + this.cWidth - this.gWidth + this.cWidth * col,
          y: this.cHeight - this.gHeight + this.cHeight * row,
          width: this.gWidth,
          height: this.gHeight,
        });
      }
    },

    tdrag(e) {
      e.preventDefault();
      this.setDraggingGate(e.currentTarget.getAttribute("gate-id"));
      this.dragOffsetX =
        e.offsetX - e.currentTarget.querySelector("rect").getAttribute("x");
      this.dragOffsetY =
        e.offsetY - e.currentTarget.querySelector("rect").getAttribute("y");
    },
    tdrop(e) {
      e.preventDefault();
      this.dragOffsetX = this.dragOffsetY = null;
      let col = Math.floor((e.clientX - 336) / this.cWidth);
      let row = Math.floor((e.clientY - 120) / this.cHeight);

      this.setGatePosition({
        id: this.draggingGate,
        gate_target_qubits: [row],
        gate_layer: [col],
        x: 30 + this.cWidth - this.gWidth + this.cWidth * col,
        y: this.cHeight - this.gHeight + this.cHeight * row,
      });
      this.setDraggingGate(false);
      this.setSelectedBox(null);
    },
    tmove(e) {
      e.preventDefault();
      if (this.draggingGate) {
        let col = Math.floor((e.clientX - 336) / this.cWidth);
        let row = Math.floor((e.clientY - 120) / this.cHeight);
        console.log(col);
        this.setGatePosition({
          id: this.draggingGate,
          gate_target_qubits: [row],
          gate_layer: [col],
          x: e.offsetX - this.dragOffsetX,
          y: e.offsetY - this.dragOffsetY,
        });

        if (col > this.gCol) this.changeGridCol(1);
        if (row >= this.gRow) this.changeGridRow(1);
        if (col >= 0) {
          this.setSelectedBox({
            x: 30 + this.cWidth - this.gWidth + this.cWidth * col,
            y: this.cHeight - this.gHeight + this.cHeight * row,
            width: this.gWidth,
            height: this.gHeight,
          });
        }
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.qbit-lable {
  font: italic 13px;
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
}
.main-panel {
  padding-top: 20px;
  border-right: 2px solid lightgray;
  overflow-x: scroll;
  overflow-y: scroll;
}
.right-panel {
  border-right: 2px solid lightgray;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 450px;
}
.testSVG {
  z-index: 100;
}
</style>
