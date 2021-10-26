<template>
    <div class="container4">
        <ul :class="{'isanina':isanina==true}">
            <li v-for="(item,index) in currentRowsData" :class="{'active':index%2==0}" :key="index">
                <span>{{item[0]}}</span>
                <span>{{item[1]}}</span>
                <span>{{item[2]}}</span>
                <span>{{item[3]}}</span>
                <span>{{item[4]}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'menuDemo',
    data(){
        return{
            isanina:false,
            timer:'',
            currentRowsData:[
   				    ['北京 +15.4','上海 -13.3','沈阳 +1.2','河北 -0.3','吉林 +2.2'],
	   				['北京 -2.4','上海 -3.3','沈阳 +2.2','河北 -1.3','吉林 +22.2'],
	   				['北京 +1.4','上海 -13.3','沈阳 +3.2','河北 -2.3','吉林 +12.2'],
	   				['北京 -5.4','上海 -3.3','沈阳 +4.2','河北 -3.3','吉林 +4.2'],
	   				['北京 +13.4','上海 -13.3','沈阳 +5.2','河北 -4.3','吉林 +5.2'],
	   				['北京 -23.4','上海 -3.3','沈阳 +6.2','河北 -5.3','吉林 +6.2'],
	   				['北京 +55.4','上海 -13.3','沈阳 +7.2','河北 -6.3','吉林 +7.2'],
	   				['北京 -22.4','上海 -3.3','沈阳 +8.2','河北 -7.3','吉林 +8.2'],
	   				['北京 +88.4','上海 -13.3','沈阳 +9.2','河北 -8.3','吉林 +9.2'],
	   				['北京 -66.4','上海 -3.3','沈阳 +10.2','河北 -9.3','吉林 +0.2'],
	   				['北京 +44.4','上海 -13.3','沈阳 +11.2','河北 -10.3','吉林 +12.2'],
	   				['北京 -55.4','上海 -3.3','沈阳 +12.2','河北 -11.3','吉林 +29.2'],
   				 ],
        }
    },
    mounted(){
       setInterval(this.taskFun,2000)
    },
    beforeDestroy(){
        // if(this.timer){
        //     clearInterval(this.timer)
        // }
    },
    methods:{
        taskFun(){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.isanina = true
            this.timer = setTimeout(()=>{
                this.currentRowsData.push(this.currentRowsData[0])
                this.currentRowsData.shift()
                this.isanina = false
            },500)
        }
    }

}
</script>
<style lang="scss" scoped>
.container4{
    width: 100%;
    height: 100%;
    background-color: rgb(43,44,46);
    font-size: 36px;
    overflow: hidden;
    color: #fff;
    li{
        width: 100%;
        height: 90px;
        line-height: 90px;
        display: flex;
        justify-content: space-between;
        span{
            flex:1
        }
    }
    .isanina{
        transition: all 0.5;
        margin-top:-90px
    }
    .active{
        background-color: rgb(80,80,80);
    }
}
</style>