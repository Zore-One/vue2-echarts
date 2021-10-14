<template>
    <div class="container10" v-if="show">
        <icon class="loading" name="jiazai"></icon>
    </div>
</template>
<script>
export default {
    props:{
        show:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.container10{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(231,228,228,0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading{
        width: 200px;
        height: 200px;
        color: #fff;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-400px,-400px);
        z-index: 1001;
        animation: xuan 1s ease-in-out infinite;
    }
}
@keyframes xuan{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>