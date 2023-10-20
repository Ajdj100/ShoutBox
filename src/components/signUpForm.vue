<script>

export default {
    data() {
        return {
            username: '',
            displayName: '',
            password: '',
        }
    },
    methods: {
        signUp() {
            //todo: create api call
            
            console.log(this.username);
        }
    }
}
</script>


<template>
    <form id="signUp" class="flex flex-col items-start" @submit.prevent="signUp">
        <label for="username" class="font-brand text-gray-900">Username</label>
        <input id="username" v-model="username" type="text" class="bg-brand-light rounded-lg outline-none p-1 font-brand" />
        <br>
        <label for="displayName" class="font-brand text-gray-900">Display Name</label>
        <input id="displayName" type="text" class="bg-brand-light rounded-md outline-none p-1 font-brand" />
        <br>
        <label for="pass" class="font-brand text-gray-900">Password</label>
        <input id="pass" type="password" class="bg-brand-light rounded-md outline-none p-1 font-brand" />
        <br>
        <label for="confirmPass" class="font-brand text-gray-900">Confirm Password</label>
        <input id="confirmPass" type="password" class="bg-brand-light rounded-md outline-none p-1 font-brand" />
        <br>
        <input type="submit" value="submit" class="bg-brand-main w-fit mt-3 px-10 py-3
                 text-brand-light font-brand hover:cursor-pointer rounded-md mx-auto">
    </form>
</template>