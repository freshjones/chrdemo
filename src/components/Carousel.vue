<template>
    <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">1</div>
        <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
    </flickity>
</template>

<script>
    import Flickity from 'vue-flickity';
    export default {
        components: {
            Flickity
        },
        data() {
            return {
                flickityOptions: {
                    prevNextButtons: true,
                    pageDots: false,
                    wrapAround: true
                }
            }
        },
    }
</script>

<style scoped>
    .carousel-cell
    {
        width:100%;
        display:flex;
        justify-content: center;
        background: black;
        min-height: 400px;
        color:white;
        font-size: 75px;
        align-items: center;
    }
</style>