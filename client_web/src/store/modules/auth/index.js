import authMutations from './mutations'
import authGetters from './getters'
import authActions from './actions'

export default {
  namespaced: true,
  state: () => ({
    token: '',
    name: '',
    avatar: ''
  }),
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
}
