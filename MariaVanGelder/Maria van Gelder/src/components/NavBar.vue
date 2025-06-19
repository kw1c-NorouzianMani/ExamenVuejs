<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/Maria_logo_transparent.png" alt="Logo" height="40" />
    </router-link>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/kunstwerken">Kunstwerken</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

