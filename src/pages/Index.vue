<!-- 首页 -->
<template>
	<div>
		<Header></Header>
		<home-header></home-header>
		首页
	</div>
</template>

<script>
	import Header from '@/components/header/index'
	import homeHeader from '@/components/header/homeHeader'
	export default {
		name:'Index',
		data(){
			return{
				
			}
		},
		components:{
			Header,
			homeHeader
		}
	}
</script>

<style>

</style>
