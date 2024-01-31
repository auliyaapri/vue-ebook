<script setup>
import Pricing from '@/components/homepage/Pricing.vue';
import Tabs from '@/components/homepage/Tabs.vue';


</script>

<template>
  <br>
  <br>

  <section id="tabs" class="tabs">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-6">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                  <h3>Ayo segera berlangganan untuk membaca ebook sepuasnya</h3>
                  <p class="fst-italic">
                    Temukan berbagai ebook berkualitas dengan harga terjangkau untuk menemani perjalanan literasi Anda.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2"></i> Temukan ebook dengan berbagai kriteria.</li>
                    <li><i class="bi bi-check2"></i> Penyaringan ebook berdasarkan genre, penulis, dan lainnya.</li>
                    <li><i class="bi bi-check2"></i> Dapatkan rekomendasi ebook yang sesuai dengan preferensi Anda.</li>
                  </ul>
                  <p>
                    Ciptakan pengalaman membaca yang lebih seru dan informatif dengan koleksi ebook kami, dengan harga
                    mulai
                    dari 5k per minggu dan 15k per bulan.
                  </p>
                </div>

                <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-2">
              <!-- Konten untuk Tab Cari Ebook -->
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Cari Ebook Sesuai Kriteria Anda</h3>
                  <p>
                    Temukan ebook yang Anda cari dengan cepat dan mudah menggunakan fitur pencarian kami.
                  </p>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2"></i> Temukan ebook dengan berbagai kriteria.</li>
                    <li><i class="bi bi-check2"></i> Penyaringan ebook berdasarkan genre, penulis, dan lainnya.</li>
                    <li><i class="bi bi-check2"></i> Dapatkan rekomendasi ebook yang sesuai dengan preferensi Anda.
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-3">
              <!-- Konten untuk Tab Proses Peminjaman -->
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Proses Peminjaman yang Mudah dan Cepat</h3>
                  <p>
                    Nikmati proses peminjaman ebook yang sederhana dan cepat tanpa ribet.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2"></i> Pilih ebook yang ingin Anda pinjam.</li>
                    <li><i class="bi bi-check2"></i> Isi formulir peminjaman dengan informasi yang diperlukan.</li>
                    <li><i class="bi bi-check2"></i> Verifikasi dan tunggu konfirmasi peminjaman Anda.</li>
                  </ul>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-4">
              <!-- Konten untuk Tab Verifikasi Peminjaman -->
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Verifikasi Peminjaman dengan Mudah</h3>
                  <p>
                    Pastikan peminjaman ebook Anda diverifikasi dengan cepat dan efisien.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2"></i> Cek status peminjaman Anda secara online.</li>
                    <li><i class="bi bi-check2"></i> Dapatkan notifikasi jika peminjaman Anda telah diverifikasi. </li>
                    <li><i class="bi bi-check2"></i> Siapkan diri Anda untuk menikmati ebook pilihan Anda.</li>
                  </ul>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-6 text-center">
          <img src="../assets/img/pricing/oke2.png" alt="">
        </div>
      </div>

    </div>
  </section>

  <Pricing />
</template>