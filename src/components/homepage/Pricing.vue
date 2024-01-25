<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <section id="pricing" class="pricing section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Paket Harga</h2>
      <p>Pilih paket harga yang sesuai dengan kebutuhan Anda untuk mendapatkan akses penuh ke koleksi buku kami.</p>
    </div>

    <div class="row">

      <div class="col-lg-4 col-md-6">
        <div class="box" data-aos="fade-up" data-aos-delay="100">
          <h3>Gratis</h3>
          <h4><sup>Rp</sup>0<span> / bulan</span></h4>
          <ul>
            <li>Akses ke koleksi buku terbatas</li>
            <li>Navigasi sederhana</li>
            <li>Daftar bacaan rekomendasi</li>
            <li class="na">Peminjaman terbatas</li>
            <li class="na">Tidak termasuk buku terbaru</li>
          </ul>
          <div class="btn-wrap">
            <a href="#" class="btn-buy">Pilih Paket</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
        <div class="box featured" data-aos="fade-up" data-aos-delay="200">
          <h3>Bisnis</h3>
          <h4><sup>Rp</sup>19<span> / bulan</span></h4>
          <ul>
            <li>Akses ke koleksi buku penuh</li>
            <li>Navigasi yang lebih canggih</li>
            <li>Daftar bacaan rekomendasi premium</li>
            <li>Peminjaman tanpa batas</li>
            <li class="na">Akses buku terbaru</li>
          </ul>
          <div class="btn-wrap">
            <a href="#" class="btn-buy">Pilih Paket</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <div class="box" data-aos="fade-up" data-aos-delay="300">
          <h3>Pengembang</h3>
          <h4><sup>Rp</sup>29<span> / bulan</span></h4>
          <ul>
            <li>Akses eksklusif ke koleksi buku</li>
            <li>Fitur pencarian dan filter tingkat lanjut</li>
            <li>Daftar bacaan rekomendasi khusus</li>
            <li>Peminjaman tanpa batas</li>
            <li>Akses buku terbaru dan koleksi premium</li>
          </ul>
          <div class="btn-wrap">
            <a href="#" class="btn-buy">Pilih Paket</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section><!-- End Pricing Section -->

</template>