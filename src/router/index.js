import Vue from 'vue';
import VueRouter from 'vue-router';

let routes=[{
  path:'/',
  name:'首页',
  component:() => import('../pages/home/home.vue')
},{
  path:'/about',
  name:'关于我们',
  component:() => import('../pages/about/about.vue')
}]

const router = new VueRouter({
	routes: routes
});
Vue.use(VueRouter);

export default router