<template>
  <footer class=" d-flex justify-content-center align-items-center">
      <div class="row">
          <div class="col-md-12">
              <div class="d-flex align-items-center flex-column" >
                <div class="circle-photo">
                    <img class="img-fluid" src="../assets/myavatar.png" alt="avatar">
                </div>
                <div>
                    <p class="m-0">Thanks for watching:</p>
              </div>
            </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
    footer {
        height: 200px;
        background-color:  #f4f5f9;
        padding-bottom: 40px;
         .circle-photo {
              min-height: 85px;
              min-width: 85px;
              max-height: 100px;
              max-width: 100px;
              border-radius: 50%;
              background-color: indianred;
              box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
              overflow: hidden;
            }
    }
</style>