import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import "./assets/style/reset.css"
Vue.use(ElementUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
