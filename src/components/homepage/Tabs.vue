<template>
        <section id="tabs" class="tabs">
      <div class="container" data-aos="fade-up">

        <ul class="nav nav-tabs row d-flex p-lg-0 p-3">
          <li class="nav-item col-3">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i class="bi bi-book"></i>
              <h4 class="d-none d-lg-block">Buku Tersedia</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i class="bi bi-search"></i>
              <h4 class="d-none d-lg-block">Cari Buku</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i class="ri-receipt-fill"></i>
              <h4 class="d-none d-lg-block">Proses Peminjaman</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i class="ri-check-double-line"></i>
              <h4 class="d-none d-lg-block">Verifikasi Peminjaman</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1">
            <div class="row">
              <div class="p-lg-0 p-3  p-lg-0 p-3 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                <h3>Nikmati Akses Buku yang Lebih Luas</h3>
                <p class="fst-italic">
                  Temukan berbagai buku berkualitas untuk menemani perjalanan literasi Anda.
                </p>
                <ul>
                  <li><i class="bi bi-check2"></i> Temukan buku dengan berbagai kriteria.</li>
                  <li><i class="bi bi-check2"></i> Penyaringan buku berdasarkan genre, penulis, dan lainnya.</li>
                  <li><i class="bi bi-check2"></i> Dapatkan rekomendasi buku yang sesuai dengan preferensi Anda.
                  </li>

                </ul>
                <p>
                  Ciptakan pengalaman membaca yang lebih seru dan informatif dengan koleksi buku kami.
                </p>
              </div>
              <div class="p-lg-0 p-3  p-lg-0 p-3 col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-2">
            <!-- Konten untuk Tab Cari Buku -->
            <div class="row">
              <div class="p-lg-0 p-3  p-lg-0 p-3 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Cari Buku Sesuai Kriteria Anda</h3>
                <p>
                  Temukan buku yang Anda cari dengan cepat dan mudah menggunakan fitur pencarian kami.
                </p>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="bi bi-check2"></i> Temukan buku dengan berbagai kriteria.</li>
                  <li><i class="bi bi-check2"></i> Penyaringan buku berdasarkan genre, penulis, dan lainnya.</li>
                  <li><i class="bi bi-check2"></i> Dapatkan rekomendasi buku yang sesuai dengan preferensi Anda.
                  </li>
                </ul>
              </div>
              <div class="p-lg-0 p-3 col-lg-6 order-1 order-lg-2 text-center">
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-3">
            <!-- Konten untuk Tab Proses Peminjaman -->
            <div class="row">
              <div class="p-lg-0 p-3 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Proses Peminjaman yang Mudah dan Cepat</h3>
                <p>
                  Nikmati proses peminjaman buku yang sederhana dan cepat tanpa ribet.
                </p>
                <ul>
                  <li><i class="bi bi-check2"></i> Pilih buku yang ingin Anda pinjam.</li>
                  <li><i class="bi bi-check2"></i> Isi formulir peminjaman dengan informasi yang diperlukan.</li>
                  <li><i class="bi bi-check2"></i> Verifikasi dan tunggu konfirmasi peminjaman Anda.</li>
                </ul>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
              </div>
              <div class="p-lg-0 p-3 col-lg-6 order-1 order-lg-2 text-center">
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-4">
            <!-- Konten untuk Tab Verifikasi Peminjaman -->
            <div class="row">
              <div class="p-lg-0 p-3 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Verifikasi Peminjaman dengan Mudah</h3>
                <p>
                  Pastikan peminjaman buku Anda diverifikasi dengan cepat dan efisien.
                </p>
                <ul>
                  <li><i class="bi bi-check2"></i> Cek status peminjaman Anda secara online.</li>
                  <li><i class="bi bi-check2"></i> Dapatkan notifikasi jika peminjaman Anda telah diverifikasi.
                  </li>
                  <li><i class="bi bi-check2"></i> Siapkan diri Anda untuk menikmati buku pilihan Anda.</li>
                </ul>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
              </div>
              <div class="p-lg-0 p-3 col-lg-6 order-1 order-lg-2 text-center">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Tabs Section -->

</template>