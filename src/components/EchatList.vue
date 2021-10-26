<template>
    <div class="container11">
        <div :class="{'isanina':isanina,'mymov':true}">
            <div class="content" v-for="(item,index) in headerData" :key="index">
                <div class="item-title">{{item.title}}</div>
                <div class="item-echart" :id="`item-echart${index}`"></div>
                <div class="item-tab">
                    <TabDemo :arr="item.rankList"/>
                </div>
                <div class="item-content">
                    <div class="item-list" v-for="(child,cindex) in item.listData" :key="cindex">
                        <span>{{child.shop}}</span>
                        <span>{{child.order}}</span>
                        <span>{{child.sales}}</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartTheme from '../assets/theme/westeros.json'
import TabDemo from './TabDemo'
export default {
    name:'EchatList',
    components:{
        TabDemo
    },
    data(){
        return{
            myChart:[],
            headerData:[],
            headerData1:[{
                title: '北京',
                img: 'https://img.alicdn.com/tfs/TB1Z171qebviK0jSZFNXXaApXXa-30-29.png',
                rankList:['朝阳区','西城区','海淀区'],
                listData:[
                {shop:'商家',order:142,sales:'BJ003'},
                {shop:'订单量',order:375,sales:'121'},
                {shop:'销售额',order:301,sales:280976}]
                }, {
                title: '上海',
                img: 'https://img.alicdn.com/tfs/TB1b8Tzq7T2gK0jSZFkXXcIQFXa-28-24.png',
                rankList:['黄浦区','徐汇区','静安区'],
                listData:[
                    {shop:'商家',order:142,sales:'SG007'},
                {shop:'订单量',order:375,sales:'141'},
                {shop:'销售额',order:301,sales:360173}]
                }, {
                title: '深圳',
                img: 'https://img.alicdn.com/tfs/TB12MbzqYY1gK0jSZTEXXXDQVXa-28-30.png',
                rankList:['南山区','福田区','罗湖区'],
                listData:[
                    {shop:'商家',order:142,sales:"SZ023"},
                {shop:'订单量',order:375,sales:'111'},
                {shop:'销售额',order:301,sales:197623}]
                },{
                title: '杭州',
                img: 'https://img.alicdn.com/tfs/TB1Z171qebviK0jSZFNXXaApXXa-30-29.png',
                rankList:['上城区','下城区','西湖区'],
                listData:[
                    {shop:'商家',order:142,sales:'HZ012'},
                {shop:'订单量',order:375,sales:94},
                {shop:'销售额',order:301,sales:87342}]
                }, {
                title: '南京',
                img: 'https://img.alicdn.com/tfs/TB1b8Tzq7T2gK0jSZFkXXcIQFXa-28-24.png',
                rankList:['玄武区','鼓楼区','秦淮区'],
                listData:[
                {shop:'商家',order:142,sales:'NJ009'},
                {shop:'订单量',order:375,sales:67},
                {shop:'销售额',order:301,sales:48652}]
                }, {
                title: '武汉',
                img: 'https://img.alicdn.com/tfs/TB12MbzqYY1gK0jSZTEXXXDQVXa-28-30.png',
                rankList:['江岸区','江汉区','汉阳区'],
                listData:[
                {shop:'商家',order:142,sales:'WH014'},
                {shop:'订单量',order:375,sales:53},
                {shop:'销售额',order:301,sales:29854}]
                }],
                isanina:false
        }
    },
    mounted(){
        this.initEchart()
    },
    methods:{
         initEchart(){
            let currentIndex = 0  //0 1 2 3 4 5 6
            if(this.timer){
                clearInterval(this.timer)
            }
            this.timer = setInterval(() => {
                   if(this.timer1){
                        clearTimeout(this.timer1)
                    }
                    this.isanina = true
                    this.timer1 = setTimeout(() => {
                          this.headerData = this.headerData1.slice(currentIndex,currentIndex+3)
                            this.$nextTick(()=>{
                                this.headerData.forEach((item,index)=>{
                                    let id = `item-echart${index}`
                                    echarts.registerTheme('eTheme', echartTheme)
                                this.myChart[index] = echarts.init(document.getElementById(id),'eTheme');
                                this.myChart[index].setOption(this.initOption());
                                })   
                            })
                            if(currentIndex >= this.headerData1.length - 3 ){
                                currentIndex = 0
                            }else{
                                currentIndex = currentIndex + 1
                            }

                        this.isanina = false
                    },500);
              
            }, 3000);
        },
        initOption(){
         const data = []
          data[0] = Math.ceil(Math.random() * 100)  //0 -100
          data[1] = 100 - data[0]  //0 - 100
            let option = {
            color: ['rgb(210, 244, 148)', 'rgb(79, 79, 79)'],
            grid: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            title: {
              text: `${data[0]}%`,
              left: 'center',
              top: '60%',
              textStyle: {
                color: 'rgb(210, 244, 148)',
                fontSize: 18,
                align: 'center'
              }
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {
                    value: data[0],
                    name: '活跃用户'
                  },
                  {
                    value: data[1],
                    name: '非活跃用户'
                  }
                ]
              }
            ]
            }
            return option
        }
    }
}
</script>
<style lang="scss" scoped>
.container11{
    width:100%;
    height:100%;
    overflow: hidden;
    background-color:rgb(43, 44, 46);
    .mymov{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .content{
            flex:1;
        // background-color:pink;
            border-right:2px solid green;
            .item-echart{
                height: 400px;
                width:100%;
            }
            .item-tab{
                height: 60px;
                width:100%;
            }
            .item-content{
                font-size:30px;
                width:100%;
                height: 100%;
                .item-list{
                    display: flex;
                    justify-content: space-between;
                    span{
                        display: inline-block;
                        flex:1;
                    }
                }
            }
        }
    }
    .isanina{
        transition: all 0.5s;
        margin-left:-417.2px;
    }
}
</style>