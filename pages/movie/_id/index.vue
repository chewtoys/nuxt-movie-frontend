<template>
    <div class="container" v-if="Object.keys(movie).length > 0">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mb">{{movie.title}}</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <img class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            </div>
            <div class="col-8">
                <br>
                <span class="release-date">Release Date: {{movie.release_date}}</span>
                <p class="genres mb-0">Genres:
                    <a v-for="genre in movie.genres" :key="genre.id" :href='"/category/" + genre.id + "/popular"'>
                    {{genre.name}} 
                    </a>
                </p>
                <h3>Overview:</h3>
                <p>{{movie.overview}}</p>
                <a class="btn btn-outline-warning nofocus" target="_blank" :href='"https://www.imdb.com/title/" + movie.imdb_id'>
                    View on IMDB                
                </a>
                <AddToWatchList v-if="loggedIn" :movie="movie" />
            </div>
        </div>
    </div>
</template>

<script>
import AddToWatchList from '~/components/AddToWatchList';
export default {
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
