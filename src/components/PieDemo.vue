<template>
    <div class="container6">
        <div class="pie-demo" ref="pieDemo"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartTheme from '../assets/theme/westeros.json'
export default {
    data(){
        return{
            mychart:null,
            isdefault:0,
            colorList:[
                ['blue','green','red','yellow','pink'],
                ['red','yellow','pink','blue','green']
            ],
            dataList:[
                [
                    {value: 1048, name: '搜索引擎'},
                    {value: 735, name: '直接访问'},
                    {value: 580, name: '邮件营销'},
                    {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'}
                ],
                [
                    {value: 222, name: '搜索引擎1'},
                    {value: 335, name: '直接访问1'},
                    {value: 880, name: '邮件营销1'},
                    {value: 984, name: '联盟广告1'},
                    {value: 1000, name: '视频广告1'}
                ]
            ]
        }
    },
    mounted(){
        this.initChart()
        this.tastFun()
    },
    methods:{
        tastFun(){
            setInterval(()=>{
                this.isdefault = this.isdefault==0?1:0//开关法
                this.initChart()
            },4000)  
        },
        initChart(){
            this.$nextTick(()=>{
                echarts.registerTheme('theme',echartTheme)
                this.mychart = echarts.init(this.$refs.pieDemo,'theme')
                this.mychart.setOption(this.initOption())
            })
        },
        initOption(){
            let color = this.colorList[this.isdefault]
            let data = this.dataList[this.isdefault]
            const option={
                color:color,
                tooltip: {
                    trigger: 'item',
                    textStyle:{
                        fontSize:36
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    itemWidth:44,
                    itemHeight:35,
                    textStyle:{
                        fontSize:36
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%','70%'],
                        data:data,
                        label:{
                            fontSize:36
                        },
                        emphasis: {
                            label:{
                                fontSize:36
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            return option
        }
    }
}
</script>
<style lang="scss" scoped>
.container6{
    width: 100%;
    height: 100%;
    background-color: rgb(43,44,46);
    border-top: 1px solid #ccc;
    .pie-demo{
        width: 100%;
        height: 100%;
    }
}
</style>