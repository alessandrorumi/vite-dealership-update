import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Support from './components/Support.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/support', component: Support },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
