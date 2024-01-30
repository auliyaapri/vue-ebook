<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";


const route = useRoute();
const userStore = useUserStore();

const user = computed(()=> userStore.getUser)
const item = ref(false);
const category = ref({});

async function getItemsData() {
    try {
        const response = await axios.get(
      "http://192.168.100.5:8000/api/products?id=" +
        route.params.id
    );
        item.value = response.data.data;
        category.value = response.data.data.category;

        // console.log(response);
    } catch (error) {
        console.error(error);
    }
}



onMounted(() => {
    
    getItemsData();
    console.log(user.value);
});
</script>

<template>
    <br>
    <br>
    <br>
    <div class="product_detail container mt-5">
        <h2>{{ item.name }}</h2>
        <p>By {{ item.subtitle }}</p>
        <div class="row">
            <div class="col-md-4">
                <img :src="item.thumbnails" class="img-fluid rounded-4" style="height: 75vh;">
            </div>
            <div class="col-md-8 d-flex align-items-center justify-content-center">
                <div class="content border border-2 rounded-4 py-4 ps-4 h-100 w-100">                    
                    <h4>Judul</h4>
                    <p>{{ item.name }}</p>                    
                    <h4>Categories</h4>
                    <p>{{ category.name }}</p>
                    <h4>About:</h4>
                    <p>{{ item.description }}</p>
                    
                    <RouterLink to="/pricing" class="btn btn-primary">
                        Subscribe
                    </RouterLink>                    
                
                    <!-- <a v-if="user" href=""></a> -->
                </div>
            </div>
        </div>
    </div>
    
    </template>
