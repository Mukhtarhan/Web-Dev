<template>
    <div>
        <h1>Welcome to the Music Album Collection</h1>
    <p>This is the home page of our awesome music album collection app. You can browse albums, view details, and explore photos of your favorite albums.</p>
    <nav>
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/albums" class="nav-link">Albums</router-link>
    </nav>
</div>
</template>

<style scoped>


h1 {
  font-size: 2.5rem;
  color: #333;
  padding-left: 10px;
  margin-top: 8px;
}

p {
  padding-left: 10px;  
  margin-top: 10px;  
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}


</style>