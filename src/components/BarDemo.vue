<template>
    <div class="container3">
        <div class="bardemo" ref="barDemo"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartTheme from '../assets/theme/westeros.json'
export default {
    name:'BarDemo',
    data(){
        return{
            mychart:null,
            timer:'',
            isOne:false,
            img1:[
                [320, 302, 301, 334, 390, 330, 320],
                [120, 132, 101, 134, 90, 230, 210],
                [220, 182, 191, 234, 290, 330, 310],
                [150, 212, 201, 154, 190, 330, 410],
                [820, 832, 901, 934, 1290, 1330, 1320]
            ],
            img2:[
                [20, 302, 201, 334, 290, 230, 20],
                [20, 132, 201, 234, 90, 330, 310],
                [320, 282, 191, 334, 390, 230, 210],
                [50, 112, 201, 954, 1190, 1330, 1410],
                [20, 332, 901, 434, 290, 330, 320]
            ]
        }
    },
    mounted(){
        this.initEchart()
        this.taskFun()
    },
    methods:{
        taskFun(){
            this.timer = setInterval(()=>{
                this.isOne = this.isOne == 1?'0':'1'
                this.initEchart()
            },3000)
        },
        initEchart(){
            this.$nextTick(()=>{
                echarts.registerTheme('westeros',echartTheme)
                this.mychart = echarts.init(this.$refs.barDemo,'westeros')
                this.mychart.setOption(this.initOption())
            })
        },
        initOption(){
            let series = this.isOne ==1?this.img1:this.img2
            const option = {
                color:['blue','green','red','yellow','pink'],
                tooltip: {  
                    trigger: 'axis',
                    axisPointer: {     // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    },
                    textStyle:{
                        lineHeight:56,
                        fontSize:36
                    }
                },
            legend: {
                textStyle:{
                        fontSize:26
                    },
                data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
            },
            grid: {
                top:'8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel:{
                    fontSize:36
                }
            },
            yAxis: {
                type: 'category',
                axisLine:{
                    onZero:false
                },
                 axisLabel:{
                    fontSize:36
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        fontSize:36
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: series[0]
                },
                {
                    name: 'Mail Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: series[1]
                },
                {
                    name: 'Affiliate Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: series[2]
                },
                {
                    name: 'Video Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: series[3]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: series[4]
                }
            ]
        }
            return option
        }
    }
}
</script>
<style lang="scss" scoped>
.container3{
    width: 100%;
    height: 100%;
    background-color: rgb(43,44,46);
    border-top: 1px solid #ccc;
    .bardemo{
        width: 100%;
        height: 100%;
    }
}
</style>