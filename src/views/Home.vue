<template>
  <section class="web-app">
    <div class="text p-0"> 
      <AboutMeComp />
    </div>
  </section>
</template>

<script>
import AboutMeComp from '../components/AboutMeComp.vue'
// @ is an alias to /src


export default {
  components: { 
    AboutMeComp 
  },
  name: 'Home'
}
</script>

<style lang="scss" scoped>

  @media (min-width: 576px) {
    .web-app {
      width: 100%;
      // background-color: rgba(0, 0, 0, 0.2);
      margin-left: 90px;
      overflow: hidden;
    }
  }

</style>
