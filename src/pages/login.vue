<!-- 登录 -->
<template>
	<div>
		登录{{username}}
		<button @click="changeNames">点击是改变名字</button>
	</div>
</template>

<script>
	export default {
		name:'Login',
		data(){
			return{
				
			}
		},
		computed:{
			username(){
				return this.$store.state.login.username
			}
		},
		methods: {
			changeNames() {
				this.$store.dispatch("changeName", "肉丝儿")
			}
		},
	}
</script>

<style>

</style>
