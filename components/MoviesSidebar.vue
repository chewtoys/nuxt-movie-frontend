<template>
    <div>
        <h3>Popular Movies</h3>
        <nuxt-link
        to="/"
        class="btn btn-outline-warning m-1 nofocus btn-sm"
        exact-active-class="btn btn-warning text-dark">All</nuxt-link>
        <template v-for="genre in genres">
        <nuxt-link
        :key="genre.id" 
        :to="'/category/' + genre.id + '/popular'"
        class="btn btn-outline-warning m-1 nofocus btn-sm"
        active-class="btn btn-warning text-dark btn-sm">{{genre.name}}</nuxt-link>
        </template>
    </div>
</template>

<script>
import categories from '~/assets/json/categories.json'
export default {
    data() {
        return {
            genres: categories.genres
        }
    },
}
</script>

<style>
 
</style>