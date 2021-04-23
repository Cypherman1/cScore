import Vue from "vue";

import App from "./App.vue";
import router from "./systems/router/router";
import store from "./systems/vuex/store";
import http from "./systems/http/http";
import {
  Select,
  DatePicker,
  Table,
  Images,
  Tabs,
  Button,
  Icon,
} from "ant-design-vue";
import Viewer from "v-viewer";
import "ant-design-vue/dist/antd.css";
import "viewerjs/dist/viewer.css";
import VueKonva from "vue-konva";
import UUID from "vue-uuid";
import { mapGetters, mapActions } from "vuex";

import "./components";
import "./styles/common.scss";
Vue.use(VueKonva);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(Viewer);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Icon);
Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  http,
  render: (h) => h(App),
}).$mount("#app");
