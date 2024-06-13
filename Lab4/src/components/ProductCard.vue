<template>
    <div class="product-card">
      <img :src="product.image_url" alt="Product image" class="product-image"/>
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-rating">
        <span v-for="star in 5" :key="star" class="star">
          {{ star <= product.rating ? '★' : '☆' }}
        </span>
      </div>
      <div class="buttons">
        <a :href="[telegramShareURL(product.kaspi_link, product.name)]" target="_blank">
    <button class="btn">Share</button>
  </a>
        <a v-bind:href="product.kaspi_link"><button class="btn">See more</button></a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
  });
  function telegramShareURL(url, text) {
      return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }
  </script>
  
  <style scoped>
  .product-card {
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 200px;
    border-radius: 8px;
  }
  
  .product-name {
    font-size: 1.5em;
    margin: 16px 0;
  }
  
  .product-description {
    font-size: 1em;
    color: #666;
    margin-bottom: 16px;
  }
  
  .product-rating .star {
    font-size: 1.2em;
    color: gold;
  }
  .buttons {
    display: flex;
    margin-top: 10px;
    justify-content: space-evenly;
  }
  .btn {
    text-align: center;
  width: 100px;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  background-color: green;
  color: white;
  border: none;
  }
  .button:hover, button:hover {
  opacity: 0.8;
  font-weight: normal;
}
  </style>
  