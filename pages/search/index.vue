<template>
<div class="container-fluid">
    <Movies v-if="movies" :movies="movies" :paginate="false" />
</div>
</template>

<script>
import axios from 'axios';
import Movies from '~/components/Movies.vue'
export default {
    watchQuery: true,
    asyncData({ app, params, query, error }) {
        return app.$axios.$get('/api/v1/moviedb/movies/search', {
            params: {
                search: query.search,
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