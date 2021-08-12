<template>
  <section>
    <div class="container">
    <h2 class="mb-4">What I Do</h2>
      <div class="row">
          <div class="col-12">
            <div class="cards-box">
                <div class="card p-4 " v-for="card, i in cards" :key="i">  
                    <div class="svg-box me-4">
                        <i v-if="card.icon" :class="card.icon"></i>
                        <span v-else v-html="card.svg"></span>
                    </div>      
                    <div class="txt-title">
                        <h4>{{ card.title }}</h4>
                        <p class=""> {{ card.text }} </p>
                    </div>   
                </div>
            </div>
        
          </div>
      </div>
  </div>
  </section>
</template>

<script>
export default {
    name: 'CardDue',
     data() {
        return {
            cards: [
                {
                    icon: '',
                    svg: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-phone-laptop fa-w-20 fa-2x"><path fill="currentColor" d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z" class=""></path></svg>',
                    title: 'Responsive Design',
                    text:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, molestiae eaque minima possimus iste accusantium facilis nemo natus voluptas distinctio consequatur rerum repellat itaque assumenda quia aliquam minus explicabo temporibus.'
                },
                {
                    icon: '',
                    svg: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-laptop-code fa-w-20 fa-2x"><path fill="currentColor" d="M266.34 277.65l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L230.62 208l47.03-47.03c3.12-3.12 3.12-8.19 0-11.31l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0l-64 64c-3.12 3.12-3.12 8.19 0 11.31l64 64c3.13 3.12 8.19 3.12 11.31-.01zm96-11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0l64-64c3.12-3.12 3.12-8.19 0-11.31l-64-64c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L409.38 208l-47.03 47.03a7.994 7.994 0 0 0-.01 11.31zM624 368h-48V96c0-35.3-28.72-64-64-64H128c-35.28 0-64 28.7-64 64v272H16c-8.84 0-16 7.16-16 16v48c0 44.11 35.88 80 80 80h480c44.12 0 80-35.89 80-80v-48c0-8.84-7.16-16-16-16zM96 96c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v272H391.13c-4.06 0-7.02 3.13-7.92 7.09C379.98 389.35 367.23 400 352 400h-64c-15.23 0-27.98-10.65-31.21-24.91-.9-3.96-3.86-7.09-7.92-7.09H96V96zm512 336c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.53-48-48v-32h194.75c6.59 18.62 24.38 32 45.25 32h96c20.88 0 38.66-13.38 45.25-32H608v32z" class=""></path></svg>',
                    title: 'Web-app',
                    text:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, molestiae eaque minima possimus iste accusantium facilis nemo natus voluptas distinctio consequatur rerum repellat itaque assumenda quia aliquam minus explicabo temporibus.'
                },
                {   
                    icon: '',
                    svg: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cloud" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cloud fa-w-20 fa-2x"><path fill="currentColor" d="M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z" class=""></path></svg>',
                    title: 'API',
                    text:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, molestiae eaque minima possimus iste accusantium facilis nemo natus voluptas distinctio consequatur rerum repellat itaque assumenda quia aliquam minus explicabo temporibus.'
                },
                {   
                    icon: '',
                    svg: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-database fa-w-14 fa-2x"><path fill="currentColor" d="M224 32c106 0 192 28.75 192 64v32c0 35.25-86 64-192 64S32 163.25 32 128V96c0-35.25 86-64 192-64m192 149.5V224c0 35.25-86 64-192 64S32 259.25 32 224v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V320c0 35.25-86 64-192 64S32 355.25 32 320v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V416c0 35.25-86 64-192 64S32 451.25 32 416v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5M224 0C145.858 0 0 18.801 0 96v320c0 77.338 146.096 96 224 96 78.142 0 224-18.801 224-96V96c0-77.338-146.096-96-224-96z" class=""></path></svg>',
                    title: 'Database',
                    text:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, molestiae eaque minima possimus iste accusantium facilis nemo natus voluptas distinctio consequatur rerum repellat itaque assumenda quia aliquam minus explicabo temporibus.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped> 


        .card {
            margin-bottom: 32px ;
            display: flex;
            flex-direction: row;
            .svg-box {
                height: 32px;
                width: 35px;
                padding: 24px;
                background-color: darken($color: #f1f4f9, $amount: 3);
                border-radius: 25%;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    font-size: 24px;
                }
            }
        }

        
    @media (min-width: 576px) {

        .cards-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .card {    
                width: calc(100% /2 - 16px);
            }
        }
    }

</style>