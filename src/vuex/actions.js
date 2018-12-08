import {getgoodlist} from '@/api/api'
export const changeName = ({commit},othername)=>{
	commit('change_name',othername)
};
				
export const alertName = ({state}) =>{
					alert(state.username)
				};
export const goodslist=({commit})=>{
		return new Promise((resolve,reject)=>{
			getgoodlist().then(res=>{
				commit("CAR_GOODSCAR",res.data.data)
			}).catch(err=>{
				
			})
		})
	};
	



