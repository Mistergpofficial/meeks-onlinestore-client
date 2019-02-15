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
                                        <h1>Order History</h1>
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
                                                Order History
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
                                            All Orders
                                        </div>
                                    </div>
                                   <div class="card-body">
                                    <table class="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th scope="col">ORDER ID</th>
                                                <th scope="col">USER ID</th>
                                                <th scope="col">FULL NAME</th>
                                                <th scope="col">EMAIL</th>
                                                <th scope="col">COUNTRY</th>
                                                <th scope="col">STATE</th>
                                                <th scope="col">CITY</th>
                                                <th scope="col">ADDRESS</th>
                                                <th scope="col">PHONE</th>
                                                <th scope="col">ITEM ID(S)</th>
                                                <th scope="col">ITEM NAME(S)</th>
                                                <th scope="col">ITEM PRICE(S)</th>
                                                <th scope="col">ITEM QUANTITY(IES)</th>
                                                <th scope="col">REFERENCE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="it in orders.orderArray">
                                                <td>{{ it.id }}</td>
                                                <td>{{ it.user._id }}</td>
                                                <td>{{ it.user.full_name }}</td>
                                                <td>{{ it.user.email }}</td>
                                                <td>{{ it.user.country }}</td>
                                                <td>{{ it.user.state }}</td>
                                                <td>{{ it.user.city }}</td>
                                                <td>{{ it.user.address }}</td>
                                                <td>{{ it.user.phone }}</td>
                                                <td v-for="i in it.cart">{{ i.id }}<br/> </td>
                                                <td v-for="i in it.cart">{{ i.name }}</td>
                                                <td v-for="i in it.cart">{{ i.price }}</td>
                                                <td v-for="i in it.cart">{{ i.qty }}</td>
                                                <td><span v-if='it.reference === "PAYMENT ON DELIVERY"'><button class="btn btn-primary" disabled>PAYMENT ON DELIVERY</button></span></td>
                                                <td><span v-if='it.reference !== "PAYMENT ON DELIVERY"'>{{ it.reference }}</span></td>
                                                
                                                <!-- <td>{{ it.cart.name }}</td>
                                                <td>{{ it.cart }}</td> -->
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="info btn-info" v-if="orders.orderArray.length < 1">
                                    No Order Placed Yet
                                    </div><!-- End .container -->
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
  import {allOrders} from '../config'
export default {
    data() {
        return {
          orders: {},
        }
    },
     components: {
          'app-header': Header ,
          'app-sidebar': Sidebar,
          'app-footer': Footer
      },
    computed: {
        isLoggedIn : function(){ return this.$store.getters.currentUser},
       },
       created() {
           this.getOrders();
           this.getItemName();
           },
      
    
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      },
    getOrders() {
                this.$http.get(allOrders, {
              headers:{
						"Authorization":"Bearer "+ this.$store.getters.currentUser.token
					}
          }).then(response =>{
              this.orders = response.data
          })
        }
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


