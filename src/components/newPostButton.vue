<template>
    <div id="wrapper" class="p-5 bg-brand-light border-brand-main border-2 rounded-2xl my-5 grid grid-cols-3 grid-rows-2 gap-3 max-w-5xl">
        <textarea type="text" placeholder="Shout about something!" rows="5" class="font-brand col-span-3 w-96 focus:outline-none" />
        <input type="button" value="Shout!" class="resize-none bg-brand-main text-brand-white col-start-3 font-brand p-3 rounded-lg hover:cursor-pointer px-5">
    </div>
</template>

<style scoped>
textarea {
    resize: none;
}
</style>