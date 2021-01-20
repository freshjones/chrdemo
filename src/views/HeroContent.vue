<template>
    <transition name="fade" mode="out-in">
        <div :key="slide.id" class="text-center">
            <div v-if="slide.subtitle" class="text-center uppercase text-white inline-block px-10 py-1" :class="`bg-chr-accent-${getAccent}`">{{ slide.subtitle }}</div>
            <h1 class="text-white text-6xl font-serif mb-3 mt-2 text-center" >{{ slide.title }}</h1>
            <div class="text-white leading-relaxed font-light text-sm text-center flex justify-center">
                <div class="w-3/5">
                    <p >{{ slide.description }}</p>
                    <chr-button v-if="slide.link" :color="getAccent" :link="slide.link"></chr-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapActions,mapGetters} from "vuex";
    import ChrButton from './ChrButton'
    export default {
        props: ['slide'],
        components: {
            ChrButton,
        },
        computed: {
            ...mapGetters('app', ['getAccent']),
        },
        methods: {
            ...mapActions('app', ['setColor']),
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .30s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>