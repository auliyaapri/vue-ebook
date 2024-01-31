<template>
    <!-- ======= About Section ======= -->

    <br>
    <br>
    <br>
    <br>
  
    <section id="about" class="about section-bg">
        <div class="container" data-aos="fade-up">
            <div v-if="$route.path !== '/'" class="row no-gutters align-items-center">
                <div class="content col-xl-6 d-flex align-items-stretch">
                    <div class="content">
                        <h3>Selamat datang di dunia LibroVue.</h3>
                        <p style="text-align: justify;">
                            Wiguna Reads bertujuan mengubah dunia literasi dengan memberikan akses mudah dan menyenangkan ke beragam koleksi buku. Kami tidak hanya menyediakan buku-buku terpopuler, tetapi juga menciptakan ruang eksklusif untuk mengeksplorasi karya-karya baru. Bergabunglah dengan komunitas pembaca yang dinamis, hadiri acara, klub buku, dan diskusi, dan temukan pengalaman membaca yang tak terlupakan. Selamat datang di dunia literasi Wiguna Reads, di mana keindahan kata-kata dipadukan dengan kenyamanan peminjaman buku.
                        </p>
                    </div>

                </div>
                <div class="content col-xl-6 d-flex align-items-stretch">
                    <div class="content">
                        <img src="../assets/img/about-image.jpg" alt="" class="rounded img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
            <div class="row no-gutters">
                <div class="content col-xl-5 d-flex align-items-stretch">
                    <div class="content">
                        <h3>Nikmati Kenyamanan Peminjaman Buku dengan LibroVue</h3>
                        <p>
                            Temukan pengalaman peminjaman buku yang menyenangkan dan aman dengan LibroVue. Kami hadir untuk
                            memudahkan Anda menikmati beragam koleksi buku tanpa ribet. Temukan buku-buku terbaik untuk
                            menemani
                            perjalanan literasi Anda.
                        </p>
                        <a href="#" class="about-btn2"><span>Tentang kami</span> <i class="bx bx-chevron-right"></i></a>
                    </div>

                </div>
                <div class="col-xl-7 d-flex align-items-stretch">
                    <div class="icon-boxes d-flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                <i class="bx bx-receipt"></i>
                                <h4>Peminjaman Buku Mudah</h4>
                                <p>Peminjaman buku menjadi lebih mudah dengan layanan kami, tanpa harus khawatir tentang
                                    proses yang
                                    rumit atau keamanan data yang kurang terjamin. Nikmati pengalaman membaca yang nyaman
                                    dan aman
                                    bersama kami.</p>
                            </div>
                            <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                <i class="bx bx-cube-alt"></i>
                                <h4>Pembayaran Aman</h4>
                                <p>Dapatkan kemudahan pembayaran yang aman, tanpa harus khawatir dengan potensi masalah.
                                    Kami
                                    menyediakan berbagai pilihan pembayaran untuk memastikan pengalaman peminjaman buku yang
                                    lancar dan
                                    nyaman.</p>
                            </div>
                            <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                <i class="bx bx-images"></i>
                                <h4>Pilihan Buku Terlengkap</h4>
                                <p>Pilih dari berbagai koleksi buku terlengkap kami. Mulai dari buku-buku terbaru hingga
                                    klasik,
                                    nikmati kebebasan untuk memilih bacaan sesuai selera Anda. Dengan banyaknya pilihan,
                                    Anda pasti akan
                                    menemukan buku yang cocok.</p>
                            </div>
                            <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                <i class="bx bx-shield"></i>
                                <h4>Keamanan Data Terjamin</h4>
                                <p>Keamanan data Anda adalah prioritas kami. Dengan layanan kami, Anda dapat yakin bahwa
                                    informasi
                                    pribadi Anda dijaga dengan ketat. Kami mengutamakan keamanan untuk memberikan pengalaman
                                    peminjaman
                                    buku yang bebas khawatir.</p>
                            </div>
                        </div>
                    </div><!-- End .konten-->
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  document.title = router.currentRoute.value.meta.title || 'About';
});
</script>
    