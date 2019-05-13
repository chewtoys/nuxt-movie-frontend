<template>
  <div class="container-fluid">
    <Movies v-if="featured" :movies="featured" :paginate="false"/>
  </div>
</template>

<script>
import Movies from '~/components/Movies.vue'

export default {
  asyncData({ app, params, query, error }) {
      return app.$axios.$get('http://178.128.156.52/api/v1/moviedb/movies/trending')
      .then(res => {
            return {
              featured: res
            }
      })
  },
  components: {
    Movies
  }
}
</script>

