<script>
import { VueElement } from 'vue';



export default {
    data() {
        return {
            username: '',
            password: '',
            invalid: false
        }
    },
    methods: {
        loginMethod() {
            //todo: make API call
            const request = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: this.username, Password: this.password })
            };
            fetch('http://localhost:8080/login', request)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            localStorage.setItem("user", data.token);
                        });
                        this.$router.push('/')
                    } else {
                        this.invalid = true;
                        console.log("bad");
                    }
                    //else show invalid login message
                })
        }
    }
}

</script>


<template>
    <form id="login" class="flex flex-col items-start" @submit.prevent="loginMethod">
        <label for="inUsername" class="font-brand text-gray-900">Username</label>
        <input id="inUsername" v-model="username" type="text"
            class="bg-brand-light rounded-lg outline-none p-1 font-brand" />
        <br>
        <label for="inPw" class="font-brand text-gray-900">Password</label>
        <input id="inPw" v-model="password" type="password" class="bg-brand-light rounded-md outline-none p-1 font-brand" />
        <br>

        <input type="submit" value="submit" class="bg-brand-main w-fit mt-3 px-10 py-3
                 text-brand-light font-brand hover:cursor-pointer rounded-md mx-auto">

    </form>
</template>