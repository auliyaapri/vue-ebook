
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CategoriesCard from "../layouts/CategoriesCard.vue";

const categoriesEbook = ref([]);

async function getCategoriesEbook() {
    try {
        const response = await axios.get("https://www.apriwiguna.my.id/api/categories?limit=9");
        categoriesEbook.value = response.data.data.data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getCategoriesEbook();
});



</script>
  
<template>
    <!-- ======= categories Section ======= -->
    <section id="categories" class="categories">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Top Categories</h2>
                <center>
                <p class="p-lg-0 p-3 w-100 w-lg-75">Temukan kategori yang Anda minati untuk membaca dan mengunduh buku sesuai keinginan Anda, yang memudahkan Anda dalam pengelolaan koleksi bacaan.</p>

                </center>
            </div>

            <div class="row">
                <CategoriesCard v-for="category in categoriesEbook" :id="category.id" :key="category.id"
                :title="category.name" :count="category.products_count" :image="category.thumbnails" />
            </div>
        </div>
    </section>
    <!-- End categories Section -->
</template>
  