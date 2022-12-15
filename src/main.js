import Vue from 'vue'
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.css"
import Router from "vue-router";


import HomePage from "@/components/HomePage";
import FindReview from "@/components/FindReview";
import LogInBusiness from "@/components/LogInBusiness";
import LogInUser from "@/components/LogInUser";
import RegisterUser from "@/components/RegisterUser";
import WriteReview from "@/components/WriteReview";
import EditReview from "@/components/EditReview";

Vue.config.productionTip = true
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
    path: "/RegisterUser",
    name: "RegisterUser",
    component: RegisterUser,
   },
   {
    path: "/WriteReview",
    name: "WriteReview",
    component: WriteReview,
   },
   {
    path: "/EditReview",
    name: "EditReview",
    component: EditReview
   }

 ]
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
