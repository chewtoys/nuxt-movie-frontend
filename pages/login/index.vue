<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h1>Login</h1>
            </div>
        </div>

        <div class="row justify-content-center" v-if="!submitting">
            <div class="col-md-6">
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
                    </div>
                    <!-- /Email -->
                    <!-- Password -->
                    <div class="form-group">
                        <label>Password:</label>
                        <input v-model="form.password" type="password" class="form-control" placeholder="Enter Password">
                    </div>
                    <!-- /Password -->
                    <button class="btn btn-primary">Login</button>
                </form>
                <!-- /Login Form -->
                <br>
                <p>Dont have an account? <nuxt-link to="/register">Register Now</nuxt-link></p>
            </div>
        </div>

        <div class="row" v-else-if="submitting">
            <div class="col-md-12">
                <p class="text-center"><i class="fas fa-spinner fa-spin"></i> Sending User Information</p>
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
            await this.$auth.loginWith("local", {
                data: this.form
            }).then(() => {
                this.$router.push('/')
            }).catch((error) => {
                this.submitting = false;
                this.loginError = true;
            });

        }
    },
}
</script>