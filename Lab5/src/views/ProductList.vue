<template>
    <div>
    <div class="product-list w-full">
        <ProductItem 
          v-for="product in filteredProducts" 
          :key="product" 
          :product="product"
          @delete="deleteProduct" 
          />
        
      </div>
      
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ProductItem from '../components/ProductItem.vue';
import { products } from '../database/db'; 
import { ref } from "vue"

const route = useRoute()
const id = parseInt(route.params.id)
const filteredProducts = ref([])


filteredProducts.value = products.filter(product => product.cat === id);

function deleteProduct(productId) {
  filteredProducts.value = filteredProducts.value.filter(product => product.id !== productId);
}



</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: auto auto auto ;
  margin-top: 30px;
  gap: 20px;
}
</style>