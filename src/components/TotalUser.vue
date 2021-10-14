<template>
    <div class="container7">
        <div class="total">
             <countTo :startVal='startVal' :endVal='endVal' :duration='2000'></countTo>
        </div>
        <div class="prceent">
            <div :class="{'my-left':ainima1,'myprceent1':true}">
                暮春时节，习近平在广西考察，历时三天，行经桂林、柳州、南宁三地。国际疫情仍在肆虐，挑战施压丝毫未歇
            </div>
        </div>
        <div class="percent-text">
             <div :class="{'my-move':ainima,'percet':true}">
                <div>
                    <span class="percent-text1">日增长率{{day}}%</span>
                    <span class="percent-text2">月增长率{{mon}}%</span>
                </div>
                 <div>
                    <span class="percent-text1">日增长率{{day}}%</span>
                    <span class="percent-text2">月增长率{{mon}}%</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
components: { countTo },
    data () {
      return {
        startVal: 0,
        endVal: 2020,
        day:0.25,
        mon:6.23,
        ainima:false,
        ainima1:false
      }
    },
    mounted(){
        this.taskFun()
        this.taskFun3()
    },
    methods:{
        taskFun3(){
            if(this.timer4){
                clearInterval(this.timer4)
            }
            this.timer4 = setInterval(() => {
                if(this.timer5){
                    clearTimeout()
                }
                this.ainima1 = true
                this.timer5 = setTimeout(() => {
                    this.ainima1 = false
                }, 5000);
            }, 5000);
        },
        taskFun(){
            if(this.timer3){
                clearInterval(this.timer3)
            }
            this.timer3 = setInterval(() => {
                this.startVal = this.endVal
                this.endVal += 10000
                //日 月增长率效果
                 this.taskFun2()
            }, 3000);
        },
        taskFun2(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.ainima = true
            this.timer = setTimeout(() => {
                this.day = (parseFloat(this.day)+0.02).toFixed(2)
                this.mon = (parseFloat(this.mon)+0.03).toFixed(2)
                this.ainima = false
            }, 500);
        }
    }
}
</script>
<style lang="scss" scoped>
.container7{
    width: 100%;
    height: 100%;
    background-color: rgb(66,68,70);
    padding: 20px 40px;
    box-sizing: border-box;
    .total{
        font-size: 68px;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 30px;
    }
    .prceent{
        width:500px;
        height: 50px;
        margin-bottom: 30px;
        overflow: hidden;
        .myprceent1{
            word-wrap: normal;
            white-space: nowrap;
            text-indent: 500px;
            font-size:25px;
            height: 50px;
            color:cyan;
            line-height: 50px;
        }
        .my-left{
            transition: all 15s;
            margin-left:-3000px;
        }
    }
    .percent-text{
        font-size:28px;
        height: 50px;
        line-height: 50px;
        width:100%;
        overflow: hidden;
        .percet{
             height: 50px;
             width:100%;
             div{
                 height: 50px;
             }
            .percent-text1{
                color: rgb(197, 251, 121);
            }
            .percent-text2{
                color: rgb(99, 169, 0);
                margin-left: 10px;
            }
        }
        .my-move{
            transition:all 0.5s;
            margin-top:-50px;
        }
    }

}
</style>