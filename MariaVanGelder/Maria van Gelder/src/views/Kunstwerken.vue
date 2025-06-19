<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Kunstwerken</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(kunst, index) in kunstwerken" :key="index">
        <div class="card h-100">
          <img :src="kunst.url_img" class="img-fluid mb-3" :alt="kunst.titel" style="max-height: 300px; object-fit: cover;" />
          <div class="card-body">
            <h5 class="card-title">{{ kunst.titel }}</h5>
            <p class="card-text">Jaar: {{ kunst.jaartal }}</p>
            <p class="card-text">Prijs: €{{ kunst.prijs.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import kunstwerken from '@/assets/data/kunstwerken.js'
</script>

