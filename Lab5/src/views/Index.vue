<template>
    <div class="list">
        <div class="card" v-for="cat in categories" :key="cat">
          <router-link :to="`/productsbycategory/${cat.id}`" class="router">
         <img :src="cat.image" alt="card" width="300">
          <h2>{{ cat.name }}</h2>
        </router-link>
      </div>
    </div>
</template>

<script setup>
import { categories } from "../database/categories"


</script>

<style scoped>
.router {
  text-decoration: none;
  color: black;
}
.list {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.card {
  width: 300px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
.card:hover {
  opacity: 0.8;
}
h2 {
  text-align: center;
}
</style>