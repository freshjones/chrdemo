<template>
    <div style="height: 40rem; overflow:hidden;" @mouseleave="changeSlide(0)">
      <div class="relative " >
        <hero-image :image="activeImage" :id="active" style="height: 40rem;"></hero-image>
        <div class="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center" >
            <div class="w-full h-full flex flex-col relative justify-center" style="padding:50px 0 75px;">
                <div class="flex-grow flex flex-col justify-center items-center">
                    <hero-content :slide="activeSlide"></hero-content>
                </div>
                <div class="w-full top-0 right-0 flex justify-center ">
                    <div class="flex w-full justify-center max-w-screen-2xl relative items-center divide-x divide-white divide-dotted">
                        <div
                            v-for="slide in filteredSlides"
                            :key="slide.id"
                            class="p-8  cursor-pointer text-white text-center items-center relative z-10"
                            :class="active == slide.id ? '' : ''"
                            @mouseover="changeSlide(slide.id)"
                        >
                            <div class="font-serif text-lg mb-2" :class="`text-chr-accent-${getAccent}`">
                                <router-link :to="{ name: slide.link}">{{ slide.title }}</router-link>
                            </div>
                            <div class="text-xs">{{ slide.description }}</div>
                        </div>
                        <div
                            class="absolute z-0 bg-chr-primary w-full h-full top-0 left-0"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bg-chrblue-900 opacity-50 z-10 w-full h-full top-0 left-0"></div>
      </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import {mapActions,mapGetters} from "vuex";
    import HeroContent from './HeroContent'
    import HeroImage from './HeroImage'
    export default {
        props: ['slides'],
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
                return this.slides[this.active];
            },
            activeImage() {
                return this.slides[this.active].image;
            },
            filteredSlides() {
                return _.filter(this.slides, (slide) => {
                    return slide.show == true;
                });
            }
        },
        methods: {
            ...mapActions('app', ['setColor']),
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