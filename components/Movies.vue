<template>
<div>
    <div class="row">
        <div class="col-3 mb-3 featured" v-for="movie in movies.results" :key="movie.id" @click="viewMovie(movie.id)">
            <img v-if="movie.poster_path" class="img-fluid" :src='"https://image.tmdb.org/t/p/w500/" + movie.poster_path'>
            <img class="img-fluid" v-else-if="!movie.poster_path" />
            <h2 class="movie-title text-white mb-0">{{movie.title}}</h2>
            <p class="text-white mb-0 release-date"><i>{{movie.release_date}}</i></p>
        </div>
    </div>
    <div class="row" v-if="paginate">
        <div class="col-md-12">
            <div class="overflow-auto">
                <b-pagination-nav 
                :link-gen="linkGen" 
                :number-of-pages="pageCount"
                use-router 
                align="center"
                class="bg-black"
                >
                </b-pagination-nav>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
      movies: {
        type: Object,
        default: {}
      },
      paginate: {
          type: Boolean,
          default: true
      }
    },
    created() {

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
    computed: {
        // max pageCount of 1000
        pageCount: function () {
            if (this.movies.total_pages < 1000) {
                return this.movies.total_pages
            } else {
                return 1000;
            }
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