import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

// import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // import.meta.env.BASE_URL digunakan untuk mendapatkan base URL dari aplikasi Vue Anda
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),   
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),   
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:id",
      name: "category-items",
      component: () => import("../views/CategoryItems.vue"),
    },

    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: () => import("../views/ServiceView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/DetailView.vue"),
    },
    // Tambahkan rute-rute lain jika diperlukan
  ]
});

export default router;
