
<template>
  <div class="">
    <header class="header">
      <div class="container h-full w-full">
        <h1 class="logo">My Store</h1>
      </div>
    </header>
    <main class="container">
      <div class="list">
        <div class="card" v-for="cat in categories" :key="cat">
          <img :src="cat.image" alt="card" width="300">
          <h2>{{ cat.name }}</h2>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { categories } from './database/categories';
</script>

<style scoped>
.list {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
}
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

</style>
