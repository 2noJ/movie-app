import Vue from 'vue'
import Vuex from 'vuex'
import {GET_TREND, GET_POPULAR} from '../API/getMovie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trend : '',
    populars : []
  },
  mutations: {
    GET_TREND(state,data){
      state.trend = data
    },
    GET_POPULAR(state,data){
      state.populars = data.results
      console.log(data.results)
    }
  },
  actions: {
    async GET_TREND({commit}){
      const response = await GET_TREND();
      
      commit('GET_TREND',response.data);
      return response
    },
    async GET_POPULAR({commit}){
      const response = await GET_POPULAR();
      commit('GET_POPULAR',response.data);
      return response
    }
  },
  modules: {
  }
})
