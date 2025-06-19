<template>
  <div class="card h-100">
<img :src="kunstwerk.afbeelding" class="card-img-top" :alt="kunstwerk.titel" />
    <div class="card-body">
      <h5 class="card-title">{{ kunstwerk.titel }}</h5>
      <p class="card-text">{{ kunstwerk.beschrijving }}</p>
      <p class="card-text fw-bold">Prijs: €{{ kunstwerk.prijs }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  kunstwerk: Object
})
</script>
