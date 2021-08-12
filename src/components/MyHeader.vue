<template>
    <div class="myContainer-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

            <div class="circle-cont">

              <div class="title-photo">
                <div class="d-flex">
                  <div class="circle-photo">
                    <img class="img-fluid" src="../assets/myavatar.png" alt="avatar">
                  </div>

                  <div class="myName ms-4">
                    <h4 class="m-0 ">Patrizio Sbrozzi</h4>
                    <div>
                      <small class="m-0">Full Stack Developer Trainee |</small>
                      <small class="m-0"> Boolean Careers</small>
                    </div>
                    <div class="location d-flex align-items-center mt-1">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="m-0 ms-1"><strong>Rome, IT</strong></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div class="col-sm-3">
          </div>
        
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "MyHeader",
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .myContainer-fluid {
        // width: 100vh;
        height: 150px;
        background-image: url(../assets/bg-geometric.jpg);
        background-position: center;
        background-size: cover;
        filter: saturate(0.8);
        .circle-cont {
          position: relative;
          .title-photo {
            position: absolute;
            top: 125px;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            
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
            .myName {
              margin-left: 8px;
            }
          }
        }
    }

    @media (min-width: 576px) {
     
    }
</style>