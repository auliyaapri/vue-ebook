<script setup>
  import { RouterView, useRoute } from "vue-router";
  import Navbar from './components/layouts/Navbar.vue'  
  import '@/assets/vendor/purecounter/purecounter_vanilla.js'
  import '@/assets/js/navbar.js'
  import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
  import '@/assets/vendor/isotope-layout/isotope.pkgd.min.js'
  import '@/assets/vendor/swiper/swiper-bundle.min.js'
  import '@/assets/vendor/php-email-form/validate.js'
import Footer from "./components/layouts/Footer.vue";

  const route = useRoute();
</script>

<template>
  <div>
    <!-- Hanya menampilkan Navbar jika path bukan /login -->
    <Navbar v-if="route.path !== '/login' && route.path !== '/register'" />

    <RouterView />
    <Footer v-if="route.path !== '/login' && route.path !== '/register'" />
  </div>
</template>
<style>
  @import "@/assets/vendor/aos/aos.css";
  @import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
  @import "@/assets/vendor/boxicons/css/boxicons.min.css";
  @import "@/assets/vendor/glightbox/css/glightbox.min.css";
  @import "@/assets/vendor/remixicon/remixicon.css";
  @import "@/assets/vendor/swiper/swiper-bundle.min.css";
  @import "@/assets/css/styles.css";
</style>
