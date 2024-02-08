<script setup>
import Pricing from '@/components/homepage/Pricing.vue';
import Tabs from '@/components/homepage/Tabs.vue';


</script>

<template>
  <br>
  <br>
  <br>

  <section id="tabs" class="tabs">
    <div class="container" data-aos="fade-up">
      <div class="row d-flex align-items-center">
        <div class="col-md-6 p-3 p-lg-0">
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
                  <p>Buatlah pengalaman membaca yang lebih menarik dan informatif dengan koleksi ebook kami. Dapatkan akses tanpa batas seumur hidup hanya dengan harga Rp. 50.000.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5 mt-lg-0 text-center d-flex align-items-center justify-content-center">
          <img src="../assets/img/pricing/oke3.png" class="img-fluid" style="height: 95%;" alt="">
        </div>
      </div>

    </div>
  </section>

  <Pricing />
</template>