<template>
    <button class="btn btn-outline-primary nofocus" @click="addToWatchList"><i class="fas fa-plus"></i> Add to Watch List</button>
</template>

<script>
export default {
    props: ['movie'],
    methods: {
        async addToWatchList() {
            await this.$axios.$post('/api/v1/user/addToWatchList', {
                movie_id: this.movie.id,
                imdb_movie_id: this.movie.imdb_id,
                movie_title: this.movie.title,
                movie_image_path: this.movie.poster_path
            })
            .then(res => {
                // this.movie = res;
            });
        }
    },
}
</script>
