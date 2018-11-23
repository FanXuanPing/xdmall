import Vue from 'vue';
export default{
	changeName({commit},othername){
		commit('change_name',othername)
	}
}