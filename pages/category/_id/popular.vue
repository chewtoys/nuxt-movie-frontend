<template>
<div>
    <Movies v-if="movies" :movies="movies" />
</div>
</template>

<script>
import axios from 'axios';
import Movies from '~/components/Movies.vue'
export default {
    components: {
        Movies,
    },
    data() {
        return {
            movies: {}
        }
    },
    created () {
        this.getFeatured();
    },
    methods: {
        async  getFeatured() {
            await this.$axios.$get('/api/v1/moviedb/movies/category/' + this.$router.currentRoute.params.id)
            .then(res => {
                console.log(res);
                this.movies = res.results;
            });
        },
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
    }
}
</script>