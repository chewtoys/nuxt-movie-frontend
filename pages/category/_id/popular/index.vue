<template>
<div>
    <Movies v-if="movies" :movies="movies" :path="'/category/' + this.$router.currentRoute.params.id + '/popular'" />
</div>
</template>

<script>
import axios from 'axios';
import Movies from '~/components/Movies.vue'
export default {
    watchQuery: true,
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
    data() {
        return {
            movies: {},
        }
    },
    created () {
        // this.getFeatured();
    },
    methods: {
        // async  getFeatured() {
        //     await this.$axios.$get('/api/v1/moviedb/movies/category/' + this.$router.currentRoute.params.id, { 
        //         params: { 
        //             page: this.$router.currentRoute.query.page
        //         } 
        //     })
        //     .then(res => {
        //         console.log(res);
        //         this.movies = res;
        //     });
        // },
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
    }
}
</script>