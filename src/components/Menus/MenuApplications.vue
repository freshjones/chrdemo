<template>
    <div class="flex justify-center bg-chr-accent-blue text-white">
        <div class="flex p-5 text-xs">
            <ul class="mx-7">
                <li class="py-1 mb-5 font-bold">Fluorescence Microscopy</li>
                <li class="py-1 mb-5 font-bold">Machine Vision</li>
                <li class="py-1 font-bold">OEM/Engineering</li>
                <li class="py-1">Working with Chroma</li>
                <li class="py-1">Manfacturing Capabilities &amp; Applications</li>
                <li class="py-1">Quality Control</li>
            </ul>
            <ul class="mx-7">
                <li class="py-1 mb-5 font-bold">Remote Sensing</li>
                <li class="py-1 mb-5 font-bold">Food Inspection</li>
                <li class="py-1 mb-5 font-bold">Security / Surveillance</li>
                <li class="py-1 mb-5 font-bold">Raman Spectroscopy</li>
            </ul>
            <ul class="mx-7">
                <li class="py-1 mb-5 font-bold">Colorimetry</li>
                <li class="py-1 mb-5 font-bold">Astronomy</li>
                <li class="py-1 mb-5 font-bold">Biomedical Instrumentation</li>
                <li class="py-1 mb-5 font-bold">LiDAR</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        computed: {
            ...mapGetters('app', ['getAccent']),
        }
    }
</script>

<style scoped>

</style>