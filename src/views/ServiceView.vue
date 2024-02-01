<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Services from "@/components/homepage/Services.vue";

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'Service';
});
</script>
<template>
    
    <br>
    <br>
    <br>
    <br>
    
    <Services/>
</template>