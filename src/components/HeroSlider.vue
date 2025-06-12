<template>
  <div id="hero-slider" class="carousel slide mb-4" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img :src="slide.image" class="d-block w-100" :alt="slide.title" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.text }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-slider" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-slider" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script setup>
const slides = [
  {
    image: 'https://picsum.photos/id/1018/1200/400',
    title: 'Welkom bij GamePlanet',
    text: 'Altijd het laatste gamenieuws en merchandise'
  },
  {
    image: 'https://picsum.photos/id/1022/1200/400',
    title: 'Nieuwe releases',
    text: 'Bekijk de nieuwste games van deze maand'
  },
  {
    image: 'https://picsum.photos/id/1035/1200/400',
    title: 'Game Merchandise',
    text: 'Shirts, posters en meer in onze shop'
  }
]
</script>

<style scoped>
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
