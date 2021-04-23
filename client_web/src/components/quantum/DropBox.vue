<template>
  <rect
    v-if="dropBox"
    :y="dropBox.y"
    :x="dropBox.x"
    :height="dropBox.height"
    :width="dropBox.width"
    stroke="grey"
    stroke-width="0"
    fill="lightgrey"
  ></rect>
</template>

<script>
export default {
  props: ["dropBox"],
  data() {
    return {};
  },
};
</script>
