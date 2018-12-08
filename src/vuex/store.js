import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from '@/vuex/mutation'
import * as  actions from '@/vuex/actions'


Vue.use(Vuex)  


export default new Vuex.Store({
	state:{
		goodsInfo:[],
		ceshi:'1234'
	},
	mutations,
	actions
	
})