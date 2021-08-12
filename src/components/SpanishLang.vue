<template>
  <div>
    <div class="language">
        <h4>Spanish</h4>
        <div class="lang-barr w-100" v-observe-visibility="spainSpokenFunc">
            <label for="barr">spoken: </label>
            <progress :value="spainSpokeValue" :max="100"> </progress>
            <span>{{ spainSpokeValue }}%</span>
        </div>
        <div class="lang-barr" v-observe-visibility="spainWrittenFunc" >
            <label for="barr">written: </label>
            <progress :value="spainWrittenValue" max="100"> </progress>
            <span>{{ spainWrittenValue }}%</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SpanishLang',
    data() {
        return {
            spainSpokeValue: 0,
            spainWrittenValue: 0,
            spainWritten: 60,
            spainSpoken: 75,
            isVisibile : false,
            complete: false
        }
    },
    methods: {
        spainSpokenFunc (isVisible, entry) {
            this.isVisible = isVisible
            if (entry.isIntersecting) {
                setTimeout(this.timerOne,1000);
                }
                if (this.isVisibile == false) {
                    this.spainSpokeValue = 0;
                }
            },
        spainWrittenFunc (isVisible, entry) {
            this.isVisible = isVisible;
            
            if (entry.isIntersecting) {
                setTimeout(this.timerTwo,1000);
                }
                if (this.isVisibile == false) {
                    this.spainWrittenValue = 0;
                }
            },
        timerOne() {
            let interval = setInterval(() => {
                if (this.spainSpokeValue < 70) {
                    this.spainSpokeValue++;
                    if ( this.spainSpokeValue == 70) {
                        clearInterval(interval);
                        this.complete = true;
                    }
                }
                },5)
            },
        timerTwo() {
            let interval = setInterval(() => {
                if (this.spainWrittenValue < 60) {
                    this.spainWrittenValue++;
                    if ( this.spainWrittenValue == 60 ) {
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
    }
    @media (min-width: 576px) {

    

    }

</style>