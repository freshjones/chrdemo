<template>
    <div class="text-xs uppercase flex">
      <nav-element label="Homes" route="homes" subnav="homes"></nav-element>
      <nav-element label="Products" route="products" subnav="products"></nav-element>
      <nav-element label="Applications" route="applications" subnav="applications"></nav-element>
      <nav-element label="Markets" route="markets" subnav="markets"></nav-element>
      <nav-element label="Company" route="company" subnav="company"></nav-element>
      <nav-element label="Resources &amp; Support" route="resources" subnav="resources"></nav-element>
      <nav-element label="Spectra Viewer" route="spectraviewer"></nav-element>
    </div>
</template>

<script>
    import NavElement from './NavElement'

    export default {
        components: {
            NavElement
        }
    }
</script>



