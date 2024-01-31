<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

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
    <br>
    <br>
    <br>
    <br>
    <h1>dsd</h1>
</template>