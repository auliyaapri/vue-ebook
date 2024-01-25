<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['id', 'title', 'image', 'count']);
</script>

<template>
  <div class="col-md-6">
    <RouterLink :to="{ name: 'category-items', params: { id: props.id } }">
      <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
        <h4 class="font-semibold text-white no-underline hover:underline">{{ props.title }}</h4>
        <img :src="props.image" :alt="props.title" class="img-fluid rounded" />
      </div>
    </RouterLink>
  </div>
</template>
