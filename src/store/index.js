import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    campaigns: [
      { id: "01",name: "Campaign 1", data: "cool beans"},
      { id: "02",name: "Campaign 2", data: "cheezy cheese"},
      { id: "03",name: "Campaign 3", data: "hey there"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
