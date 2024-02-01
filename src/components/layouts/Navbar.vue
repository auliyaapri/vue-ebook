<script setup>
import { onMounted, ref, computed } from "vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";

const route = useRoute();
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
        <h1 class="logo me-auto ">
          <RouterLink to="/">

            <img class="logo-image" src="../../assets/img/navbar-logo2.png" alt="aa">
            <span></span>
          </RouterLink>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0 " :class="{ 'navbar-mobile': isNavbarMobile }">
          <ul>
            <li>
              <RouterLink class="nav-link scrollto" :class="{ 'active': route.path === '/' }" to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink class="nav-link scrollto" :class="{ 'active': route.path === '/about' }" to="/about">About
              </RouterLink>
            </li>
            <li>
              <RouterLink class="nav-link scrollto" :class="{ 'active': route.path === '/categories' }" to="/categories">
                Categories</RouterLink>
            </li>
            <li>
              <RouterLink class="nav-link scrollto" :class="{ 'active': route.path === '/service' }" to="/service">
                Services</RouterLink>
            </li>
            <li>
              <RouterLink class="nav-link scrollto" :class="{ 'active': route.path === '/pricing' }" to="/pricing">Pricing
              </RouterLink>
            </li>
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

.logo-image {
  height: 3.5rem;
  /* Sesuaikan tinggi sesuai keinginan Anda */
  width: auto;
}</style>
