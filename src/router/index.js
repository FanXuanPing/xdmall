import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
const Login = resolve => require(['@/pages/login'], resolve);
const Register = resolve => require(['@/pages/register'], resolve);





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //首页
      name: 'Index',
      component: Index
    },
		{
			path: '/Login', //登录
			name: 'Login',
			component: Login
		},
		{
			path: '/Register', //注册
			name: 'Register',
			component: Register
		},
		{
			path: '/', //首页
			name: 'Index',
			component: Index
		}
  ]
})
