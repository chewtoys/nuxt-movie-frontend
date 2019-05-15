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
.bg-black {
  background-color: black !important;
}

.nofocus:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

</style>
