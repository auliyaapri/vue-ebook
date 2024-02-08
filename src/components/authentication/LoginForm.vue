<script setup>
import { ref } from "vue"
import { RouterLink, useRouter } from "vue-router";
import axios from "axios"
import { useUserStore } from "@/stores/user"
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


const userStore = useUserStore();
const router = useRouter();

const form = ref({
  email: "",
  password: "",
});

const error = ref(null);

async function login() {
  try {
    const response = await axios.post(
      "https://www.apriwiguna.my.id/api/login", {
      email: form.value.email,
      password: form.value.password,
    }
    )

    localStorage.setItem('access_token', response.data.data.access_token)
    localStorage.setItem('token_type', response.data.data.token_type)
    // Ambil data pengguna dari server menggunakan store pengguna
    userStore.fetchUser();


    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil!',
      text: 'Selamat datang di Wiguna Reads! Jelajahi dan nikmati perjalanan membaca Anda dengan koleksi kami.'
    });
    // Redirect ke halaman utama setelah login berhasil
    router.push("/");
    // console.log(response);
    
  } catch (error) {
    console.error(error);
    showErrorModal("Email atau password salah"); // Menampilkan pesan kesalahan menggunakan modal

  }
}

function showErrorModal(message) {
  // Menggunakan modal Bootstrap untuk menampilkan pesan kesalahan
  const modal = new bootstrap.Modal(document.getElementById('errorModal'), {
    keyboard: false
  });
  error.value = message;
  modal.show();
}
</script>
<template>
  <form action="#" method="post">
    <div class="form-group first mb-3">
      <label for="email">email</label>
      <input v-model="form.email" name="email" type="text" class="form-control" placeholder="your-email@gmail.com"
        id="email" />
    </div>
    <div class="form-group last mb-3">
      <label for="password">Password</label>
      <input @keyup.enter="login" v-model="form.password" name="password" type="password" class="form-control"
        placeholder="Your Password" id="password" />
    </div>

    <div class="d-flex mb-5 align-items-center">
      <span class="ml-auto">
        <RouterLink to="/register" class="forgot-pass">Belum punya akun? Sign Up</RouterLink>
      </span>
    </div>

    <!-- jika salah login -->
    <div id="errorModal" class="modal fade" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="errorModalLabel">Error</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ error }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- jika salah login -->
    <button @click="login" type="button" value="Log In" class="btn btn-block btn-primary w-100">
      Log In
    </button>
  </form>
</template>
