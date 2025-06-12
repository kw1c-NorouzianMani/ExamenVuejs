<template>
  <div class="card h-100 shadow-sm news-card">
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ summary }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  summary: String,
  image: String
})
</script>

<style scoped>
.news-card {
  transition: transform 0.2s ease;
}
.news-card:hover {
  transform: scale(1.02);
}
</style>
