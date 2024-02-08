<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import axios from "axios"; // Pastikan untuk mengimpor axios
import { useUserStore } from "@/stores/user";
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const userStore = useUserStore();
const router = useRouter();

const form = ref({
  name: "",
  email: "",
  password: "",
  title: "Pekerja"
});

async function register() {
  if (!form.value.name || !form.value.email || !form.value.password) {
    Swal.fire({
      icon: 'error',
      title: 'Formulir Belum Lengkap',
      text: 'Harap isi semua kolom.',
    });

    return;
  }

  try {
    const response = await axios.post(
      "https://www.apriwiguna.my.id/api/register",
      {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        title: form.value.title,
      }
    );
    localStorage.setItem("access_token", response.data.data.access_token);
    localStorage.setItem("token_type", response.data.data.token_type);

    userStore.fetchUser();
    Swal.fire({
      icon: 'success',
      title: 'Registrasi Berhasil!',
      text: 'Selamat datang di Wiguna Reads! Jelajahi dan nikmati perjalanan membaca Anda dengan koleksi kami.',
    });


    router.push("/");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <form action="#" method="post">
    <div class="form-group first">
      <label for="name">Name</label>
      <input v-model="form.name" type="text" class="form-control" placeholder="your name" id="name" name="name" />
    </div>
    <div class="form-group first mt-3">
      <label for="username">Email</label>
      <input v-model="form.email" type="text" class="form-control" placeholder="your-email@gmail.com" id="email" />
    </div>
    <div class="form-group last mt-3 mb-3">
      <label for="password">Password</label>
      <input v-model="form.password" type="password" class="form-control" placeholder="Your Password" id="password" />
    </div>

    <div>
      <button @click="register" type="button" class="btn btn-block btn-primary w-100">
        Continue Sign Up
      </button>
    </div>
    <br />

    <RouterLink to="/login">
      <button class="btn btn-block btn-danger text-white w-100">
        <RouterLink to="/login" class="text-white text-decoration-none">Sign In</RouterLink>
      </button>
    </RouterLink>
  </form>
</template>
  