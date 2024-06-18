<template>
<div>
  <button class="back-button" type="button" @click="$router.go(-1)"> Back </button>
<div v-if="!loading">
    <ul>
      <li v-for="album of albums" :key="album">
        <router-link :to="`/albums/${album.id}`">{{album.id}}) {{album.title}}</router-link>
        <button class="delete-button" type="button" @click="deleteAlbum(album.id)"> Delete </button>
      </li>
    </ul>
  </div>
</div>
<div class="ring" v-if="loading">
  Loading <span></span>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import albumService from '../services/albumService'

const loading = ref(true)
const albums = ref([])

const fetchAlbums = async () => {
    const response = await albumService.getAlbums();
    albums.value = response.data;
    loading.value = false
    console.log(response.data)
  };
onMounted(fetchAlbums)  

const deleteAlbum = (id) => {
    albums.value = albums.value.filter(album => album.id !== id);
};
</script>

<style scoped>
.back-button {
  font-size: 20px;
  font-weight: 200;
  margin-top: 20px;
  letter-spacing: 1px;
  padding: 3px 5px 3px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}

.back-button:after {
  content: "";
  background-color: greenyellow;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.back-button:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .back-button {
    padding: 13px 50px 13px;
  }
}


.ring
{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-family:sans-serif;
  font-size:20px;
  color:greenyellow;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px greenyellow;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid greenyellow;
  border-right:3px solid greenyellow;
  border-radius:50%;
  animation:animateC 2s linear infinite;
}
span
{
  display:block;
  position:absolute;
  top:calc(50% - 2px);
  left:50%;
  width:50%;
  height:4px;
  background:transparent;
  transform-origin:left;
  animation:animate 2s linear infinite;
}
span:before
{
  content:'';
  position:absolute;
  width:16px;
  height:16px;
  border-radius:50%;
  background:greenyellow;
  top:-6px;
  right:-8px;
  box-shadow:0 0 20px greenyellow;
}
@keyframes animateC
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}

ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
}

li {
  margin-bottom: 10px;

}

a {
  text-decoration: none;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

a:hover {
  color: greenyellow;
}

.delete-button {
  background-color: greenyellow;
  border: none;
  color: white;
  padding: 4px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #d32f2f;
}

</style>