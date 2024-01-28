<script setup>
import '@/assets/css/login-register.css';
import RegisterForm from '@/components/authentication/RegisterForm.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'Register';
});
</script>


<template>
    <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2" style="background-image: url('../../src/assets/img/login-register.jpg');"></div>
        <div class="contents order-2 order-md-1">

            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-7">
                        <h3>Register to <strong>Colorlib</strong></h3>
                        <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>