<template>
    
    <div class="col-lg-4 col-md-6 g-0 mt-4">
      <div class="card border-3 p-2" style="width: 18rem;">
        <RouterLink :to="{ name: 'category-items', params: { id: id } }">
          <img :src="image" class="card-img-top rounded-4" :alt="title" style="height: 18rem;"/>
        </RouterLink>
        <div class="card-body">
          <h5 class="card-title">
            <RouterLink :to="{ name: 'category-items', params: { id: id } }">{{ title }}</RouterLink>
          </h5>
          <p class="card-text">{{ description }}</p>
          <RouterLink :to="{ name: 'product', params: { id: id } }" class="btn btn-primary">Lihat Detail</RouterLink>
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  defineProps(['id', 'title', 'image', 'description']);
  </script>
  