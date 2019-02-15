import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import Vuex from 'vuex';
import StoreData from './vuex/store'
import Axios from 'axios'
//import {initialize} from './helpers/middleware';

Vue.use(Vuex);
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyAGHLE-w2f4jDluqZCf-YFi7dNxhFJfNp8",
//     libraries: "Ikotun" // necessary for places input
//    // libraries: "places" // necessary for places input
//   }
// });



const store = new Vuex.Store(StoreData);




Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


//initialize(store,Router);
//sync(store, Router)

new Vue({
  el: '#app',
    store,
    router: Router,
  render: h => h(App)
});



