<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";


const route = useRoute();
const userStore = useUserStore();

const user = computed(() => userStore.getUser)
const item = ref(false);
const category = ref({});

async function getItemsData() {
    try {
        const response = await axios.get(
            "https://www.apriwiguna.my.id/api/products?id=" +
            route.params.id
        );
        item.value = response.data.data;
        category.value = response.data.data.category;
        
        console.log(response);        
    } catch (error) {
        console.error(error);
    }
}



onMounted(() => {

    getItemsData();
    // console.log(user.value);
});
</script>

<template>
    <br>
    <br>
    <br>
    <div class="product_detail container mt-5">
        <h2>{{ item.name }}</h2>
        <p>{{ item.subtitle }}</p>
        <div class="row">
            <div class="col-lg-4">
                <img :src="item.thumbnails" class="img-fluid rounded-4 image_ebook_detail">
            </div>
            <div class="col-lg-8 mt-3 mt-lg-0 d-flex align-items-center justify-content-center">
                <div class="content border border-2 rounded-4 py-4 ps-4 h-100 w-100">
                    <h4>Title</h4>
                    <p>{{ item.name }}</p>
                    <h4>Categories</h4>
                    <p>{{ category.name }}</p>
                    <h4>Author</h4>
                    <p>{{ item.subtitle }}</p>
                    <h4>About:</h4>
                    <p>{{ item.description }}</p>
                    <a v-if="user.data && user.data.subscription && user.data.subscription.length > 0" :href="item.file"
                        class="btn btn-primary">
                        Download
                    </a>

                    <RouterLink v-if="!user.data || !user.data.subscription.length " to="/pricing" class="btn btn-primary">
                        Subscribe
                    </RouterLink>


                    <!-- <RouterLink v-else to="/pricing" class="btn btn-primary">
                        Subscribe
                    </RouterLink> -->

                    <!-- <a v-if="user" href=""></a> -->
                </div>
            </div>
        </div>
    </div>
</template>


