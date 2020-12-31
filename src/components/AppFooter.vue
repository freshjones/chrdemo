<template>
<div>
    <div class="flex justify-center py-2 bg-chrblue-500">
        <img src="./../assets/images/footer.jpg" />
    </div>
    <div class="bg-gray-200 opacity-500 p-10 flex justify-center">
        <div class="container max-w-screen-lg flex justify-between">
            <div class="px-10 font-serif text-4xl ">Connect with us</div>
            <div class="px-10 font-serif text-lg">
                <label class="font-bold whitespace-nowrap">Sign up for updates</label>
                <input
                    type="text"
                    class="bg-transparent border-b border-black text-sm p-3"
                    placeholder="Enter your email address"
                >
            </div>
            <div class="px-10 font-serif text-lg">
                <div class="font-bold whitespace-nowrap  mb-2">Our Social Communities</div>
                <div class="flex">
                    <div class="px-1"><font-awesome-icon icon="map-marker" class="text-base" /></div>
                    <div class="px-1"><font-awesome-icon icon="camera" class="text-base" /></div>
                    <div class="px-1"><font-awesome-icon icon="thumbs-up" class="text-base" /></div>
                    <div class="px-1"><font-awesome-icon icon="image" class="text-base" /></div>
                    <div class="px-1"><font-awesome-icon icon="star" class="text-base" /></div>
                </div>
            </div>
            <div class="px-10 font-serif text-lg">
                <div class="font-bold whitespace-nowrap mb-4">Get in touch</div>
                <div class="font-sans text-sm">Chat | Email</div>
            </div>
        </div>
    </div>
    <div class="bg-white">
        <div class="container mx-auto flex justify-center">
            <menu-footer></menu-footer>
        </div>
    </div>
    <div class="bg-white text-gray-500 text-xs p-5 flex justify-between">
        <div>&copy; 2021 Chroma Technology Corp</div>
        <div>
            <ul class="flex divide-x divide-gray-500">
                <li class="px-3">Accessibility</li>
                <li class="px-3">Privacy</li>
                <li class="px-3">Terms of Use</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    import MenuFooter from './Menus/MenuFooter'
    export default {
        components: {
            MenuFooter
        },
    }
</script>

<style scoped>

</style>