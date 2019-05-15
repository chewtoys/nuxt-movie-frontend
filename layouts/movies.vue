<template>
    <div class="bg-black text-white">
    <Navbar />
        <main class="my-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-9">
                    <nuxt />
                </div>
                <div class="col-lg-3">
                    <MoviesSidebar />
                </div>
            </div>
        </div>
        </main>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import MoviesSidebar from '~/components/MoviesSidebar.vue'

export default {
  components: {
    Navbar,
    MoviesSidebar
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