<template>
    <div class="container2">
        <div class="linedemo" ref="myline"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartTheme from '../assets/theme/westeros.json'
const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']
export default {
    name:'LineDemo',
    data(){
        return{
            timer:'',
            mychart:null,
            isTrue:true,//true  图1  false 图2
            xAxis:[
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            series:[
                    {
                        name: '去年网点月销量',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        lineStyle: {
                            width: 2
                        },
                        symbol: 'none',
                        data: [
                        ]
                    },
                    {
                        name: '今年网点月销量',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        lineStyle: {
                            width: 2
                        },
                        symbol: 'none',
                        data: [
                        ]
                    }
                ],
                    originArr1:[
                       [  
                        "330",
                        "420",
                        "560",
                        "450",
                        "610",
                        "890",
                        "720",
                        "610",
                        "580",
                        "750",
                        "770",
                            "600"
                     ],
                     [
                        "430",
                        "510",
                        "660",
                        "550",
                        "710",
                        "990",
                        "620",
                        "550",
                        "760",
                        "810",
                        "930",
                        "720"
                     ]
                    ],
                    originArr:[  //图2数据
                    [
                       "129",
                        "223",
                        "202",
                        "197",
                        "300",
                        "112",
                        "333",
                        "249",
                        "178",
                        "322",
                        "401",
                        "167" 
                    ],[
                        "179",
                        "263",
                        "282",
                        "297",
                        "330",
                        "344",
                        "222",
                        "299",
                        "190",
                        "455",
                        "566",
                        "233"
                    ]
                ]
        }
    },
    mounted(){
        this.initEchart()
        this.getTaskFun()
    },
    beforeDestroy(){
        if(this.timer){
            clearInterval(this.timer)
        }
    },
    methods:{
        getTaskFun(){
            this.timer = setInterval(()=>{
                if(this.isTrue){
                    this.isTrue = false
                }else{
                    this.isTrue = true
                }
                // console.log(this.isTrue)
                this.initEchart()
            },5000)
        },
        initEchart(){
            this.$nextTick(()=>{
                echarts.registerTheme('westeros',echartTheme)
                this.mychart = echarts.init(this.$refs.myline)
                this.mychart.setOption(this.initOption())
            })
        },
        initOption(){
            if(this.isTrue){
                this.series[0].data = this.originArr1[0]
                this.series[1].data = this.originArr1[1]
            }else{
                this.series[0].data = this.originArr[0]
                this.series[1].data = this.originArr[1]
            }
           const option = { //配置
                tooltip: { //图例
                  trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {//图例
                    top: 20,
                    right: 40,
                    icon: 'rect',
                    textStyle: {
                        fontSize: 36,
                        color: colors[2]
                    },
                    data:['去年网点月销量','今年网点月销量']
                },
                grid: {//版心外边距
                    top: 80,
                    bottom: 80,
                    left: 100,
                    right: 40
                },
                xAxis: [{//x轴
                    type: 'category',
                    axisTick: { show: false },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                          color: colors[2]
                        }
                    },
                    axisLabel: {
                        fontSize: 36
                    },
                    data: this.xAxis
                }, {
                    type: 'category',
                    axisTick: { show: false },
                    axisLine: { show: false }
                }],
                yAxis: [{//y轴
                    type: 'value',
                    axisTick: { show: false },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                          color: colors[2]
                        }
                    },
                    axisLabel: {
                        fontSize: 36
                    },
                    splitLine: {
                        lineStyle: {
                          type: 'dotted'
                        }
                    }
                }],
                series: this.series
            };
            return option
        }
    }
}
</script>
<style lang="scss" scoped>
.container2{
    width: 100%;
    height: 100%;
    background-color: rgb(43,44,46);
    .linedemo{
        width: 100%;
        height: 100%;
    }
}
</style>