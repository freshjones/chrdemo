<template>
  <div>
    <hero-slider></hero-slider>
    <div class="container mx-auto relative z-20">
      <div></div>
      <div class="flex justify-center">
          <img src="./../assets/images/demo-home.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSlider from './HeroSlider'
export default {
  components: {
    HeroSlider
  }
}
</script>
