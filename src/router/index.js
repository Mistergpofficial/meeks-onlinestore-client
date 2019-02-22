import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import store from '../vuex/store'

import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import OrderHistory from '../components/OrderHistory.vue'
import CancelOrder from '../components/CancelOrder.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import CheckoutReview from '../components/CheckoutReview.vue'
import Product from '../components/Product.vue'
import ProductByCategory from '../components/ProductByCategory.vue'
import UserRegister from '../components/accounts/Register.vue'
import Login from '../components/admin/Login.vue'
import Register from '../components/admin/Register.vue'
import ResetPassword from '../components/admin/ResetPassword.vue'
import Profile from '../components/admin/Profile.vue'
import Order from '../components/admin/Order.vue'
import OrderById from '../components/admin/OrderById.vue'
import AddCollections from '../components/admin/NewCollection.vue'
import AddCategories from '../components/admin/NewCategories.vue'
import AddProduct from '../components/admin/Product.vue'
import Error from '../components/NotFound.vue'

Vue.use(VueRouter);
Vue.use(Axios);


const router  = new VueRouter({
    mode: 'history',
   routes: [
       {
           path: '/', 
          redirect: '/home',
          meta: { 
            guest: true
        }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: { 
                guest: true
            }
          },
          {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            meta: { 
                guest: true
            }
          },
           {
              path: '/order-history',
              name: 'OrderHistory',
              component: OrderHistory,
              meta: {
                  guest: true
              }
          },
          
          {
            path: '/order-cancelled',
            name: 'CancelOrder',
            component: CancelOrder,
            meta: {
                guest: true
            }
        },
          {
            path: '/cart',
            name: 'Cart',
            component: Cart
          },
          {
            path: '/product/:id',
            name: 'Product',
            component: Product
          },
          {
            path: '/product/category/:categoryId',
            name: 'ProductByCategory',
            component: ProductByCategory
          },
          {
            path: "/checkout-shipping",
            name: 'Checkout',
            component: Checkout
          },
          {
            path: "/checkout-review",
            name: 'CheckoutReview',
            component: CheckoutReview,
            meta:{
                requiresAuth:true
            }
          },
   
        {
            path: '/account/register', 
            name: 'UserRegister', 
            component: UserRegister,
            meta: { 
                guest: true
            }
         },
       {
           path: '/auth/login',
           name: 'Login', 
           component: Login,
           meta: { 
            guest: true
        }
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword,
            meta: {
                guest: true
            }
        },
       {
           path: '/admin-register/werbrtyrsequew/ntui', 
           name: 'Register', 
           component: Register,

        },
       {
           path: '/profile', 
           name: 'profile', 
           component: Profile,
           meta:{
      requiresAuth:true
    }
        },
        {
            path: '/all-orders', 
            name: 'order', 
            component: Order,
            meta:{
             requiresAuth:true
         }
         },
         {
            path: '/orders/:id', 
            name: 'orderById', 
            component: OrderById,
            meta:{
             requiresAuth:true
         }
         },
        {
            path: '/add-collections',
            name: 'AddCollection',
            component: AddCollections,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/add-categories',
            name: 'AddCategories',
            component: AddCategories,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/add-products',
            name: "AddProducts",
            component: AddProduct,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
   ]
});



// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('token') == null) {
//             next({
//                 path: 'auth/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if(to.matched.some(record => record.meta.is_admin)) {
//                 if(user.is_admin == 1){
//                     next()
//                 }
//                 else{
//                     next({path: '/profile'})
//                 }
//             }else {
//                 next()
//             }
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         if(localStorage.getItem('token') == null){
//             next()
//         }
//         else{
//             next({ path: '/home'})
//         }
//     }else {
//         next() 
//     }
// })

router.beforeEach((to,from,next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth );
    const currentUser = store.state.currentUser;

    if(requiresAuth && !currentUser){
        store.commit("showAlert","You need to login for accessing this content. new user ? register now")
        next('/auth/login');
    } else if(to.path == '/auth/login' && currentUser){
        next('/');
    } else {
        next();
    }
    setTimeout(()=>{
        store.commit("showAlert","")
    },5000)
});

Axios.interceptors.response.use(null,(error)=>{
    if(error.response.status == 401){
        store.commit('logout');
        router.push('auth/login');
    }
    return Promise.reject(error);
});

export default router