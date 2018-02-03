<template>
    <div class="col-md-12">
        <h1>Sign In</h1>
        <div class="form-inline">
            <div class="form-group">
                <form @submit.prevent="signIn">
                <input 
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    v-model="data.username"
                    required
                />
                <input 
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="data.password"
                    required
                />
                <br>
                <br>
                <div class="col-md-4">
                    <hr>
                </div>
                <div class="col-md-4">
                    <button type="submit" class="btn btn-primary form-control">Sign In</button>
                </div>
                <div class="col-md-4">
                    <hr>
                </div>
                </form>
            </div>
        </div>
        <hr>
        <router-link to="/signup">Please Sign up</router-link>
        <p>{{ error }}</p>
    </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
    data() {
        return {
            data: {
                username: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        signIn() {
            firebaseApp.auth().signInWithEmailAndPassword(this.data.username, this.data.password).catch(error => {
                this.error = error.message
            })
        }
    }
}
</script>

