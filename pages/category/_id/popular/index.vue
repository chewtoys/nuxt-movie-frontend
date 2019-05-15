<template>
<div>
    <Movies v-if="movies" :movies="movies" :path="'/category/' + this.$router.currentRoute.params.id + '/popular'" />
</div>
</template>

<script>
import axios from 'axios';
import Movies from '~/components/Movies.vue'
export default {
    layout: "movies",
    watchQuery: ['page'],
    asyncData({ app, params, query, error }) {
        return app.$axios.$get('/api/v1/moviedb/movies/category/' + params.id, { 
                params: { 
                    page: query.page
                } 
            }).then(res => {
            return {
                movies: res
            }
        });
    },
    components: {
        Movies,
    },
    created () {
    },
    methods: {
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
    }
}
</script>