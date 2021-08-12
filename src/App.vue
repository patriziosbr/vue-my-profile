<template>
  <div id="app">
    <nav>
      <div class="bg-nav">
          <ul>
              <li class="click activeClass" v-for="(link, index) in navLinks" :key="index">
                  <router-link :to="link.direct" class="test " >
                      <span v-html="link.icon" :class=" activeChat == index ? 'activeClass' : '' " @click="activeChat = index"></span>                         
                      <p :class=" activeChat == index ? 'activeClass' : '' " @click="activeChat = index">{{link.text}}</p>
                  </router-link>
              </li>
          </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeChat: 0,
       navLinks: [
        {
            text: "About Me",
            icon: '<i class="fas fa-user"></i>',
            direct: "/",
            isActive : true
        },
        {
            text: "Studies",
            icon: '<i class="fas fa-user-graduate"></i>',
            direct: "/courses",
            isActive : false
        },
        {
            text: "Jobs",
            icon: '<i class="fas fa-briefcase"></i>',
            direct: "/jobs",
            isActive : false
        },
        {
            text: "Projects",
            icon: '<i class="fas fa-pencil-alt"></i>',
            direct: "/Projects",
            isActive : false
        }   
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import'~bootstrap/dist/css/bootstrap.css';


    .bg-nav {
      height: 60px;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #f4f5f9;
      z-index: 99;
      ul {
        display: flex;
        padding: 0;
      }
      .click {
        height: 90px;
        width: calc(100% / 4);
        // border: 1px solid #000;
        list-style: none;
        text-align: center;
        
        .test {
          background-color: #f2f4f9;
          text-decoration: none;
          color: rgb(68, 68, 68);
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-bottom: 16px;
          
          &:hover {
            background-color: darken($color: #f2f4f9, $amount: 3);
          }

 
          span {
            font-size: 22px;
          }
          p {
            font-size: 10px;
          }
        }
      }
            .activeClass {
              color: lighten($color: #444444, $amount: 15);
            }

    }
 

    @media (min-width: 576px) {

      #app {
      display: flex;
      // height: 100vh;
      overflow-y: hidden;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .bg-nav {
        height: 100vh;
        width: 90px;
        background-color: #f4f5f9;
        ul {
            padding: 0;
            flex-direction: column;
        }
        .click {
          width: 100%;
          height: 90px;
          a {
            p {
              font-size: 14px;
            }
          }
        }
      }
  }


</style>

