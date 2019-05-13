<template>
  <div class="bg-black text-white">
    <Navbar />
    <main class="my-3">
    <nuxt />
    </main>
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

.nofocus:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

</style>
