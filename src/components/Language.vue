<template>
    <!-- <div @scroll="scrollListener()"> -->
        
            <section class="container ">
                <div class="row">
                    <div class="mt-1 mb-3"><h2>Languages</h2></div>
                </div>
                <div class="row testInLine">
                    <div class="col-md-6">
                        <EngLang  />
                    </div>
                    <div class="col-md-6">
                        <SpanishLang  />
                    </div>
                </div>
  
            </section>
    <!-- </div> -->
</template>

<script>
import SpanishLang from './SpanishLang.vue'
import EngLang from './EngLang.vue'

export default {
    name: "Language",
    components: {
        SpanishLang,
        EngLang
    },
    data() {
        return {
            value: 0
        }
    }  
}
</script>

<style lang="scss" scoped>
  @import'~bootstrap/dist/css/bootstrap.css';


  @media (min-width: 576px) {


  }


</style>