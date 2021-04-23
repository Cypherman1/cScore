<template>
  <div
    class="panel-gate-style"
    draggable="true"
    @dragstart="drag"
    :gate-type="pGate.gateType"
  >
    <svg class="testSVG" height="50" width="50">
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
        x="25"
        y="25"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="black"
      >
        {{ pGate.gateType }}
      </text>
    </svg>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["pGate"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      gWidth: "circuit/gWidth",
      gHeight: "circuit/gHeight",
    }),
  },

  methods: {
    ...mapActions({
      addGate: "circuit/addGate",
      setSelectedBox: "circuit/setSelectedBox",
      setDropBox: "circuit/setDropBox",
      setChosingGate: "circuit/setChosingGate",
    }),
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      ev.dataTransfer.effectAllowed = "copy";
      this.setChosingGate(ev.currentTarget.getAttribute("gate-type"));
    },
  },
};
</script>

<style scoped>
.panel-gate-style {
  padding-left: 15px;
  float: left;
}
</style>
