<template>
    <div id="parent" class="w-screen h-screen flex">
        <sidebar />
        <feedDisplay />
    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue';
import feedDisplay from '../components/feedDisplay.vue';

export default {
    components: {
        sidebar,
        feedDisplay,
    }
}

</script>