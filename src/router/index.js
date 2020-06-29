import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "../views/Home.vue";
import Documentation from "../views/Documentation.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [{
      path: "/",
      component: Home,
    },
    {
      path: "/documentation",
      component: Documentation,
    }
  ],
});

export default router;