<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const categoriesEbook = ref([]);
const books = ref([]);  // Deklarasikan books sebagai ref


async function getCategoriesEbook() {
  try {
    const response = await axios.get("https://www.apriwiguna.my.id/api/categories?limit=9");
    categoriesEbook.value = response.data.data.data;

    // Tambahkan console.log di sini untuk menampilkan isi respons
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getBooks() {
  try {
    const response = await axios.get("https://www.apriwiguna.my.id/api/products?limit=3");
    books.value = response.data.data.data;

    // console.log(response.data);

  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getCategoriesEbook();
  getBooks();
});
const truncateDescription = (description) => {
  const maxLength = 250;
  return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
};

</script>

<template>
  <section id="portfolio" class="portfolio pt-0" data-aos="fade-up">
    <div class="container p-lg-0 p-3" data-aos="fade-up" data-aos-delay="100">
      <br>
      <br>
      <div class="section-title">
        <h2>Our Ebook</h2>
        <p>Nikmati beragam ebook keunggulan dari Wiguna Reads. Temukan pengalaman membaca yang tak terlupakan dengan beragam
          pilihan ebook berkualitas. Setiap karya memberikan wawasan dan hiburan yang memikat. Jelajahi dunia literasi
          baru bersama kami.</p>
      </div>


      <div class="row g-0">
        <div v-for="(book, index) in books" :key="index"
          class="h-25 col-lg-4 col-md-6 portfolio-item filter-Romance p-3 d-flex justify-content-center align-items-center">
          <div class="card p-3">
            <!-- <img :src="book.thumbnails" class="card-img-top card-img-top-product img-fluid rounded-5" alt="" style="height: 25rem; width: 23rem; object-fit: cover;">             -->
            <img :src="book.thumbnails" class="card-img-top card-img-top-product img-fluid rounded-5 mx-auto d-block" alt="" style="height: 25rem; width: 23rem; object-fit: cover;"> 

            <div class="card-body">
              <h5 class="card-title">{{ book.name }}</h5>
              <p class="card-text">{{ truncateDescription(book.description) }}</p>
              <RouterLink :to="'/product/' + book.id" class="btn btn-primary">Lihat Detail</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <RouterLink to="/categories" class="btn btn-danger btn-md btn-block">Lihat Lainnya</RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!-- End Portfolio Section -->
</template>