<template>
    <div style="height: 40rem; overflow:hidden;">
        <div class="relative ">
            <hero-image :image="activeImage" :id="active" style="height: 40rem;"></hero-image>
            <div class="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center" >
                <div class="w-full h-full flex flex-col relative justify-center">
                    <div class="flex-grow flex flex-col justify-center items-center">
                        <hero-content :slide="activeSlide"></hero-content>
                    </div>
                </div>
            </div>
            <div class="absolute bg-chrblue-900 opacity-50 z-10 w-full h-full top-0 left-0"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import HeroContent from './HeroContent'
    import HeroImage from './HeroImage'
    export default {
        props:['slide'],
        components: {
            HeroImage,
            HeroContent,
        },
        data: function() {
            return {
                active: 0,
            }
        },
        computed: {
            ...mapGetters('app', ['getAccent']),
            activeSlide() {
                return this.slide;
            },
            activeImage() {
                return this.slide.image;
            }
        },
        methods: {
            changeSlide(which) {
                this.active = which;
            }
        }
    }
</script>

<style scoped>
    .thumbs {
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    }
</style>