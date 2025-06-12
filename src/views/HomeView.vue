<template>
  <div>
    <HeroSlider />

    <h2 class="mt-4">Laatste Nieuws</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
      <NieuwsCard
        v-for="(item, index) in nieuws"
        :key="index"
        :title="item.title"
        :summary="item.summary"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import NieuwsCard from '../components/NieuwsCard.vue'

const nieuws = [
  {
    title: 'Nieuwe Zelda komt uit in oktober',
    summary: 'Nintendo bevestigt dat de nieuwe Zelda-game eraan komt!',
    image: 'https://picsum.photos/id/1040/400/200'
  },
  {
    title: 'E3 komt terug in 2026',
    summary: 'Na jaren afwezigheid keert de grootste gamebeurs terug!',
    image: 'https://picsum.photos/id/1044/400/200'
  },
  {
    title: 'Top 10 games van dit jaar',
    summary: 'Wij zetten de beste games voor jou op een rijtje.',
    image: 'https://picsum.photos/id/1042/400/200'
  }
]
</script>

<style scoped>
h2 {
  color: #6f42c1;
}
</style>
