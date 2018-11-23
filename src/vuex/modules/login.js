const state={
	username:'Rosie'
};
const mutations={
	change_name(state,a){
		state.username = a
	}
};

const actions={
	changeName({commit},othername){
		commit('change_name',othername)
	},
	alertName({state}){
		alert(state.username)
	}
};

const getters={
	
};

export default{
	state,
	mutations,
	actions,
	getters
}














