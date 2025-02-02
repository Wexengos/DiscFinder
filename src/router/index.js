import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LandingPage from "@/views/LandingPage.vue";
import ItemPageView from "@/views/ItemPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/item",
      name: "item",
      component: ItemPageView,
    },
  ],
});

export default router;
