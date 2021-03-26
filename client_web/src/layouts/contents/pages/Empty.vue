<template>
  <div>
    <ur-time-picker componentid="ur_time_picker_001" class="ur-time-picker-ide" v-model="ur_time_picker_001__value" size="medium" mode="dropdown" term="30" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_time_picker_001__value: '10:00:00 AM'
      };
    },
    computed: {},
    methods: {}
  };
</script>
<style scoped>
  [componentid="ur_time_picker_001"] {
    position: absolute;
    left: 270px;
    top: 155px
  }
</style>