<script setup>
import { ref } from "vue"
import { RouterLink, useRouter } from "vue-router";
import axios from "axios"
import { useUserStore } from "@/stores/user"


const userStore = useUserStore();
const router = useRouter();

const form = ref({
  email: "",
  password: "",
});

async function login() {
  try {
    const response = await axios.post(
      "http://192.168.100.5:8000/api/login", {
      email: form.value.email,
      password: form.value.password,
    }
    )

    localStorage.setItem('access_token', response.data.data.access_token)
    localStorage.setItem('token_type', response.data.data.token_type)
    // Ambil data pengguna dari server menggunakan store pengguna
    userStore.fetchUser();

    // Redirect ke halaman utama setelah login berhasil
    router.push("/");
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
  <form action="#" method="post">
    <div class="form-group first mb-3">
      <label for="email">email</label>
      <input v-model="form.email" name="email" type="text" class="form-control" placeholder="your-email@gmail.com" id="email" />
    </div>
    <div class="form-group last mb-3">
      <label for="password">Password</label>
      <input @keyup.enter="login" v-model="form.password" name="password" type="password" class="form-control" placeholder="Your Password" id="password" />
    </div>

    <div class="d-flex mb-5 align-items-center">
      <span class="ml-auto">
        <RouterLink to="/register" class="forgot-pass">Belum punya akun? Sign Up</RouterLink>
      </span>
    </div>
    <button @click="login" type="button" value="Log In" class="btn btn-block btn-primary w-100">
      Log In
    </button>
  </form>
</template>
