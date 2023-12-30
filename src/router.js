import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import DiscoverModelOne from './components/Model 1/DiscoverModelOne.vue';
import DiscoverModelTwo from './components/Model 2/DiscoverModelTwo.vue';
import DiscoverModelSuv from './components/Model SUV/DiscoverModelSuv.vue';
import Ownership from './components/Ownership.vue';
import Location from './components/Location.vue';
import Support from './components/Support.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/discover-model-1', component: DiscoverModelOne },
  { path: '/discover-model-2', component: DiscoverModelTwo },
  { path: '/discover-model-suv', component: DiscoverModelSuv },
  { path: '/ownership', component: Ownership },
  { path: '/location', component: Location },
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
