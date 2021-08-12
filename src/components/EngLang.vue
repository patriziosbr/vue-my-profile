<template>
  <div>
    <div class="mb-3">
        <h4>English</h4>
        <div class="lang-barr" v-observe-visibility="engSpokenFunc">
            <label for="barr">spoken: </label>
            <progress :value="engSpokeValue" :max="100"> </progress>
            <span>{{ engSpokeValue }}%</span>
        </div>
        <div class="lang-barr" v-observe-visibility="engWrittenFunc" >
            <label for="barr">written: </label>
            <progress :value="engWrittenValue" max="100"> </progress>
            <span>{{ engWrittenValue }}%</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EngLang',
    data() {
        return {
            engSpokeValue: 0,
            engWrittenValue: 0,
            engWritten: 70,
            engSpoken: 80,
            isVisibile : false,
            complete: false
        }
    },
    methods: {
        engSpokenFunc (isVisible, entry) {
            this.isVisible = isVisible
            if (entry.isIntersecting) {
                // console.log(entry);
                setTimeout(this.timerOne,1000);
                }
                if (this.isVisibile == false) {
                    this.engSpokeValue = 0;
                }
            },
        engWrittenFunc (isVisible, entry) {
            this.isVisible = isVisible;
            
            if (entry.isIntersecting) {
                // console.log(entry);
                setTimeout(this.timerTwo,1000);
                }
                if (this.isVisibile == false) {
                    this.engWrittenValue = 0;
                }
            },
        timerOne() {
            let interval = setInterval(() => {
                if (this.engSpokeValue < 80) {
                    this.engSpokeValue++;
                    if ( this.engSpokeValue == 80) {
                        clearInterval(interval);
                        this.complete = true;
                    }
                }
                },5)
            },
        timerTwo() {
            let interval = setInterval(() => {
                if (this.engWrittenValue < 70) {
                    this.engWrittenValue++;
                    if ( this.engWrittenValue == 70 ) {
                        clearInterval(interval);
                        this.complete = true;
                    }
                }
                },10)
            }
        }
}
</script>

<style lang="scss" scoped>
  @import'~bootstrap/dist/css/bootstrap.css';

    .lang-barr {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        progress {
            width: 100%;
            height: 50%;
            margin: 0 16px;
        }
            progress.xxx::-moz-progress-bar { background: red; }
            progress.xxx::-webkit-progress-value { background: red  !important; }
            progress.xxx { color: red; }
    }
    @media (min-width: 576px) {

    

    }

</style>