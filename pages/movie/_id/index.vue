<template>
    <div class="mb-3">
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            </div>
            <div class="col-md-8">
                <h1 class="movie-title">{{movie.title}}</h1>
                <span class="release-date">Release Date: {{movie.release_date}}</span>
                <p class="genres mb-0">Genres:
                    <a v-for="genre in movie.genres" :key="genre.id" :href='"/category/" + genre.id + "/popular"'>
                    {{genre.name}} 
                    </a>
                </p>
                <h4>Overview:</h4>
                <p>{{movie.overview}}</p>
                <a v-if="movie.imdb_id" class="btn btn-outline-warning nofocus m-1" target="_blank" 
                :href='"https://www.imdb.com/title/" + movie.imdb_id'>
                    View on IMDB                
                </a>
                <AddToWatchList v-if="loggedIn" :movie="movie" class="m-1"/>
            </div>
        </div>
    </div>
</template>

<script>
import AddToWatchList from '~/components/AddToWatchList';
export default {
    layout: 'movies',
    asyncData({ app, params, query, error }) {
        return app.$axios.$get('/api/v1/moviedb/movies/info/' + params.id)
        .then(res => {
            return {
                movie: res
            }
        });
    },
    components: {
        AddToWatchList,
    },
    created () {
  
    },
    methods: {

    },
}
</script>

<style scoped>
.movie-title {
    font-size: 45px;
}

@media only screen and (max-width: 600px) {
    .movie-title {
        font-size: 28px !important;
    }
}
</style>
