<template>
    <div class="row">
        <div class="col-3 mb-3 featured" v-for="movie in movies" :key="movie.id" @click="viewMovie(movie.id)">
            <img v-if="movie.poster_path" class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            <img class="img-fluid" v-else-if="!movie.poster_path" />
            <h2 class="movie-title text-white mb-0">{{movie.title}}</h2>
            <small class="text-white"><i>{{movie.release_date}}</i></small>
        </div>
    </div>
</template>

<script>
export default {
    props: ['movies'],
    methods: {
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        }
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