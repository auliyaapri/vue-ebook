<script setup>
import LoginForm from '@/components/authentication/LoginForm.vue'
import '@/assets/css/login-register.css';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'Login';
});
</script>


<template>
  
    <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style="background-image: url('../../src/assets/img/login-register.jpg');"></div>
    <div class="contents order-2 order-md-1 login_register">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Login to <strong>Wiguna Reads.</strong></h3>
            <p class="mb-4">Selamat datang kembali! Silakan masuk ke akun Wiguna Book's Anda.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

