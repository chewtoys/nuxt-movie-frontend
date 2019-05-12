<template>
    <div class="container-fluid">
        <div class="row justify-content-center mt-3">
            <div class="col-md-6 text-dark">
                <div class="card">
                    <div class="card-header">
                        Register
                    </div>
                    <div class="card-body">
                    <form @submit.prevent="register">
                    <div class="form-group">
                        <label>Username:</label>
                        <input type="text" class="form-control" v-model="form.name">
                        <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="form.email">
                        <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" v-model="form.password">
                        <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                    </div>
                    <button class="btn btn-primary">Create Account</button>
                    </form>
                    <br>
                    <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
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
                name: '',
                password: ''
            },
            submitting: false
        }
    },
    methods: {
        async register() {
            this.submitting = true;
            try {
                await this.$axios.$post('/api/v1/auth/register', this.form);

                await this.$auth.loginWith("local", {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                });
                this.$router.push('/');
            } catch(e) {
                this.submitting = false;
            }
        }
    },
}
</script>