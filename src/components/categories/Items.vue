<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import ItemCard from './../ItemCard.vue'

const items = ref([])
const category = ref({});
const route = useRoute()

async function getItemsData() {
    try {
        const response = await axios.get('http://192.168.100.5:8000/api/categories?id='+ route.params.id +'&show_product=1')
        // https://d567-2400-9800-6033-a6e4-2950-d993-6fd7-3236.ngrok-free.app/api/categories?limit=10000
        items.value = response.data.data.products
        category.value = response.data.data
    } catch (error) {
        console.error(error)
    }   
}

onMounted(() => {
    getItemsData()
})


</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-1 mt-5">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
        <center>
        <div class="d-flex justify-content-between w-75">
            <ItemCard 
                v-for="item in items" 
                :key="item.id" 
                :id="item.id"
                :title="item.name" 
                :description="item.subtitle"
                :image="item.thumbnails"/>
        </div>
    </center>
    </div>
</template>