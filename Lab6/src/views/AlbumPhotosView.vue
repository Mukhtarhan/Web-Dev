<template>
<button class = "back-button" type="button" @click="$router.go(-1)"> Back </button>

<div class="photos" v-if="!loader">
    <img v-for="photo of photos" :src="photo.url" alt="Photo of album">
</div>

<div class="ring" v-if="loader">
  Loading <span></span>
</div>
   
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import albumService from '../services/albumService'

const loader = ref(true)
const route = useRoute();
const photos = ref([]);

const fetchPhotos = async () => {
    const response = await albumService.getAlbumPhotos(route.params.id);
    loader.value = false
    photos.value = response.data;
};

onMounted(fetchPhotos);

</script>

<style scoped>


.back-button {
  font-size: 20px;
  font-weight: 200;
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

.photos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
}

.photos img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photos img:hover {
  transform: scale(1.05);
}
</style>