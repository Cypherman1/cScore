export default {
  //When commit request authrization, status is changed to 'loading'
  auth_request(state) {
    state.status = "loading";
  },
  //When commit successed, change status to 'success' and store Token and User info
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  //When cause error, change status to 'error'
  auth_error(state) {
    state.status = "error";
  },
  //When commit logout, change status and Token empty
  logout(state) {
    state.status = "";
    state.token = "";
  },
};
