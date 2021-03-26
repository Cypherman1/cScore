export default {
  //Get log-in and status
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
};
