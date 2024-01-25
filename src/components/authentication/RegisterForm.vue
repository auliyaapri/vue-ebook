<script setup>
import { RouterLink } from "vue-router";


</script>
<template>
    <form action="#" method="post">
        <div class="form-group first">
            <label for="username">Name</label>
            <input type="text" class="form-control" placeholder="your name" id="username">
        </div>
        <div class="form-group first mt-3">
            <label for="username">Email</label>
            <input type="text" class="form-control" placeholder="your-email@gmail.com" id="email">
        </div>
        <div class="form-group last mt-3 mb-3">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Your Password" id="password">
        </div>


        <input type="submit" value="Continue Sign Up" class="btn btn-block btn-primary w-100">
        <br>

        <RouterLink to="/login">
        <button class="btn btn-block btn-danger text-white mt-4 w-100">
            <RouterLink to="/login" class="text-white text-decoration-none">Sign In</RouterLink>
        </button>
    </RouterLink>
    </form>
</template>