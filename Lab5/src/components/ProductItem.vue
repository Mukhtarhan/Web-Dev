<template>
  <div class="product-card">
    <img :src="product.image_url" alt="product image" class="product-image" width="250" />
    <div class="product-info">
      <h2 class="product-name">{{ product.name }}</h2>
      <div class="product-interactions">
        <div class="product-rating">
          <span v-for="star in 5" :key="star" class="star">
            {{ star <= product.rating ? '★' : '☆' }}
          </span>
        </div>
        <div class="likes">
          <svg
            class="heart"
            @click="handleLikeClick"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
          >
            <path
              :fill="isLiked ? 'red' : '#A9A9A9'"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span>{{ likes }}</span>
        </div>
      </div>
      <button @click="deleteProduct" class="btn">Удалить</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});


const isLiked = ref(false);
const likes = ref(props.product.likes);
const emit = defineEmits(['delete']);

function handleLikeClick() {
  isLiked.value = !isLiked.value;
  likes.value += isLiked.value ? 1 : -1;
}

function deleteProduct() {
  emit('delete', props.product.id); 
}


</script>

<style scoped>
.likes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: green;
  font-weight: 600;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  opacity: 0.7;
}
.heart {
  cursor: pointer;
}

.product-rating .star {
  font-size: 1.2em;
  color: gold;
}


.product-card {
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 200px;
  height: 200px;
  padding: 10px;
}

.product-info {
  padding: 8px;
}

.product-name {
  font-size: 1.5em;
  margin: 0 0 10px 0;
}

.product-interactions {
  display: flex;
  justify-content: space-between;
}



.product-rating {
  font-size: 1.2em;
  margin: 10px 0;
}
</style>
