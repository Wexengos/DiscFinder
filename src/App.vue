<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <div class="app-container">
      <v-app-bar title="DiscFinder" height="64" :elevation="2" scroll="fade-image hide" />
      <RouterView />
    </div>
  </v-app>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
}
</style>
