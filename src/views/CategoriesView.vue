<script setup>
// import Categories from '@/components/homepage/Categorie.vue';
import Categories from '@/components/homepage/Categories.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'Categories Book';
});
</script>

<template>
<br>  
<br>  
        <Categories />

</template>
