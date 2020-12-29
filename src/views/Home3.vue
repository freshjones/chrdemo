<template>
  <div>
    <carousel-thumbs></carousel-thumbs>
    <div class="container mx-auto">
      <div></div>
      <div class="flex justify-center">
          <img src="./../assets/images/demo-home.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselThumbs from './../components/CarouselThumbs.vue'

export default {
    components: {
        CarouselThumbs
    }
}
</script>
