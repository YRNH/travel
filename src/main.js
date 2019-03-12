import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
//300毫秒点击延迟
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'styles/reset.css'
//1像素边框，通过给伪类加scale 0.5实现一像素边框的问题。
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
//路由就是根据网址的不同返回不同的内容给用户。
Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
