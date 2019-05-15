<template>
  <div>
    <Movies v-if="featured" :movies="featured" :paginate="false"/>
  </div>
</template>

<script>
import Movies from '~/components/Movies.vue'

export default {
  layout: "movies",
  asyncData({ app, params, query, error }) {
      return app.$axios.$get('/api/v1/moviedb/movies/trending')
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

