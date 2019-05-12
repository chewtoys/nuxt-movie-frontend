<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h1>Register</h1>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                <div class="form-group">
                    <label>Username:</label>
                    <input type="text" class="form-control" name="username" id="username">
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" name="email" id="email">
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" name="password" id="password">
                </div>
                <button class="btn btn-primary">Create Account</button>
                </form>
                <br>
                <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
            </div>
        </div>
    </div>
</template>