<template>
<div>
    <div class="row" v-if="Object.keys(featured).length > 0">
        <div class="col-3 mb-3 featured" v-for="movie in featured" :key="movie.id" @click="viewMovie(movie.id)">
            <img class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            <h2 class="movie-title text-white mb-0">{{movie.title}}</h2>
            <small class="text-white"><i>{{movie.release_date}}</i></small>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            featured: {}
        }
    },
    created () {
        this.getFeatured();
    },
    methods: {
        async  getFeatured() {
           await axios.get('http://localhost:8000/api/v1/moviedb/movies/trending')
            .then(res => {
                this.featured = res.data.results;
            })
        },
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }

}
</script>

<style scoped>

.featured {
    overflow: hidden !important;
}

.featured:hover img {
    /* opacity: .9; */
    cursor: pointer;
    transition: transform .2s;
    -moz-transform: scale(1.01);
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
}
.movie-title {
    font-size: 18px;
}

</style>