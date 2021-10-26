// 全局组件注册
import LineDemo from './components/LineDemo'
import BarDemo from './components/BarDemo'
import menuDemo from './components/menuDemo'
import TabDemo from './components/TabDemo'
import PieDemo from './components/PieDemo'
import TotalUser from './components/TotalUser'
import IconDemo from './components/IconDemo'
import RadarDemo from './components/RadarDemo'
import Loading from './components/Loading'
import EchatList from './components/EchatList'

const components = [LineDemo,BarDemo,menuDemo,TabDemo,PieDemo,TotalUser,IconDemo,RadarDemo,Loading,EchatList]

const install = (Vue) => {
    components.forEach(t => {
        Vue.component(t.name,t)
    })
}
export default install