<template>
	<div>
		商品列表
		<div>
			<ul class="goodslist">
				<li v-for="item in goodsInfo" :id="item.id">
					<div>
						{{item.title}}
					</div>
					<span>单价:{{item.price}}</span>
					<div>
						<button @click="sign(item)">-</button>
						<input type="text" style="width: 50px;" v-model="item.count"/>
						<button @click="add(item)">+</button>
					</div>
					<div>
						<button @click="addCar(item)">加入购物车</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		name:'goodlist',
		data() {
			return {
			};
		},
		created(){
			this.goodslist()
		},
		computed: {
			...mapState(['goodsInfo'])
		},
		methods:{
			...mapActions(['goodslist']),
			add(item){
				item.count+=1;
			},
			sign(item){
				if(item.count<=1){
					item.count==1;
				}else{
					item.count-=1;
				}
			},
			addCar(item){
				var count = parseInt(item.count)
				console.log(item.id,count)
			}
		}
	}
</script>

<style scoped="scoped">
.goodslist li{
	list-style: none;
	float: left;
	width: 150px;
	height: 200px;
	border: 1px solid red;
	margin-right: 5px;
}
</style>
