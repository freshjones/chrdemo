<template>
    <div class="max-h-hero min-h-hero">
      <div class="relative ">
        <hero-image :image="activeImage" :id="active"></hero-image>
        <div class="absolute z-20 top-0 left-0 w-full flex justify-center items-center h-4/6">
            <div class="w-full h-full flex relative">
                <div class="flex-grow flex flex-col justify-center items-center">
                    <hero-content :slide="activeSlide"></hero-content>
                </div>
                <div class="w-1/5 p-10 absolute top-0 right-0">
                    <div class="flex flex-col justify-between">
                        <div
                            v-for="slide in slides"
                            :key="slide.id"
                            class="bg-white h-28 w-48 my-3 cursor-pointer thumbs border"
                            :class="active == slide.id ? 'border-white opacity-100' : 'border-gray-400 opacity-60'"
                            @click="changeSlide(slide.id)"
                        >
                            <img :src="`/images/thumbs/${slide.image}`" class="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bg-chrblue-900 opacity-50 z-10 w-full h-full top-0 left-0"></div>
      </div>
    </div>
</template>

<script>
    import HeroContent from './HeroContent'
    import HeroImage from './HeroImage'
    export default {
        components: {
            HeroImage,
            HeroContent,
        },
        data: function() {
            return {
                active: 0,
                slides: [
                    {
                        id: 0,
                        image: 'image.jpg',
                        title: 'Innovation with Intention',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                    },
                    {
                        id: 1,
                        image: 'image2.jpg',
                        title: 'Machine Vision',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                    },
                    {
                        id: 2,
                        image: 'image3.jpg',
                        title: 'Remote Sensing',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                    },
                    {
                        id: 3,
                        image: 'image4.jpg',
                        title: 'Food Inspection',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                    },
                ]
            }
        },
        computed: {
            activeSlide() {
                return this.slides[this.active];
            },
            activeImage() {
                return this.slides[this.active].image;
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