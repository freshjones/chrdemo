<template>
    <div class="text-xs uppercase flex">
      <nav-element label="Products" route="products" subnav="products" :active="isActive('products')"></nav-element>
      <nav-element label="Applications" route="applications" subnav="applications" :active="isActive('applications')"></nav-element>
      <nav-element label="Markets" route="markets" subnav="markets" :active="isActive('markets')"></nav-element>
      <nav-element label="Company" route="company" subnav="company" :active="isActive('company')"></nav-element>
      <nav-element label="Resources &amp; Support" route="resources" subnav="resources" :active="isActive('resources')"></nav-element>
      <nav-element label="Spectra Viewer" route="spectraviewer" :active="isActive('spectraviewer')"></nav-element>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import NavElement from './NavElement'
    export default {
        components: {
            NavElement
        },
        computed: {
            ...mapGetters('app', ['getAccent'])
        },
        methods: {
            isActive(menu) {
                if(this.getAccent == 'ltblue' && menu == 'markets') {
                    return 'text-chr-accent-ltblue';
                }
                if(this.getAccent == 'blue' && menu == 'applications') {
                    return 'text-chr-accent-blue';
                }
                if(this.getAccent == 'purple' && menu == 'products') {
                    return 'text-chr-accent-purple';
                }
                if(this.getAccent == 'green' && menu == 'company') {
                    return 'text-chr-accent-green';
                }
                if(this.getAccent == 'orange' && menu == 'resources') {
                    return 'text-chr-accent-orange';
                }
                if(this.getAccent == 'red' && menu == 'spectraviewer') {
                    return 'text-chr-accent-red';
                }
                return '';
            }
        }
    }
</script>



