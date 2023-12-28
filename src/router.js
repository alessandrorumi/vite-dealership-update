import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import DiscoverModelOne from './components/DiscoverModelOne.vue';
import Ownership from './components/Ownership.vue';
import Support from './components/Support.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/discover-model-1', component: DiscoverModelOne },
  { path: '/ownership', component: Ownership },
  { path: '/support', component: Support },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se c'è una posizione salvata, ritorna quella (per esempio, dopo un "back" dell'utente)
    if (savedPosition) {
      return savedPosition;
    }
    // Altrimenti, ritorna la parte superiore della pagina
    return { top: 0 };
  },
});

export default router;
