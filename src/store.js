import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		activePathName: ''
  },
  mutations: {
		setPathName(state, obj){
			state.activePathName = obj.name
		}
  },
  actions: {

  }
})
