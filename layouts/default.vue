<template>
  <div class="bg-black">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
html {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: black !important;
}
.bg-black {
  background-color: black !important;
}
</style>
