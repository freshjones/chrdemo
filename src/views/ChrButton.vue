<template>
    <div class="relative inline-block rounded-lg my-5 py-3 px-10 shadow">
        <router-link :to="{ name: link}" class="rounded-lg text-white uppercase block relative z-20">learn more</router-link>

        <div class="opacity-80 absolute top-0 left-0 w-full h-full rounded-lg" :class="`bg-chr-accent-${color}`" ></div>
    </div>
</template>

<script>
    export default {
        props: ['color','link']
    }
</script>

<style scoped>

</style>