<template>
  <div>
    <div class="relative">
        <video src="/demo.mp4" autoplay loop />
        <div class="absolute w-full h-full opacity-80 z-10 top-0 left-0 flex items-center z-20">
          <div class="bg-white text-black p-10 max-w-2xl border-t-4 border-black">
            <h1 class="font-normal text-3xl mb-2">Marketing Message</h1>
            <p class="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <div class="flex justify-end text-blue-600"><a href="">Learn More</a></div>
          </div>
        </div>
        <div class="bg-black absolute opacity-60 w-full h-full z-10 top-0 left-0 flex items-center">

        </div>
    </div>
    <div class="container mx-auto">

      <div class="flex justify-center">
          <img src="./../assets/images/demo-home.jpg" />
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    video {
      width:100%;
      height: 100vh;
    }
</style>