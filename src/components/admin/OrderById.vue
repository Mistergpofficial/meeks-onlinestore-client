<template>
<div class="wrapper">
<app-header></app-header>
<!-- Content_right -->
    <div class="container_full">
  <app-sidebar></app-sidebar>
     <!--main contents start-->
                <main class="content_wrapper">
                    <!--page title start-->
                    <div class="page-heading">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center">
                                <div class="col-md-6">
                                    <div class="page-breadcrumb">
                                        <h1>Order Details</h1>
                                    </div>
                                </div>
                                <div class="col-md-6 justify-content-end d-flex">
                                    <div class="breadcrumb_nav">
                                        <ol class="breadcrumb">
                                            <li>
                                                <i class="fa fa-home"></i>
                                                <a class="parent-item" href="/profile">Home</a>
                                                <i class="fa fa-angle-right"></i>
                                            </li>
                                            <li class="active">
                                                Order Details
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--page title end-->
                    <div class="container-fluid">
                        <!-- state start-->
                        <div class="row">
                            <div class=" col-sm-12">
                                <div class="card card-shadow mb-4">
                                    <div class="card-header">
                                        <div class="card-title">
                                            Order Details
                                        </div>
                                    </div>
                                   <div class="card-body">
                                    <table class="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Purchased BY</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Ship to</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Subtotal</th>
                                                <th scope="col">Delivery</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Item</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                               <td> {{ order._id }}</td>
                                               <td>{{ order.user.full_name }} {{ order.user.email }}</td>
                                               <td>{{ order.user.phone }}</td>
                                               <td>{{ order.user.address }} {{ order.user.city }} {{ order.user.state }} {{ order.user.country }}</td>
                                               <td>{{ order.createdAt }}</td>
                                               <td>N{{ getSubtotal }}</td>
                                               <td>N1500</td>
                                               <td>{{ getTotal }}</td>
                                                <td v-for="car in order.cart">
                                                   <ul>
                                                       <ol>
                                                           <p>{{ car.id }} <br/>{{ car.name }}</p>
                                                       </ol>
                                                   </ul>
                                               </td>
                                               <td><button @click="deleteOrder(order)" class="btn btn-success">Cancel</button></td>
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                       <!-- <div class="info btn-info" v-if="order.length < 1">
                                     Check back later
                                    </div> -->
                                    <!-- End .container -->
                                 
                                    <br/>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <!-- state end-->
                    </div>

                </main>
                main contents end

    </div>
    <!-- Content_right_End -->
    <!-- Footer -->
     <app-footer></app-footer>
    <!-- Footer_End -->
</div>
</template>


<script>
  import Header from "../partials/Header.vue";
  import Sidebar from '../partials/Sidebar.vue';
  import Footer from '../partials/Footer.vue'
  import {getOrdersById} from '../../config'
   import {deleteOrder} from '../../config'
export default {
    data() {
        return {
          order: {},
        }
    },
     components: {
          'app-header': Header ,
          'app-sidebar': Sidebar,
          'app-footer': Footer
      },
    computed: {
        isLoggedIn : function(){ return this.$store.getters.currentUser},
        getSubtotal : function()
         { 
            let total = [];
            Object.entries(this.order.cart).forEach(([key, val]) => {
            total.push(val.subtotal) // the value of the current key.
            });
           return total.reduce(function(total, num){ return total + num }, 0);
         },
            getTotal(){
                const delivery = 1500
                const subtotal = this.getSubtotal
                const sum = delivery + subtotal
                return sum;
            },
        //      getCartItem: function()
        //  { 
        //     let item = [];
        //     Object.entries(this.order.cart).forEach(([key, val]) => {
        //     item.push(val.name, val.id) // the value of the current key.
        //     });
        //    return this.order.cart.reduce(function(item){ 
        //        return{
        //       id:  item.id,
        //       item:  item.name 
        //    }
        //        });
        //  },
       },
        created() {
           this.getOrderByID();
           },
          
      
    
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      },
            getOrderByID() {
                this.$http.get(getOrdersById + this.$route.params.id).then(response => {
                    this.order = response.data
                })
                    .catch((err) => {

                        this.errors = err.data

                    })
            },
           deleteOrder(car) {
              let shouldDelete = confirm('Are you sure you want to delete this order');

              if (!shouldDelete) return;
//this.$route.params.id
              this.$http.delete(deleteOrder + this.order._id, this.order).then(response => {
                      alert("Successfully Deleted !!");
                     // window.reload = '/all-orders'
                      this.$router.push({path: '/all-orders'});
                  })
                  .catch(() => {
                      alert('error', "could not delete !!");
                  })

          },
    }

}
</script>

<style lang="css" scoped>
 @import "/static/css/admin/bootstrap.min.css";
 @import "/static/css/admin/font-awesome.min.css";
 @import "/static/css/admin/ionicons.css";
 @import "/static/css/admin/simple-line-icons.css";
 @import "/static/css/admin/jquery.mCustomScrollbar.css";
 @import "/static/css/admin/style.css";
 @import "/static/css/admin/responsive.css";
 .bg-white{
      color: red;  
    }
</style>



