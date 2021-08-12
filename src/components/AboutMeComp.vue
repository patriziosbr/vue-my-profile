<template>
  <section>

    <MyHeader />
    <Welcome />
    <Language />
    <Tecnologies  />
    <CardDue />
    <Personality />
    <Footer/>

  </section>
</template>

<script>

import MyHeader from '../components/MyHeader.vue'
import Welcome from '../components/Welcome.vue'
import Language from '../components/Language.vue'
import Tecnologies from './Tecnologies.vue'
import CardDue from './CardDue.vue'
import Personality from './Personality.vue'
import Footer from './Footer.vue'




export default {
    name: 'AboutMeComp',
    components: {
      MyHeader,
      Welcome,
      Language,
      Tecnologies,
      CardDue,
      Personality,
      Footer


    }

}
</script>

<style lang="scss" scoped>
  @import'~bootstrap/dist/css/bootstrap.css';
  section {
    overflow: hidden;
  }
</style>