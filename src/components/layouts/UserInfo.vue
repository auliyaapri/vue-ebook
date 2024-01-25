<script setup>
    const props = defineProps({
        user: Object
    })    
</script>

<template>
    <div class="nav-link scrollto ms-3">Halo, {{ user.name }} </div>
</template>