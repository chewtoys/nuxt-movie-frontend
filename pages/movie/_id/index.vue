<template>
    <div class="mb-3">
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            </div>
            <div class="col-md-8">
                <h1 class="movie-title mb-0">{{movie.title}}</h1>
                <h2 v-if="movie.tagline" class="colorgreen text-uppercase tagline mb-0">{{movie.tagline}}</h2>
                <div class="mt-2">
                    <span class="mr-2" v-if="movie.release_date">
                        <i class="far fa-calendar-alt fa-lg mr-2 colorgreen"></i> {{movie.release_date}}
                    </span>
                    <span v-if="movie.vote_average">
                        <i class="fas fa-star colorgreen"></i> {{movie.vote_average}}
                    </span>
                </div>
                <div class="my-2">
                <a v-for="genre in movie.genres" 
                :key="genre.id" 
                :href='"/category/" + genre.id + "/popular"'
                class="btn btn-sm btn-success  ml-0 mr-1 my-1">
                    {{genre.name}} 
                </a>
                </div>
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
    head () {
        return {
        title: this.movie.title,
        meta: [
            { hid: 'description', name: 'description', 
            content: this.movie.title + ' | ' + this.movie.overview }
        ]
        }
    },
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

.tagline {
    font-size: 18px;
}

@media only screen and (max-width: 600px) {
    .movie-title {
        font-size: 28px !important;
    }
}

.colorgreen {
    color: #4fc08d !important;
}
</style>
