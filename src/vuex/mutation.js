export const change_name=(state,a)=>{
		state.username = a
	};
				
export const CAR_GOODSCAR=(state,data)=>{
		state.goodsInfo = JSON.stringify(data)
		console.log("mutation里面的data："+state.goodsInfo)
	};