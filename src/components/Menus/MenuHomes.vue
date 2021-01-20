<template>
    <div class="flex justify-center">
        <div class="flex p-5 text-xs">
            <ul class="mx-7">
                <li class="py-1">
                    <router-link :to="{ name: 'home'}">Homepage 1</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home2'}">Homepage 2</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home3'}">Homepage 3</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home4'}">Homepage 4</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home5'}">Homepage 5</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home6'}">Homepage 6</router-link>
                </li>
                <li class="py-1">
                    <router-link :to="{ name: 'home7'}">Homepage 7</router-link>
                </li>
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