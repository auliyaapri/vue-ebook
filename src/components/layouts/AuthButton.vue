<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink to="/login" class="get-signIn-btn scrollto">Sign In</RouterLink>
        <RouterLink to="/register" class="get-signUp-btn scrollto d-none d-md-block">Sign Up</RouterLink>
</template>