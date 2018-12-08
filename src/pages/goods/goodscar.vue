<template>
	<div>
		<ul class="goodlist">
			<li  v-for="item in goodsInfo">
				111
			</li>
		</ul>
		
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	import {getgoodlist} from '@/api/api'
	export default {
		name:'goodscar',
		data() {
			return {
				count:1,//数量
			};
		},
		created(){
			this.goodslist();
			this.getStorecont()
		},
		computed: {
			...mapState(['goodsInfo'])
		},
		methods:{
			...mapActions(["goodslist","Alert"]),
			getStorecont(){
				console.log(this.$store.state.goodsInfo.length)
			}
		}
	}
</script>

<style scoped="scoped">
ul li{
	list-style: none;
}
.goodlist li{
	width: 150px;
	height: 200px;
	border: 1px solid red;
	float: left;
	margin-right: 5px;
}
</style>
