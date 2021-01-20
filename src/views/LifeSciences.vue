<template>
    <div>
        <hero-slider-life-science></hero-slider-life-science>
        <div class="container mx-auto relative z-20 m-content" >
            <div></div>
            <div class="flex bg-chr-gray justify-center border-t-4" :class="`border-chr-accent-${getAccent}`">
                <img src="./../assets/images/demo-home.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import HeroSliderLifeScience from './HeroSliderLifeScience'
    export default {
        components: {
            HeroSliderLifeScience
        },
        computed: {
            ...mapGetters('app', ['getAccent']),
        }
    }
</script>

<style scoped>

</style>