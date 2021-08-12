<template>
  <section>
      <h1>courses</h1>
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

</style>