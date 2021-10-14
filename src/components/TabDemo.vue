<template>
    <div class="container5">
        <div v-for="(item,index) in arr" :class="{'active':selected==index}" @mouseover="overFun(index)" @mouseout="outFun" :key="index">
            {{item}}
        </div>
    </div>
</template>
<script>
//公共组件 
//公共组件 通用组件
//如分页,弹框,特征：数据谁用谁传，时间需要往上传递
export default {
    props:{
        arr:Array 
    },
    data(){
        return{
            selected:0,
            // arr:['北京', '上海', '深圳', '广州', '杭州', '南京']
        }
    },
    mounted(){
        this.taskFun()
    },
    methods:{
        overFun(index){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.selected = index
        },
        outFun(){
            this.taskFun()
        },
        taskFun(){
            this.timer = setInterval(()=>{
                if(this.selected > this.arr.length-2){
                    this.selected=0
                }else{
                    this.selected = this.selected +1
                }
            },2000)
        }
    }
}
</script>
<style lang="scss" scoped>
.container5{
    width: 100%;
    height: 100%;
    background-color: rbg(43,44,46);
       display: flex;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex:1;
        background: rgb(53, 57, 65);
        font-size:24px;
        color: rgb(144, 160, 174);
    }
    .active{
        background: rgb(140, 160, 173);
        color: #fff;
        cursor: pointer;
    }
}
</style>