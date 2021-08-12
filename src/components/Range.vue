<template>
  <div class="bg-bar">
      <Extrover />
      <Creative />
      <Loyal />
      <Active />

  </div>
</template>

<script>
import Extrover from './Extrover.vue';
import Creative from './Creative.vue';
import Loyal from './Loyal.vue';
import Active from './Active.vue';
export default {
    name: "Range",
    components: {
        Extrover,
        Creative,
        Loyal,
        Active
    }
}
</script>

<style lang="scss" scoped>
.bg-bar {
  position: relative;
  width: 100%;
  margin: auto; 
  padding: 20px 40px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
  // box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, .1);
}
</style>