import api from "../../../http/localService";
export default {
  //Login Procedure
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      //Start Authrization request
      commit("auth_request");

      //Call API for Login
      api
        .post("auth/login", user)
        .then((resp) => {
          //Success Login, store Token and User info
          const token = resp.data.token;
          const user = resp.data.user;

          //Add Token to LocalStorage
          localStorage.setItem("token", token);
          //Add token to HTTP common Header
          // Axios.defaults.headers.common["Authorization"] = token;
          //Finish Authrization request
          commit("auth_success", token, user);
          resolve(resp);
        })
        .catch((err) => {
          //Error Login, remove stored Token
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  //Logout Procedure
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      //Logout Commit, remove stored Token
      commit("logout");
      localStorage.removeItem("token");
      //Remove token in HTTP common Header
      // delete api.defaults.headers.common["Authorization"];
      resolve();
    });
  },
};
