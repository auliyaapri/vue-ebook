<script setup>
import { onMounted, ref, computed } from "vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";
import { useUserStore } from "@/stores/user";

const isNavbarMobile = ref(false);
const isHeaderScrolled = ref(false);

const headerScrolled = () => {
  isHeaderScrolled.value = window.scrollY > 100;
};

const toggleMobileNavbar = () => {
  isNavbarMobile.value = !isNavbarMobile.value;
};

const userStore = useUserStore();
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);

onMounted(() => {
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    window.addEventListener("load", headerScrolled);
    window.addEventListener("scroll", headerScrolled);
  }

  userStore.fetchUser();
});
</script>

<template>
  <div>
    <header id="header" class="fixed-top d-flex align-items-center" :class="{ 'header-scrolled': isHeaderScrolled }">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="index.html">Wiguna Book's<span>.</span></a></h1>

        <nav id="navbar" class="navbar order-last order-lg-0 " :class="{ 'navbar-mobile': isNavbarMobile }">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="/categories">Categories</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          </ul>
          <i class="ms-3 bi bi-list mobile-nav-toggle bg-white" @click="toggleMobileNavbar"></i>        
        </nav>        
        <UserInfo v-if="isLoggedIn" :user="user.data" />
        <AuthButton v-else />
      </div>
    </header>
  </div>
</template>

<style>
/* Sesuaikan gaya header-scrolled sesuai kebutuhan */
.header-scrolled {
  background: #fff;
  /* Contoh warna latar belakang untuk header yang berganti saat di-scroll */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* Contoh shadow untuk memberikan efek penekanan saat di-scroll */
}
</style>
