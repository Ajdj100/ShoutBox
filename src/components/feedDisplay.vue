<template>
<div id="container">
<newPostButton></newPostButton>
<h1>main feed</h1>
</div>
</template>

<script>
import newPostButton from './newPostButton.vue';

export default {
    components: {
        newPostButton,
    }
}
</script>