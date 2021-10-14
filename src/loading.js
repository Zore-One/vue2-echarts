import Vue from 'vue'
import Loading from './components/Loading.vue'

const LoadingFun = Vue.extend(Loading)
const instance = new LoadingFun({
    el:document.createElement('div')
})
instance.show = false//传参 false 
const loading = {
    show(){
        instance.show = true
        document.body.appendChild(instance.$el)
    },
    hide(){
        instance.show = false
    }
}
export default loading //返回一个对象
//this.$loading.show()//显示
//this.$loading.hide()//隐藏