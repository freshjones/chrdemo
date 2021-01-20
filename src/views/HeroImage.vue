<template>
    <transition name="fade" mode="out-in">
        <div :key="id">
            <img :src="chosenImage" class="w-full h-auto" />
        </div>
    </transition>
</template>

<script>
    export default {
        props:['image','id'],
        computed: {
            chosenImage() {
                return  `/images/${this.image}`
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>