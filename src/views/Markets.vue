<template>
    <div>
        <hero-slider-markets
            :slides="slides"
        ></hero-slider-markets>
        <div class="container mx-auto relative z-20 m-content" >
            <div></div>
            <div class="flex bg-chr-gray justify-center border-t-4" :class="`border-chr-accent-${getAccent}`">
                <img src="./../assets/images/demo-home.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from "vuex";
    import HeroSliderMarkets from './HeroSliderMarkets'
    export default {
        data: function() {
            return {
                default: true,
                slides: [
                    {
                        id: 0,
                        show: false,
                        image: 'image.jpg',
                        link: false,
                        subtitle: 'Chroma Technology Corp',
                        title: 'Our Markets',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                    },
                    {
                        id: 1,
                        show: true,
                        link: 'life-science',
                        image: 'image5.jpg',
                        subtitle: 'Our Markets',
                        title: 'Life Science, Healthcare & Biophotonics',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        id: 2,
                        show: true,
                        link: 'life-science',
                        image: 'image3.jpg',
                        subtitle: 'Our Markets',
                        title: 'Food, Agriculture, & Ecology',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        id: 3,
                        show: true,
                        link: 'life-science',
                        image: 'image4.jpg',
                        subtitle: 'Our Markets',
                        title: 'Inspection & Measurement',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        id: 4,
                        show: true,
                        link: 'life-science',
                        image: 'image2.jpg',
                        subtitle: 'Our Markets',
                        title: 'Machine Vision & Automation',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            }
        },
        mounted() {
            this.setColor({key:'accent', value: 'ltblue'})
        },
        computed: {
            ...mapGetters('app', ['getAccent'])
        },
        methods: {
            ...mapActions('app', ['setColor'])
        },
        components: {
            HeroSliderMarkets
        }
    }
</script>

<style scoped>

</style>