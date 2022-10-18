import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";

import homePage from "@/components/homePage";
import AboutUs from "@/components/AboutUs";


Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
 routes: [
   {
     path: "/",
     name: "Home",
     component: homePage
   },
   {
     path: "/AboutUs",
     name: "AboutUs",
     component: AboutUs
   }
 ]
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
