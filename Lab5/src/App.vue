<template>
  <div class="">
    <header class="header">
      <div class="container h-full w-full">
        <h1 class="logo" @click="goHome">My Store</h1>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
 
const router = useRouter();

function goHome() {
   router.push("/")
}
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

</style>
