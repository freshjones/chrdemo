<template>
    <div>
    <flickity ref="flickity" :options="flickityOptions" data-flickity='{ "hash": true }'>
        <div class="carousel-cell" id="carousel-cell1">1</div>
        <div class="carousel-cell" id="carousel-cell2">2</div>
        <div class="carousel-cell" id="carousel-cell3">3</div>
        <div class="carousel-cell" id="carousel-cell4">4</div>
    </flickity>
    <div class="bg-black text-white flex justify-center p-10">
        <div class="flex">
            <div class="px-5 flex">
                <div class="pr-2">
                    <div class="bg-black w-20 h-20 border border-white "></div>
                </div>
                <div class="flex-auto">
                    <div class="uppercase">Marketing message</div>
                    <div class="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div class="px-5 flex">
                <div class="pr-2">
                    <div class="bg-black w-20 h-20 border border-white "></div>
                </div>
                <div class="flex-auto">
                    <div class="uppercase">Marketing message</div>
                    <div class="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div class="px-5 flex">
                <div class="pr-2">
                    <div class="bg-black w-20 h-20 border border-white "></div>
                </div>
                <div class="flex-auto">
                    <div class="uppercase">Marketing message</div>
                    <div class="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div class="px-5 flex">
                <div class="pr-2">
                    <div class="bg-black w-20 h-20 border border-white "></div>
                </div>
                <div class="flex-auto">
                    <div class="uppercase">Marketing message</div>
                    <div class="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
        </div>
    </div>
    </div>
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
                    wrapAround: true,
                    hash: true
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