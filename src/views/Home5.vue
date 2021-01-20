<template>
  <div >
    <div class="fixed z-100 top-0 left-0 w-full h-full " v-if="modal">
      <div class="relative w-full h-full flex justify-center items-center">
        <div class="bg-white w-1/2 h-1/2 z-10 rounded-lg flex justify-center shadow-lg border border-gray-400">
          <div class="p-10 text-center">
            <div class="text-5xl text-chrblue-900 font-serif m-3">How can we help?</div>
            <div class="text-xl font-light text-gray-600">Chroma provides exceptional optical filter solutions to a wide variety of markets and applications. Let us know your main area of interest so we can better serve your interests.</div>
            <div>
              <div class="flex justify-between mt-5">
                <div
                    v-for="slide in slides"
                    :key="slide.id"
                    class="h-28 w-48 my-3 cursor-pointer "
                    @click="modal = false"
                >
                    <div><img :src="`/images/thumbs/${slide.image}`" class="object-cover w-full h-full" /></div>
                    <div class="uppercase py-3 text-xs">{{ slide.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-white bg-black opacity-60 top-0 left-0 w-full h-full absolute"></div>
      </div>
    </div>
    <div class="max-h-hero min-h-hero">
      <div class="relative ">
        <img src="/images/image.jpg" class="w-full h-auto" />
        <div class="absolute z-20 top-0 left-0 w-full flex justify-center items-center h-4/6">
            <div class="max-w-7xl h-full flex">
                <div class="flex flex-col justify-center items-center">
                    <div >
                        <h1 class="text-white text-6xl font-serif mb-3 text-center text-shadow">Innovation with Intention</h1>
                        <div class="text-white leading-relaxed font-light text-sm text-center flex justify-center">
                            <div class="w-3/5">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                                <chr-button></chr-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bg-chrblue-900 opacity-50 z-10 w-full h-full top-0 left-0"></div>
      </div>
    </div>
    <div class="container mx-auto relative z-20">
      <div></div>
      <div class="flex justify-center">
          <img src="./../assets/images/demo-home.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            modal: true,
            active: 0,
            slides: [
                {
                    id: 0,
                    image: 'image.jpg',
                    title: 'Life Sciences',
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
}
</script>
