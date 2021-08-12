<template>
    <div class="mb-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="mt-5 mb-0">Tecnologies</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">    
                        <div class="myCarousel-box">
                            <!-- <div class="arrow-lft" @click="prev()">
                                <i class="fas fa-arrow-left"></i>
                            </div> -->
                            <div class="myCarousel-item" @click="prev()">
                                <img :src="logoArr[indexImg].url" alt="index" >
                            </div>
                            <div class="myCarousel-item" >
                                <img :src="logoArr2[indexImg].url" alt="index" >
                            </div>
                            <div class="myCarousel-item" @click="next()" >
                                <img :src="logoArr3[indexImg].url" alt="index" >
                            </div>
                            <!-- <div class="arrow-rgt" @click="next()">
                                <i class="fas fa-arrow-right"></i>
                            </div> -->
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name: "Tecnologies",
    data(){
        return {
            indexImg: 0,
            timer: null,
            logoArr: [
                { url: require("../assets/tech-logo/logo0.png") }, //1
                { url: require("../assets/tech-logo/logo1.png") },
                { url: require("../assets/tech-logo/logo2.png") },
                { url: require("../assets/tech-logo/logo3.png") },
                { url: require("../assets/tech-logo/logo4.png") }, //5
            ],
            logoArr2: [
                { url: require("../assets/tech-logo/logo5.png") },
                { url: require("../assets/tech-logo/logo6.png") },
                { url: require("../assets/tech-logo/logo7.png") },
                { url: require("../assets/tech-logo/logo8.png") },
                { url: require("../assets/tech-logo/logo9.png") }, //10
                { url: require("../assets/tech-logo/logo10.png") },
            ],
            logoArr3: [
                { url: require("../assets/tech-logo/logo11.png") },
                { url: require("../assets/tech-logo/logo12.png") },
                { url: require("../assets/tech-logo/logo13.png") },
                { url: require("../assets/tech-logo/logo14.png") }, //15
                { url: require("../assets/tech-logo/logo15.png") },
                { url: require("../assets/tech-logo/logo16.png") },
            ]
        }
    },
    methods: {
        next: function() {
            this.indexImg++
            if (this.indexImg == this.logoArr.length) {
                this.indexImg = 0    
            }
        },
        prev: function() {
            this.indexImg--
            if (this.indexImg == -1) {
                this.indexImg = this.logoArr.length -1
            }
        },
        startSlide: function() {
        this.timer = setInterval(this.next, 4000);
        }
    },
    mounted: function() {
        this.startSlide();
  }
}
</script>

<style lang="scss" scoped>


        .myCarousel-box {  
            margin: 24px 0;
            height: 150px;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            position: relative;
            .arrow-lft {
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0,-50%);
                border: 1px solid #242424;
                border-radius: 50%;
                padding: 4px 4px;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
                i {
                    color: #242424;
                }
            }
            .arrow-rgt {
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(-50%,-50%);
                border: 1px solid #242424;
                border-radius: 50%;
                padding: 4px 4px;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
                i {
                    color: #242424;
                }
            }
            .myCarousel-item {
                display: flex;
                justify-content: center;
                width: calc(100%/3 - 4px);
                align-items: center;
                border: 1px solid rgba(36, 36, 36, 0.2);
                border-radius: 5px;
                // margin-right: 16px;
                &.myCarousel-item:active {
                    background-color: darken($color: #f1f4f9, $amount: 1);
                }
                img {
                    width: 40px;
                }
            }
            
        }

    
    @media (min-width: 576px) {
        .myCarousel-item {
            width: calc(100%/3 - 16px) !important;
                img {
                    width: 80px !important;
                }
        }
    

    }

</style>