import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAlbums() {
    return apiClient.get("/albums");
  },
  getAlbum(id) {
    return apiClient.get(`/albums/${id}`);
  },
  getAlbumPhotos(id) {
    return apiClient.get(`/albums/${id}/photos`);
  },
};
