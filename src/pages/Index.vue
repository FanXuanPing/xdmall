<!-- 首页 -->
<template>
	<div>
		<Header></Header>
		<home-header></home-header>
		首页
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '@/components/header/index'
	import homeHeader from '@/components/header/homeHeader'
	import Footer from '@/components/footer'
	export default {
		name:'Index',
		data(){
			return{
				
			}
		},
		components:{
			Header,
			homeHeader,
			Footer
		}
	}
</script>

<style>

</style>
