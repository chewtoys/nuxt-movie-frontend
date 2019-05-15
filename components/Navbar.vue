<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand ><nuxt-link to="/" class="navbar-brand">
      <i class="fab fa-vuejs vuejs-icon"></i> Nuxt Movie App</nuxt-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        </li>
        <!-- Github -->
        <b-nav-item-dropdown left>
          <template slot="button-content"><i class="fab fa-github"></i> Github</template>
          <b-dropdown-item href="https://github.com/ChanningDefoe/nuxt-movie-frontend">Frontend</b-dropdown-item>
          <b-dropdown-item href="https://github.com/ChanningDefoe/nuxt-jwt-backend">Backend</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- /Github -->
      </b-navbar-nav>
      <!-- /Left aligned nav items -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- if not logged in -->
        <template v-if="!loggedIn">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
          </li>
        </template>
        <!-- /if not logged in -->
        <!-- if logged in -->
        <template v-if="loggedIn">
        <b-nav-item-dropdown right>
          <template slot="button-content">{{user.name}}</template>
          <li>
            <nuxt-link class="dropdown-item" to="/user/watchlist"><i class="fas fa-video"></i> Watchlist</nuxt-link>
          </li>
          <b-dropdown-item @click.prevent="logout"><i class="fas fa-sign-out-alt"></i> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        </template>
        <!-- /if logged in -->
        <b-nav-form @submit.prevent="search">
          <b-form-input v-model="searchQuery" size="sm" class="ml-lg-3" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <!-- /Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
        logout() {
            this.$auth.logout();
        },
        search() {
          let url = '/search';
          this.$router.push({ path: url, query: { search: this.searchQuery } });
        }
    },
}
</script>

<style scoped>
.vuejs-icon {
  color: #4fc08d;
}
</style>