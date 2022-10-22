import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";

import HomePage from "@/components/HomePage";
import FindReview from "@/components/FindReview";
import LogInBusiness from "@/components/LogInBusiness";
import LogInUser from "@/components/LogInUser";
import RegisterBusiness from "@/components/RegisterBusiness";
import RegisterUser from "@/components/RegisterUser";
import WriteReview from "@/components/WriteReview";


Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
 routes: [
   {
     path: "/",
     name: "HomePage",
     component: HomePage
   },
   {
     path: "/FindReview",
     name: "FindReview",
     component: FindReview
   },
   {
    path: "/LogInBusiness",
    name: "LogInBusiness",
    component: LogInBusiness,
   },
   {
    path: "/LogInUser",
    name: "LogInUser",
    component: LogInUser,
   },
   {
    path: "/RegisterBusiness",
    name: "RegisterBusiness",
    component: RegisterBusiness,
   },
   {
    path: "/RegisterUser",
    name: "RegisterUser",
    component: RegisterUser,
   },
   {
    path: "/WriteReview",
    name: "WriteReview",
    component: WriteReview,
   }

 ]
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
