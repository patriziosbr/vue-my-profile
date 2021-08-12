<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h2 class="my-3">Personality</h2>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 m-auto" >
          <div class="personality-item ">
            <h4 class="my-2">Area of Interest</h4>
            <PieChart />
          </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 mt-5">
        <h4>Diggin deeper</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut vitae atque cumque quis expedita, numquam voluptatem est fuga nisi mollitia adipisci! Quae quos velit maiores, ducimus nostrum perspiciatis aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio voluptatem labore facere sit sequi id blanditiis laborum quibusdam expedita.</p>
      </div>
      <div class="col-md-7 mt-5">
        <Range />
      </div>
    </div>
     
      
  </div>
</template>

<script>
import PieChart from './PieChart.vue' ;
import Range from './Range.vue' ;
export default {
    name: 'Personality',
    components: {
      PieChart,
      Range
    }
}
</script>

<style lang="scss" scoped>
    .m-debug {
        margin-bottom: 150px;
    }
  .personality-item {
    // border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 16px;
  }
</style>