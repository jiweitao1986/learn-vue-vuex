import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
import Simple from '../views/simple/Simple.vue';
import List from '../views/list/List.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/simple',
    name: 'Simple',
    component: Simple,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
