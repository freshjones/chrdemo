<template>
  <div class="flex flex-col">
    <app-header></app-header>
    <div class="relative flex-grow" style="margin-top: 100px;">
      <div
        class="menu-overlay absolute bg-black w-full h-full z-50 top-0 left-0"
        :class="{active: showMenu}"
      ></div>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapGetters('app', ['showMenu']),
  }
}
</script>

<style scoped>
  .menu-overlay {
    visibility: hidden;
    transition: all .5s ease-in-out;
    opacity: 0;
  }

  .active {
    visibility: visible;
    opacity: 0.6;
  }
</style>