<template>
  <div class="container-fluid">
    <Movies v-if="featured" :movies="featured" />
  </div>
</template>

<script>
import Movies from '~/components/Movies.vue'

export default {
  asyncData({ app, params, query, error }) {
      return app.$axios.$get('http://localhost:8000/api/v1/moviedb/movies/trending')
      .then(res => {
            return {
              featured: res.results
            }
      })
  },
  components: {
    Movies
  }
}
</script>

