<template>
    <div class="container">
        <Container :options="options">
            <div class="header">头</div>
            <div class="separator"></div>
           <div class="center">
                <div class="left">
                    <div class="left1"><TotalUser/></div>
                    <div class="left2">左2</div>
                    <div class="left3">左3</div>
                    <div class="left4">左4</div>
                    <div class="left5"><LineDemo/></div>
                    <div class="left6"><BarDemo/></div>
                </div>
                <div class="right">
                    <div class="right1"><IconDemo/></div>
                    <div class="right2"><TabDemo :arr="['北京', '上海', '深圳', '广州', '杭州', '南京']"/></div>
                    <div class="right3">
                        <div class="right-left">
                            <div class="right-left1">
                                <PieDemo/>
                            </div>
                            <div class="right-left2">
                                <TabDemo @changeFun="changeFun2" :arr="['订单量','销售额','用户数','退单量']"/>
                            </div>
                            <div class="right-left3">
                                <RadarDemo :selected="selected"/>
                            </div>
                        </div>
                        <div class="right-right">
                            <div class="right-right1">
                               <menuDemo/>
                            </div>
                            <div class="right-right2"><EchatList/></div>
                        </div>
                    </div>
                </div>
           </div>
           <!-- <Loading/> -->
        </Container>
    </div>
</template>
<script>
import Container from '../components/Container'
// import LineDemo from '../components/LineDemo'
// import BarDemo from '../components/BarDemo'
// import menuDemo from '../components/menuDemo'
// import TabDemo from '../components/TabDemo'
// import PieDemo from '../components/PieDemo'
// import TotalUser from '../components/TotalUser'
// import IconDemo from '../components/IconDemo'
// import RadarDemo from '../components/RadarDemo'
// import Loading from '../components/Loading'
// import EchatList from '../components/EchatList'
export default {
    components:{
        Container,
        // LineDemo,
        // BarDemo,
        // menuDemo,
        // TabDemo,
        // PieDemo,
        // TotalUser,
        // IconDemo,
        // RadarDemo,
        // Loading,
        // EchatList
    },
    data(){
        return{
            options:{width:3840,height:2160},
            selected:0
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            this.$loading.show()
            setTimeout(()=>{
                this.$loading.hide()
            },2000)
        },
        changeFun2(selected){
            console.log('selected=='+selected)
            this.selected = selected
        }
    }
}
</script>
<style lang="scss">
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    background:#1d1d1d;
    color:#fff;
    font-size:48px;
    .header{
        height: 167px;
        width:100%;
        background-color:yellow;
    }
    .separator{
        width:100%;
        height: 10px;
        background: yellowgreen;
    }
    .center{
        display: flex;
        width:100%;
        .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width:860px;
            height: 100%;
            box-sizing: border-box;
            .left1{
                height: 300px;
                background: cadetblue;
            }
             .left2{
                height: 320px;
                background: greenyellow;
            }
             .left3{
                height: 280px;
                background: cadetblue;
            }
             .left4{
                height: 230px;
                background: greenyellow;
            }
             .left5{
                height: 360px;
                background: cadetblue;
            }
             .left6{
                height: 450px;
                background: greenyellow;
            }
        }
        .right{
            display: flex;
            flex:1;
            flex-direction: column;
            justify-content: space-between;
            margin-left:10px;
            .right1{
                height: 206px;
                width: 100%;
                background: pink;
            }
            .right2{
                height: 48px;
                width: 100%;
                background: hotpink;
                margin:10px 0;
            }
            .right3{
               display: flex;
               flex:1;
               .right-left{
                   width:1917px;
                   display: flex;
                   flex-direction: column;
                   justify-content: space-between;
                   .right-left1{
                       height: 999px;
                   }
                   .right-left2{
                       height: 80px;
                       background: hotpink;
                   }
                   .right-left3{
                       height: 550px;
                       background: pink;
                   }
               }
               .right-right{
                   display: flex;
                   margin-left:10px;
                   flex:1;
                   flex-direction: column;
                   justify-content: space-between;
                   .right-right1{
                       height: 999px;
                       width:100%;
                       background: hotpink;
                   }
                   .right-right2{
                       margin-top:10px;
                       width:100%;
                       display: flex;
                       flex:1;
                       background: pink;
                   }
               }
            }
        }
    }

}
</style>