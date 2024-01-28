<script setup>
    const props = defineProps({
        user: Object
    })    
    const avatarUrl = "https://ui-avatars.com/api/?background=random&name=";
</script>

<template>
    <RouterLink to="/login" class="user_info scrollto">
        <img :src="avatarUrl + user.name" alt="User Avatar" class="avatar_image" />
        Halo, {{ user.name }} 
    </RouterLink>        
</template>
