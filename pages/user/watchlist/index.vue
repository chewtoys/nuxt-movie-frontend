<template>
<div>
    <div class="row">
        <div class="col-12">
            <h1>Watchlist</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-3 mb-3 featured" v-for="movie in watchlist.data" :key="movie.movie_id" @click="viewMovie(movie.movie_id)">
            <img v-if="movie.movie_image_path" class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.movie_image_path'>
            <img class="img-fluid" v-else-if="!movie.movie_image_path" />
            <h2 class="movie-title text-white mb-0">{{movie.movie_title}}</h2>
            <!-- <p class="text-white mb-0 release-date">Added: <i>{{movie.release_date}}</i></p> -->
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="overflow-auto">
                <b-pagination-nav
                v-if="watchlist"
                :link-gen="linkGen" 
                :number-of-pages="this.watchlist.last_page"
                use-router 
                align="center"
                >
                </b-pagination-nav>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    head () {
        return {
            title: 'Watchlist',
        }
    },
    layout: "movies",
    middleware: ['auth'],
    watchQuery: ['page'],
    asyncData({ app, params, query, error }) {
        return app.$axios.$get('/api/v1/user/watchlist', {
            params: { 
                page: query.page
            } 
        })
        .then(res => {
            return {
                watchlist: res
            }
        });
    },
    methods: {
        viewMovie(id) {
            let url = '/movie/' + id;
            this.$router.push(url);
        },
        linkGen(pageNum) {
            // return pageNum === 1 ? '?' : this.path + `/${pageNum}`
            return pageNum === 1 ? '?' : `?page=${pageNum}`
        }
    },
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
.release-date {
    font-size: 12px;
}

@media only screen and (max-width: 600px) {
    .movie-title {
        font-size: 12px !important;
    }
    .release-date {
        font-size: 8px !important;
    }
} 

</style>
