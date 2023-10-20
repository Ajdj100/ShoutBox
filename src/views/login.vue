<script>
import signUpForm from '../components/signUpForm.vue';
import loginForm from '../components/loginForm.vue';

export default {
    data() {
        return {
            login: true,
            username: '',
            password: '',
        }
    },
    components: {
        signUpForm,
        loginForm,
    }
}


</script>


<template>
    <div id="bg" class="container mx-auto max-w-fit flex h-screen">
        <div class="bg-brand-medium rounded-3xl flex flex-col items-center p-10 m-auto drop-shadow-lg ">
            <h1 class="font-brand text-brand-main font-bold text-6xl px-14">ShoutBox</h1>

            <div id="toggler" class="inline-flex rounded-md shadow-sm my-6" role="group">
                <button type="button" @click="login = true"
                    class=" px-4 py-2 text-sm font-medium  rounded-l-lg hover:bg-gray-100 hover:text-brand-main"
                    :class="{ 'text-gray-900 bg-white': !login, 'bg-brand-main text-brand-light': login }">
                    Log In
                </button>
                <button type="button" @click="login = false"
                    class="px-4 py-2 text-sm font-medium rounded-r-md hover:bg-gray-100 hover:text-brand-main"
                    :class="{ 'text-gray-900 bg-white': login, 'bg-brand-main text-brand-light': !login }">
                    Sign Up
                </button>
            </div>

            <signUpForm v-if="login == false" />
            <loginForm v-else="login == true" />

        </div>
    </div>
</template>