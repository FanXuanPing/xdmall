import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import login from '@/vuex/modules/login'

export default new Vuex.Store({
	
	modules:{
		login:login
	}
})