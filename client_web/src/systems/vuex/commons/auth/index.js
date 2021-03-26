import authMutation from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

export default {
  state: {
    status: "", //Login Procedure status
    token: localStorage.getItem("token"), //Token is stored in LocalStorage
    user: {}, //Logged-in User info
  },
  mutations: authMutation,
  actions: authActions,
  getters: authGetters,
};
