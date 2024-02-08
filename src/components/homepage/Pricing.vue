<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const router = useRouter();

async function checkout(price) {
    if (!localStorage.getItem('access_token')) {

         // Pengguna belum login, arahkan ke halaman login dan tampilkan pesan alert
        Swal.fire({
            icon: 'error',
            title: 'Login Required',
            text: 'Anda harus login terlebih dahulu untuk berlangganan.',
        });
        router.push('/login'); // Ganti '/login' dengan rute yang benar
        return;
    }

    try {
        // Mengirim permintaan login ke API
        const response = await axios.post('https://www.apriwiguna.my.id/api/checkout', {
            payment_total: price,
            payment_status: "PENDING"
        },
            {
                headers: {
                    Authorization:
                        localStorage.getItem('token_type') + " " +
                        localStorage.getItem('access_token'),
                },
            }
        );
        console.log(response);
        

        

        window.location.href = response.data.data.payment_url;
    } catch (error) {
        // Menangani kesalahan jika login gagal
        console.error(error);
    }
}


onMounted(() => {
    document.title = router.currentRoute.value.meta.title || 'Pricing List';
});
</script>

<template>
    <section id="pricing" class="pricing section-bg">
        <div class="container p-3 p-lg-0" data-aos="fade-up">
            <div class="section-title">
                <h2>Paket Harga</h2>
                <p>Segera langganan ke paket kami harga yang sesuai dengan kebutuhan Anda untuk mendapatkan akses penuh ke koleksi buku kami.</p>
            </div>

            <div class="row d-flex justify-content-center">

                <div class="col-lg-4 col-md-6">
                    <div class="box featured" data-aos="fade-up" data-aos-delay="100">
                        <h3>Daftar Langganan</h3>
                        <h4><sup>Rp</sup>50.000<span></span></h4>
                        <ul>
                            <li>Akses eksklusif ke berbagai buku dengan Paket Premium.</li>
                            <li>Temukan dunia literasi dengan navigasi yang mudah.</li>
                            <li>Dapatkan rekomendasi bacaan menarik.</li>
                            <li>Mulai perjalanan membaca dengan langganan sekarang!</li>
                            <li class="na">Peminjaman terbatas</li>
                            <li class="na">Tidak termasuk buku terbaru</li>
                            <li class="na">Tidak dapat mengunduh buku.</li>
                        </ul>
                        <div class="btn-wrap">
                            <button class="btn-buy" @click="checkout(50000)">
                                Langganan Sekarang
                            </button>
                        </div>
                    </div>
                </div>               
             
            </div>
        </div>
    </section>
</template>