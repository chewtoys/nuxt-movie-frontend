<template>
    <div class="container-fluid">
        <div class="row justify-content-center mt-3">
            <div class="col-md-6 text-dark">
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <!-- Login Error -->
                        <div v-if="loginError" class="alert alert-danger" role="alert">
                            <strong>Login Failed.</strong> Please try again.
                            <button type="button" class="close" @click="loginError = false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <!-- /Login Error -->
                        <!-- Login Form -->
                        <form @submit.prevent="login">
                            <!-- Email -->
                            <div class="form-group">
                                <label>Email:</label>
                                <input v-model="form.email" type="email" class="form-control" placeholder="Enter Email">
                                <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
                            </div>
                            <!-- /Email -->
                            <!-- Password -->
                            <div class="form-group">
                                <label>Password:</label>
                                <input v-model="form.password" type="password" class="form-control" placeholder="Enter Password">
                                <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                            </div>
                            <!-- /Password -->
                            <button class="btn btn-primary">Login</button>
                        </form>
                        <!-- /Login Form -->
                        <br>
                        <p>Dont have an account? <nuxt-link to="/register">Register Now</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loginError: false,
            submitting: false
        }
    },
    methods: {
        async login() {
            this.submitting = true;
            try {
                await this.$auth.loginWith("local", {
                    data: this.form
                }).then(res => {
                    this.$router.push('/')
                });
            } catch(e) {
                this.submitting = false;
                this.loginError = true;
            }

        }
    },
}
</script>