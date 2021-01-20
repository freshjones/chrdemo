<template>
    <div>
        <hero-slider-single
            :slide="slide"
        ></hero-slider-single>
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
    import HeroSliderSingle from './HeroSliderSingle'
    export default {
        components: {
            HeroSliderSingle
        },
        data: function() {
            return {
                default: true,
                slide: {
                    id: 0,
                    show: false,
                    image: 'image.jpg',
                    link: false,
                    subtitle: 'Chroma Technology Corp',
                    title: 'Products',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'
                }
            }
        },
        mounted() {
            this.setColor({key:'accent', value: 'purple'})
        },
        computed: {
            ...mapGetters('app', ['getAccent'])
        },
        methods: {
            ...mapActions('app', ['setColor'])
        },
    }
</script>

<style scoped>

</style>