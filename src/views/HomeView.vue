<script setup>
// import Navbar from "@/components/layouts/Navbar.vue";
import Hero from "@/components/homepage/Hero.vue";
import About from "@/components/homepage/About.vue";
import Client from "@/components/homepage/Client.vue";
import Tabs from "@/components/homepage/Tabs.vue";
import Services from "@/components/homepage/Services.vue";
import Ebook from "@/components/homepage/Ebook.vue";
import Pricing from "@/components/homepage/Pricing.vue";

import Categories from "@/components/homepage/Categories.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'Home';
});

</script>


<template>
  
    <!-- <Navbar /> -->
    
      <Hero />      
      <About />
      <Tabs />
      <Categories />
      <Services />
      <Ebook />
      <Pricing />
      
    <!-- </main> -->
  
</template>