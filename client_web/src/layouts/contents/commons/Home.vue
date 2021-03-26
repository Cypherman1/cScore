<template>
  <div class="ml-1">
    <div class="designer-header">
      <div class="col"></div>
    </div>
    <div class="designer-main row">
      <div class="col left-panel m-panel">
        <a-tabs default-active-key="1" size="small" :tabBarGutter="0">
          <a-tab-pane key="1" tab="Gates">
            <div
              id="drag-items"
              @dragstart="handleDOMDragStart"
              @drop="handleDrop"
            >
              <img
                style="width: 50px"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
                draggable="true"
              />
              <img style="width: 50px" :src="imgurl" draggable="true" />
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
        <v-stage ref="stage" :config="configKonva">
          <v-layer ref="layer"> </v-layer>
        </v-stage>
      </div>
      <div class="col-2 right-panel m-panel"></div>
    </div>
  </div>
</template>
<script>
const width = 1000;
const height = 1000;
const imglink = require("./square.png");
import Konva from "konva";

export default {
  data() {
    return {
      list: [],
      dragItemId: null,
      configKonva: {
        width: width,
        height: height,
      },
      imgurl: imglink,
      itemUrl: "",
    };
  },
  methods: {
    handleDOMDragStart(e) {
      console.log("abc");
      this.itemUrl = e.target.src;
    },
    handleDragOver(e) {
      e.preventDefault();
    },
    handleDragstart(e) {
      // save drag element:
      // console.log(this.$refs);
      // const rect = e.target;
      // console.log(rect);
      // rect.fill("red");
      // const layer = this.$refs.layer.getNode();
      // layer.draw();
      // this.dragItemId = e.target.id();
      // // move current element to the top:
      // const item = this.list.find((i) => i.id === this.dragItemId);
      // const index = this.list.indexOf(item);
      // this.list.splice(index, 1);
      // this.list.push(item);
    },
    handleDrop(e) {
      console.log("123");
      e.preventDefault();
      const stage = this.$refs.stage.getNode();
      const layer = this.$refs.layer.getNode();
      stage.setPointersPositions(e);
      Konva.Image.fromURL(this.itemUrl, function(image) {
        layer.add(image);
        image.position(stage.getPointerPosition());
        image.draggable(true);
        layer.draw();
      });
    },
    handleDragend(e) {
      // this.dragItemId = null;
    },
  },
  mounted() {
    for (let n = 0; n < 1; n++) {
      this.list.push({
        id: Math.round(Math.random() * 10000).toString(),
        x: 50,
        y: 50,
        scale: 1,
      });
    }
  },
};
</script>

<style scoped>
.designer-main {
  height: calc(100vh - 113px);
}
.designer-header {
  height: 50px;
  background-color: white;
  border-bottom: 2px solid lightgray;
}
.m-panel {
  background-color: white;
  width: 100%;
}
.left-panel {
  border-right: 2px solid lightgray;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
}
.main-panel {
  border-right: 2px solid lightgray;
}
</style>
