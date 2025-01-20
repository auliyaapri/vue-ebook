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


onMounted(async () => {
  await userStore.fetchUser();  
  console.log(isLoggedIn.value); 
});
</script>


<template>
  <div>
    <header id="header" class="fixed-top " :class="{ 'header-scrolled': isHeaderScrolled }">    
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto ">
          <RouterLink to="/">

            <img class="logo-image d-none d-md-block" src="../../assets/img/navbar-logo2.png" alt="Logo Wiguna Reads">
            <img style="height: 50px;" class="bg-danger img-fluid logo-image d-block d-md-none" src="../../assets/img/navbar-logo2.png" alt="Logo Wiguna Reads">
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
         

            <RouterLink class="nav-link scrollto" :class="{
              'active': route.path.startsWith('/categories/') || route.path === '/categories'
            }" to="/categories">
              Categories
            </RouterLink>

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
.header-scrolled {
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.logo-image {
  height: 3.5rem;
  width: auto;
}
</style>
