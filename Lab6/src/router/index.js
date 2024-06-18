import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Albums from "../views/AlbumsView.vue";
import AlbumDetail from "../views/AlbumDetailView.vue";
import AlbumPhotos from "../views/AlbumPhotosView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/albums", component: Albums },
    { path: "/albums/:id", component: AlbumDetail },
    { path: "/album/:id/photos", component: AlbumPhotos },
  ],
});

export default router;
