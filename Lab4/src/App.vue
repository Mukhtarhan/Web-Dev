<template>
  <div class="">
    <header class="header">
      <div class="container h-full w-full">
        <h1 class="logo">My Store</h1>
      </div>
    </header>
    <main class="container">
      <div class="product-list w-full">
        <ProductCard v-for="product in products" :key="product" :product="product"/>
      </div>
      
    </main>
  </div>
</template>

<script setup>
import ProductCard from './components/ProductCard.vue';
import { products } from './database/db';
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: auto;
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.header {
  width: 100%;
  background-color: green;
}
.logo {
  align-items: center;
  padding: 20px 0;
  color: white;
  cursor: pointer;
}
.product-list {
  display: grid;
  grid-template-columns: auto auto auto ;
  margin-top: 30px;
  gap: 20px;
}
</style>