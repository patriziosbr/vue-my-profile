<template>
  <section class="container">
    <div class="row myrow ">
      <div class=" col-12 col-md-6">
        <InfoList />
      </div>
      <!-- <div class=" col-12 col-md-6 bg-img d-flex align-items-center justify-content-center ">
        <img src="../assets/logo-icon.svg" alt="">
      </div> -->
      <div class="col-12 col-md-6 intro-box" >
        <h1 class="mt-5 mb-3">About Me</h1>
        <p class="mb-5">I do have really good experience in <strong>web-sites, web-apps and mobile-app</strong> following the projects trough his phases: wireframe, mockup, web prototype and scripting. I develop products in <strong>HTML5, CSS3, VueJS</strong> and <strong>BOOTSTRAP 4+</strong>, being really focused on obtain a grate user experience organizing the whole project between <strong>front-end and database.</strong></p>
        <div>
          <a class="myBtn" href="files/SBROZZI-PATRIZIO-cv_compressed.pdf" download>
            <p>Download resume</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoList from './InfoList.vue'
export default {
    name: "Welcome",
    components: {
      InfoList
    }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px ;
  padding-bottom: 24px;
}
 .myBtn {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    border-radius: 20px;
    background-color: darken($color: #0d6efd, $amount: 15) ;
    color: #fff;
    text-decoration: none;
    &:hover {
      background-color: lighten($color: #0d6efd, $amount: 15);
      color: #f1f5f9;
    }
    p {
      line-height: 40px;
    }

  }
  .myrow{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .bg-img {
      background-color: #F1F3F4;
      height: 100%;
      padding: 32px 0;
      img {
        display: block;
        height: 150px;
      }
    }
  }
  h2 {
    font-size: 36px;
  }
  @media (min-width: 576px) {

    .myrow {
      display: flex;
      flex-direction: row-reverse;
    }
    .bg-img {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      .myrow{
        align-items: center;
      }
    }
    @media (min-width: 1200px) {
      .myrow{
        align-items: center;
      }
    }
  }

</style>