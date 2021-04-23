<template>
  <g>
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
    ></line> </g
></template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["rowid"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      gCol: "circuit/gCol",
      cWidth: "circuit/cWidth",
      cHeight: "circuit/cHeight",
      gWidth: "circuit/gWidth",
      gHeight: "circuit/gHeight",
    }),
  },
};
</script>
