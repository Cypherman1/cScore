import Vue from "vue";
import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP__API_BASE_URL;

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

export default Axios;
