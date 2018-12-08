<template>
	<div class="header">
		头部
		<div @click="goCar()">购物车</div>
	</div>
</template>

<script>
	export default {
		name:'header',
		data(){
			return{
				
			}
		},
		methods:{
			goCar(){
				this.$router.push({name:'GoodList'})
			}
		}
	}
</script>

<style scoped="scoped">
.header{
	height: 60px;
	width: 100%;
	background-color: orange;
	text-align: center;
	line-height: 60px;
	color: #ffffff;
}
</style>
