<template>
    <div class="container9">
        <div class="radar-demo" ref="radarDemo"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartTheme from '../assets/theme/westeros.json'
export default {
    name:'RadarDemo',
    props:{
        selected:{
            type:Number,
            default(){
                return 0
            }
        }
    },
    watch:{
        selected:function(val){
            this.myselected = val
            this.initChart()
        }
    },
    data(){
        return{
            mychart:null,
            myselected:0,
            arr:[
                [[60, 73, 85, 40],[15, 91, 90, 95, 95],[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]],
                [[6, 43, 75, 80],[25, 92, 90, 95, 95],[6.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]],
                [[20, 23, 65, 89],[35, 93, 90, 95, 95],[8.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]],
                [[40, 13, 45, 20],[45, 94, 90, 95, 95],[9.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]]
            ]
        }
    },
    mounted(){
        this.initChart()
    },
    methods:{
        initChart(){
            echarts.registerTheme('whemem',echartTheme)
            this.mychart = echarts.init(this.$refs.radarDemo,'whemem')
            this.mychart.setOption(this.initOption())
        },                              
        initOption(){
            let data = this.arr[this.myselected]
            let option ={
                 title: {
                    text: '多雷达图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    itemWidth:60,
                    itemHeight:30,
                    textStyle:{
                        fontSize:30
                    },
                    left: 'center',
                    data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
                },
                radar: [
                    {
                        indicator: [
                            {text: '品牌', max: 100},
                            {text: '内容', max: 100},
                            {text: '可用性', max: 100},
                            {text: '功能', max: 100}
                        ],
                        name:{
                            fontSize:30
                        },
                        center: ['20%', '50%'],
                        radius: 150
                    },
                    {
                        indicator: [
                            {text: '外观', max: 100},
                            {text: '拍照', max: 100},
                            {text: '系统', max: 100},
                            {text: '性能', max: 100},
                            {text: '屏幕', max: 100}
                        ],
                         name:{
                            fontSize:30
                        },
                        radius: 150,
                        center: ['50%', '50%'],
                    },
                    {
                        indicator: (function (){
                            var res = [];
                            for (var i = 1; i <= 12; i++) {// 1 -12
                                res.push({text: i + '月', max: 100});
                            }
                            return res;
                        })(),//自执行
                        name:{
                            fontSize:30
                        },
                        center: ['80%', '50%'],
                        radius: 150
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item',
                            textStyle:{
                                fontSize:30
                            }
                        },
                        areaStyle: {},
                        data: [
                            {
                                value: [60, 73, 85, 40],
                                name: '某软件'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                         tooltip: {
                            trigger: 'item',
                            textStyle:{
                                fontSize:30
                            }
                        },
                        areaStyle: {},
                        data: [
                            {
                                value: data[1],
                                name: '某主食手机'
                            },
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 2,
                        tooltip: {
                            trigger: 'item',
                            textStyle:{
                                fontSize:30
                            }
                        },
                        areaStyle: {},
                        data: [
                            {
                                name: '降水量',
                                value: data[2],
                            },
                        ]
                    }
                ]
            };
            return option
        }
    }
}
</script>
<style lang="scss" scoped>
.container9{
    width: 100%;
    height: 100%;
    background-color: rgb(43,44,46);
    .radar-demo{
        width: 100%;
        height: 100%;
    }
}
</style>