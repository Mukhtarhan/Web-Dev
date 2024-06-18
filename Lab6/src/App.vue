<script setup>

</script>

<template>
  <div>
    <nav>
    <ul>
      <li>
        <router-link to="/home">Home </router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/albums">Albums</router-link>
      </li>
    </ul>
  </nav>
    <div>
    <router-view></router-view>
  </div>
    
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  background-color: greenyellow;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 20px;
}




</style>
