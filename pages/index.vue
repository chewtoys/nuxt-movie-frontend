<template>
  <div>
    <Movies v-if="featured" :movies="featured" :paginate="false"/>
  </div>
</template>

<script>
import Movies from '~/components/Movies.vue'

export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', 
        content: 'A Nuxt.js application for displaying movies from The Movie Database (TMDb) API.' }
      ]
    }
  },
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

