<template>
    <div class="flex justify-center bg-chr-accent-ltblue text-white">
        <div class="flex p-5 text-xs">
            <ul class="mx-7">
                <li class="py-1 mb-5 font-bold">
                    <router-link :to="{ name: 'life-science'}">Life Science, Healthcare &amp; Biophotonics</router-link>
                </li>
                <li class="py-1 mb-5 font-bold">Food, Agriculture, &amp; Ecology</li>
                <li class="py-1 font-bold">Inspection &amp; Measurement</li>
            </ul>
            <ul class="mx-7">
                <li class="py-1 mb-5 font-bold">Machine Vision &amp; Automation</li>
                <li class="py-1">Factory Automation</li>
                <li class="py-1">Colorimetry</li>
                <li class="py-1">Robotic Guidance &amp; 3D Bin Picking</li>
                <li class="py-1">Security &amp; Surveillance</li>
                <li class="py-1">Distributors</li>
                <li class="py-1">Custom Orders</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>