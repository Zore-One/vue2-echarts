<template>
    <div id="container" ref="refname">
        <template v-if="ready">
            <slot/>
        </template>
    </div>
</template>
<script>
export default {
    props:{
        options:Object
    },
    data(){
        return{
            ready:false,//开关控制slot显示和隐藏
            width:0,//大屏宽
            height:0,//大屏高
            originwidth:0,
            originheight:0,
            dom:null,
            timer:''
        }
    },
    mounted(){
        // this.ready = false
        //缩放的逻辑
        this.ready = true
        this.initSize()
        this.updateDom()
        window.addEventListener('resize',this.onSize)
    },
    beforeDestroy(){
         window.removeEventListener('resize',this.onSize)
    },
    methods:{
        onSize(){
            let that = this
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(function(){
                that.updateDom()
                console.log(1111)
            },10)
        },
        initSize(){
            this.dom = this.$refs.refname
            if(this.options && this.options.width && this.options.height){
                this.width = this .options.width
                this.height = this.options.height
            }else{
                this.width = window.screen.width
                this.height = window.screen.height
            } 
        },
        updateDom(){
            //获取视口的宽和高
            this.originwidth = document.body.clientWidth
            this.originheight = document.body.clientHeight
            this.dom.style.width = `${this.width}px`
            this.dom.style.height = `${this.height}px` 
            const scalwidth = this.originwidth / this.width
            const scalheight = this.originheight / this.height
            this.dom.style.transform = `scale(${scalwidth},${scalheight})`
        }

    }
}
</script>
<style lang="scss" scoped>
#container{
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    background-color: #ccc;
    z-index: 99;
}
</style>