<template>
    
<button class="back-button" type="button" @click="$router.go(-1)"> Back </button>

<div class="info" v-if="!loader">
  <h2>Album #{{album.id}} </h2>
  <h3>Title: {{title}} </h3>
  <div class="title">
    <input type="text" placeholder="Type album's title" v-model="newTitle">
    <button class="save-button" type="submit" @click="saveAlbum">Save</button>
  </div>
  <div class="link">
    <router-link :to="`/album/${album.id}/photos`">Photos</router-link>
  </div>
</div>

<div class="ring" v-if="loader">
  Loading <span></span>
</div>
    
</template>

<script setup>
import {ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import albumService from '../services/albumService'

const title = ref('')
const newTitle = ref('')
const route = useRoute();
const album = ref({});
const loader = ref(true)

const fetchAlbum = async () => {
    const response = await albumService.getAlbum(route.params.id);
    loader.value = false
    album.value = response.data;
    title.value = album.value.title
};

const saveAlbum = () => {
    alert('Album updated!');
    title.value = newTitle.value
    newTitle.value = ''
    
};

onMounted(fetchAlbum);
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


.info {
  text-align: center;
  font-size: 30px;
}

.info h2, .info h3, .info input, .info .save-button, .info .link a {
  margin-bottom: 10px;
}

.info .title, .info .link {
  margin-top: 20px;
}


.info input {
  padding: 12px;
  border: 1px solid #ccc;
  margin-right: 10px;
  border-radius: 4px;
  width: 200px;
}


.info .save-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.info .save-button:hover {
  background-color: #45a049;
}

.info .link a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.info .link a:hover {
  color: #4CAF50;
}
</style>