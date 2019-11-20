import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/features',
		name: 'features',
		component: () => import('../views/Features.vue'),
		children: [
			{
				path: '',
				component: () => import('../views/features/SecondScreen.vue')
			},
			{
				path: 'data',
				component: () => import('../views/features/Data.vue')
			},
			{
				path: 'analysis',
				component: () => import('../views/features/Analysis.vue')
			}
		]
	},
	{
		path: '/privacy',
		name: 'privacy',
		component: () => import('../views/Privacy.vue')
	},
	{
		path: '/support',
		name: 'support',
		component: () => import('../views/Support.vue')
	},
	{
		path: '/download',
		name: 'download',
		component: () => import('../views/Download.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;
