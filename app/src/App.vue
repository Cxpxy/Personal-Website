<script setup>
import { RouterView, useRoute } from 'vue-router'
import NarBar from './components/NarBar.vue';
const route = useRoute()
</script>

<template>
 <NarBar />
 <RouterView />
 <!-- <p>URL ={{ route.path }}</p> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
