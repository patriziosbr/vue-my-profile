<template>
  <section class="test">
      
      <CourseComp />
  </section>
</template>

<script>

import CourseComp from "../components/CourseComp.vue"

export default {
    name: "Courses",
    components: {
        CourseComp
    }
}
</script>

<style lang="scss" scoped>
    @media (min-width: 576px) {
    .test {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      margin-left: 90px;
      overflow: hidden;
    }
  }
</style>