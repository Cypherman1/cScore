<template>
  <g
    :ref="gate.id"
    :gate-id="gate.id"
    @mousedown="tdrag"
    @mouseup="tdrop"
    @mouseleave="tdrop"
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { debounce } from "debounce";
export default {
  props: ["gate"],
  data() {
    return {
      dragOffsetX: null,
      dragOffsetY: null,
    };
  },
  computed: {
    ...mapGetters({
      cWidth: "circuit/cWidth",
      cHeight: "circuit/cHeight",
      gWidth: "circuit/gWidth",
      gHeight: "circuit/gHeight",
      draggingGate: "circuit/draggingGate",
      gRow: "circuit/gRow",
      gCol: "circuit/gCol",
    }),
    cursor() {
      return `cursor: ${this.draggingGate ? "grabbing" : "grab"}`;
    },
  },
  mounted() {
    const element = this.$refs[this.gate.id];
  },
  methods: {
    ...mapActions({
      //   addGate: "circuit/addGate",
      setSelectedBox: "circuit/setSelectedBox",
      setDropBox: "circuit/setDropBox",
      //   setIsDragging: "circuit/setIsDragging",
      setDraggingGate: "circuit/setDraggingGate",
      setGatePosition: "circuit/setGatePosition",
      changeGridCol: "circuit/changeGridCol",
      changeGridRow: "circuit/changeGridRow",
      calcCircuitInfo: "circuit/calcCircuitInfo",
    }),
    tdrag(e) {
      this.setDraggingGate(e.currentTarget.getAttribute("gate-id"));
      this.dragOffsetX =
        e.offsetX - e.currentTarget.querySelector("rect").getAttribute("x");
      this.dragOffsetY =
        e.offsetY - e.currentTarget.querySelector("rect").getAttribute("y");
    },
    tdrop(e) {
      this.dragOffsetX = this.dragOffsetY = null;
      let col = Math.floor(e.offsetX / this.cWidth);
      let row = Math.floor(e.offsetY / this.cHeight);
      if (col >= 0 && row >= 0 && e.offsetX >= 0 && e.offsetY >= 0) {
        this.setGatePosition({
          id: this.draggingGate,
          gate_target_qubits: [row],
          gate_layer: col,
          x: this.cWidth - this.gWidth + this.cWidth * col,
          y: this.cHeight - this.gHeight + this.cHeight * row,
        });
      }
      this.calcCircuitInfo();
      this.setDraggingGate(false);
      this.setDropBox(null);
    },
    tmove(e) {
      if (this.draggingGate) {
        let col = Math.floor(e.offsetX / this.cWidth);
        let row = Math.floor(e.offsetY / this.cHeight);

        if (col > this.gCol) this.changeGridCol(1);
        if (row >= this.gRow) this.changeGridRow(1);

        if (col >= 0 && row >= 0 && e.offsetX >= 0 && e.offsetY >= 0) {
          this.setGatePosition({
            id: this.draggingGate,
            gate_target_qubits: [row],
            gate_layer: col,
            x: e.offsetX - this.dragOffsetX,
            y: e.offsetY - this.dragOffsetY,
          });
          this.setDropBox({
            x: this.cWidth - this.gWidth + this.cWidth * col,
            y: this.cHeight - this.gHeight + this.cHeight * row,
            width: this.gWidth,
            height: this.gHeight,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.qbit-label {
  font: italic 13px;
}
</style>
