<template>
  <div class="page-container">
    <NavBar />
    <div class="content-wrap">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="less">
@import "@/styles/variables.less";

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1;
}
</style>

