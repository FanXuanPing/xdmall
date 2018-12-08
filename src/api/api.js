import {api} from '@/api/index'
import http from '@/utils/http'



export function getgoodlist(data){
	return http.get(api.GOODSLIST,data)
}