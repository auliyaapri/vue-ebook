<script setup>
import router from '@/router';
import { ref } from 'vue';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const props = defineProps({
    user: Object
});
const avatarUrl = "https://ui-avatars.com/api/?background=random&name=";

// Fungsi untuk menangani logout
const logout = () => {
    // Implementasikan logika logout Anda di sini
    localStorage.removeItem('access_token');


    Swal.fire({
        icon: 'success',
        title: 'Logout Successful!',
        text: 'You have been successfully logged out.',
    });

    router.push('/login');
};
</script>

<template>
<div class="dropdown user_info me-4 me-lg-0">
    <button class="bg-transparent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="avatarUrl + user.name" alt="User Avatar" class="avatar_image pe-1" />
        <span class="d-none d-lg-inline">Halo, {{ user.name }}</span>
        <span class="d-inline d-lg-none">Halo, {{ user.name.split(' ')[0] }}</span>
    </button>
    <ul class="dropdown-menu">
        <li>
            <button @click="logout" type="button" value="Log In" class="dropdown-item btn btn-sm btn-danger w-100"><i class="bi bi-box-arrow-right"></i> Logout</button>
        </li>
    </ul>
</div>

</template>
