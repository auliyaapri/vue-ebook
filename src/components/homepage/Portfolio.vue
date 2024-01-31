<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const categoriesEbook = ref([]);
const books = ref([]);  // Deklarasikan books sebagai ref


async function getCategoriesEbook() {
  try {
    const response = await axios.get("http://192.168.100.5:8000/api/categories?limit=9");
    categoriesEbook.value = response.data.data.data;

    // Tambahkan console.log di sini untuk menampilkan isi respons
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getBooks() {
  try {
    const response = await axios.get("http://192.168.100.5:8000/api/products?limit=3");
    books.value = response.data.data.data;

    console.log(response.data);

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
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <br>
      <br>
      <div class="section-title">
        <h2>Our Ebook</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          cofilter-webnsectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
      </div>

      <div class="row g-0">
        <div v-for="(book, index) in books" :key="index"
          class="h-25 col-lg-4 col-md-6 portfolio-item filter-Romance p-3 d-flex justify-content-center">
          <div class="card p-3">
            <img :src="book.thumbnails" class="card-img-top rounded-5" alt=""
              style="height: 25rem; width: 23rem; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{ book.name }}</h5>
              <p class="card-text">{{ truncateDescription(book.description) }}</p>
              <RouterLink :to="'/product/' + book.id" class="btn btn-primary">Lihat Detail</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <RouterLink to="/categories" class="btn btn-danger">Lihat Lainnya</RouterLink>

        </div>
      </div>

    </div>
  </section><!-- End Portfolio Section -->
</template>
