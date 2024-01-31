<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

async function checkout(price) {
    try {
        // Mengirim permintaan login ke API
        const response = await axios.post('http://192.168.100.5:8000/api/checkout', {
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
    document.title = router.currentRoute.value.meta.title || 'Daftar Harga';
});
</script>

<template>
    
    <section id="pricing" class="pricing section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Paket Harga</h2>
                <p>Pilih paket harga yang sesuai dengan kebutuhan Anda untuk mendapatkan akses penuh ke koleksi buku kami.
                </p>
            </div>

            <div class="row d-flex justify-content-center">

                <div class="col-lg-4 col-md-6">
                    <div class="box" data-aos="fade-up" data-aos-delay="100">
                        <h3>Gratis</h3>
                        <h4><sup>Rp</sup>5.000<span> / Minggu</span></h4>
                        <ul>
                            <li>Akses ke koleksi buku terbatas</li>
                            <li>Navigasi sederhana</li>
                            <li>Daftar bacaan rekomendasi</li>
                            <li class="na">Peminjaman terbatas</li>
                            <li class="na">Tidak termasuk buku terbaru</li>
                        </ul>
                        <div class="btn-wrap">
                            <button class="btn-buy" @click="checkout(5000)">
                                Langganan Sekarang
                            </button>
                        </div>
                    </div>
                    
                </div>

                <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                    <div class="box featured" data-aos="fade-up" data-aos-delay="200">
                        <h3>Paket Bisnis</h3>
                        <h4><sup>Rp</sup>15.000<span> / bulan</span></h4>
                        <ul>
                            <li>Akses ke koleksi buku penuh</li>
                            <li>Navigasi yang lebih canggih</li>
                            <li>Daftar bacaan rekomendasi premium</li>
                            <li>Peminjaman tanpa batas</li>
                            <li class="na">Akses buku terbaru</li>
                        </ul>
                        <div class="btn-wrap">
                            <button class="btn-buy" @click="checkout(15000)">
                                Langganan Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
</template>