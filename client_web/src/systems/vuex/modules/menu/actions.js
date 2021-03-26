import api from "../../../http/localService";

export default {
  //Getting Menus
  getMenus({ commit }) {
    return new Promise((resolve, reject) => {
      //Call API for get menus
      api.get("api/menu").then(
        (res) => {
          // Menu info structure is 2-dimensional, which has parent's id
          const menuRaw = res.data.menus || [];
          commit("setMenus", menuRaw);
        },
        (err) => {
          commit("setMenus", []);
        }
      );
    });
  },
};
