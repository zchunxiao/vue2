import Vue from 'vue'
import App from './App.vue'
import DataView from "./components/DataView"
import router from "./router"
import myPlugin from "./plugins"
import {test} from "./plugins/test"

Vue.use(myPlugin);
Vue.use(test)
Vue.config.productionTip = false

// 全局混入会影响每一个之后创建的vue实例,重复应用混入，因此不建议使用
Vue.mixin({
  created: function () {
    console.log("全局注入mixins")
  }
})

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


// 在自己项目内使用dataView
Vue.use(DataView);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
