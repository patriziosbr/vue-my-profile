<template>
  <section>

    <MyHeader />
    <Welcome />
    <Language />
    <Tecnologies  />
    <CardDue />
    <Personality />

  </section>
</template>

<script>

import MyHeader from '../components/MyHeader.vue'
import Welcome from '../components/Welcome.vue'
import Language from '../components/Language.vue'
import Tecnologies from './Tecnologies.vue'
import CardDue from './CardDue.vue'
import Personality from './Personality.vue'




export default {
    name: 'AboutMeComp',
    components: {
      MyHeader,
      Welcome,
      Language,
      Tecnologies,
      CardDue,
      Personality


    }

}
</script>

<style lang="scss" scoped>
  @import'~bootstrap/dist/css/bootstrap.css';
  section {
    overflow: hidden;
  }
</style>