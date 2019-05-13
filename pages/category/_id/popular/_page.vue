<template>
<div>
    <Movies v-if="movies" :movies="movies" :path="'/category/' + this.$router.currentRoute.params.id + '/popular'" />
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
            movies: {},
        }
    },
    created () {
        this.getFeatured();
    },
    methods: {
        async  getFeatured() {
            await this.$axios.$get('/api/v1/moviedb/movies/category/' + this.$router.currentRoute.params.id, { 
                params: { 
                    page: this.$router.currentRoute.params.page
                } 
            })
            .then(res => {
                console.log(res);
                this.movies = res;
            });
        },
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
    }
}
</script>