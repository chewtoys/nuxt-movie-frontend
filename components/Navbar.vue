<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link to="/" class="navbar-brand">Nuxt Movie App </nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      </li>
    </ul>

    <!-- User Thing -->
    <template v-if="loggedIn">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
         {{user.name}}
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a @click.prevent="logout" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
        </li>
    </ul>
    </template>
    <!-- /User Thing -->

    <!-- Auth Routes -->
    <template v-if="!loggedIn">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
        </li>
    </ul>
    </template>
    <!-- /Auth Routes -->

  </div>
</nav>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout();
        }
    },
}
</script>
