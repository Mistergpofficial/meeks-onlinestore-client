<template>
    <div>
         <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <ul class="checkout-progress-bar">
                    <li>
                        <span>Shipping</span>
                    </li>
                    <li class="active">
                        <span>Review &amp; Payments</span>
                    </li>
                </ul>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="order-summary">
                            <h3>Summary</h3>

                            <h4>
                                <a data-toggle="collapse" href="#order-cart-section" class="collapsed" role="button" aria-expanded="false" aria-controls="order-cart-section">{{ cartCount.length }} products in Cart</a>
                            </h4>

                            <div class="collapse" id="order-cart-section">
                                <table class="table table-mini-cart">
                                    <tbody>
                                        <tr v-for="item in cartCount" :key="item._id" >
                                            <td class="product-col">
                                                <figure class="product-image-container">
                                                    <a href="#" class="product-image">
                                                        <img :src="item.image" alt="product">
                                                    </a>
                                                </figure>
                                                <div>
                                                    <h2 class="product-title">
                                                        <a href="#">{{ item.name }}</a>
                                                    </h2>

                                                    <span class="product-qty">Qty: {{ item.qty }}</span>
                                                </div>
                                            </td>
                                            <td class="price-col">N{{ item.price }}</td>
                                        </tr>
                                        <td class="price-col">TOTAL: N{{ total }}</td>
                                      
                                    </tbody>    
                                </table>
                            </div><!-- End #order-cart-section -->
                        </div><!-- End .order-summary -->

                        <div class="checkout-info-box">
                            <h3 class="step-title">Ship To:
                                <a href="#" title="Edit" class="step-title-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                            </h3>

                            <address>
                                {{ isLoggedIn.address }} <br>
                                    {{ isLoggedIn.city }} <br>
                                    {{ isLoggedIn.state }} <br>
                                    {{ isLoggedIn.country }} <br>
                                    {{ isLoggedIn.phone }}
                            </address>
                        </div><!-- End .checkout-info-box -->

                        <div class="checkout-info-box">
                            <h3 class="step-title">Shipping Method: {{ diff }}
                                <a href="#" title="Edit" class="step-title-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                            </h3>

                            <p>Flat Rate - Fixed</p>
                        </div><!-- End .checkout-info-box -->
                    </div><!-- End .col-lg-4 -->

                    <div class="col-lg-8 order-lg-first">
                        <div class="checkout-payment">
                            <h2 class="step-title">Payment Method:</h2>

                            <h4>Check / Money order</h4>
                            
                            <div class="form-group-custom-control">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="change-bill-address" value="1">
                                    <label class="custom-control-label" for="change-bill-address">My billing and shipping address are the same</label>
                                </div><!-- End .custom-checkbox -->
                            </div><!-- End .form-group -->

                            <div id="checkout-shipping-address">
                                <address>
                                    {{ isLoggedIn.address }} <br>
                                    {{ isLoggedIn.city }} <br>
                                    {{ isLoggedIn.state }} <br>
                                    {{ isLoggedIn.country }} <br>
                                    {{ isLoggedIn.phone }}
                                </address>
                            </div><!-- End #checkout-shipping-address -->

                          

                            <div id="new-checkout-address" class="show">
                                <div class="alert alert-success" v-if="success">
                                   <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                  Update is Successful
                               </div>

                                 <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.msg">
		            			{{ errors.msg }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>
                                </div>
                                  <h2>UPDATE INFORMATION</h2>
                                <form @submit.prevent="updateUser">
                                    <div class="form-group required-field">
                                        <label>Full Name </label>
                                        <input type="text" class="form-control" v-model="userData.full_name" name="full_name">
                                    </div><!-- End .form-group -->
                           <div class="form-group required-field">
                                        <label>Email </label>
                                        <input type="email" class="form-control" v-model="userData.email" name="email" disabled>
                                    </div><!-- End .form-group -->
                                              <div class="form-group required-field">
                                        <label>Street Address </label>
                                <textarea cols="30" rows="5" id="bodyMessage" class="form-control" v-model="userData.address" name="address"></textarea>
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>City  </label>
                                        <input type="text" class="form-control" v-model="userData.city" name="city">
                                    </div><!-- End .form-group -->

                                     <div class="form-group required-field">
                                        <label>State  </label>
                                        <input type="text" class="form-control" v-model="userData.state" name="state">
                                    </div><!-- End .form-group -->

                                     <div class="form-group required-field">
                                        <label>Country  </label>
                                        <input type="text" class="form-control" v-model="userData.country" name="country">
                                    </div><!-- End .form-group -->

                    
                                    <div class="form-group required-field">
                                        <label>Phone Number </label>
                                        <div class="form-control-tooltip">
                                            <input type="text" class="form-control" name="phone" v-model="userData.phone">
                                            <span class="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i class="icon-question-circle"></i></span>
                                        </div><!-- End .form-control-tooltip -->
                                    </div><!-- End .form-group -->
                                    <div class="form-group-custom-control">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="address-save">
                                            <label class="custom-control-label" for="address-save">I agree for my address information to be updated</label>
                                        </div><!-- End .custom-checkbox -->
                                    </div><!-- End .form-group -->
                                    <div class="text-center mb-4 mt-4">
                                        <input type="submit" name="submit" class="btn btn-primary" value="Update">
                            
                                    </div>
                                </form>
                            </div><!-- End #new-checkout-address -->


                        </div><!-- End .checkout-payment -->

                        <div class="checkout-discount">
                            
                             <div>
                                  <h2>PAYMENT INFORMATION</h2>
                              
                                    <div class="form-group required-field">
                                        <label>Pay On Delivery</label>
                                      <input type="radio" name="paymentMethod"  v-model="paymentMethod" v-bind:value="'Pay On Delivery'" checked>
                                     </div><!-- End .form-group -->
                                    <div class="form-group required-field">
                                        <label>Pay Online</label>
                                      <input type="radio" name="paymentMethod" v-model="paymentMethod" v-bind:value="'Pay Online'">
                                    </div><!-- End .form-group -->
                            </div><!-- End #new-checkout-address -->


<div class="clearfix">
    <input type="hidden" name="cart" v-model="orderDetailsWithout.cart"> 
    <input type="hidden" name="user"  v-model="orderDetailsWithout.user"> 
    <input type="hidden" name="status" v-model="orderDetailsWithout.cart"> 
    <input type="hidden" name="email"  v-model="orderDetailsWithout.email"> 
    <button v-if="paymentMethod === 'Pay On Delivery'" class="btn btn-primary float-right" @click="orderWithout">Place Order</button>
</div>

<div class="clearfix">
        <paystack v-if="paymentMethod === 'Pay Online'"
         :amount="getAmt"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        :embed="false"
        class="btn btn-primary float-right"
    >
       <i class="fas fa-money-bill-alt"></i>
       <span class="btn btn-primary float-right">Place Order</span>
    </paystack>
     <input type="hidden" name="cart" v-model="orderDetails.cart"> 
    <input type="hidden" name="reference" v-model="orderDetails.reference"> 
    <input type="hidden" name="user"  v-model="orderDetails.user"> 
    <input type="hidden" name="status" v-model="orderDetails.status">
    <input type="hidden" name="email1"  v-model="orderDetails.email1">  
</div>

                            
                        </div><!-- End .checkout-discount -->
                    </div><!-- End .col-lg-8 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->
    </div>
</template>
<script>
import paystack from 'vue-paystack';
import {login} from '../../../helpers/auth';
 import {userRegUrl} from '../../../config';
 import {update} from '../../../config'
 import { payWithPaystack } from '../../../config'
 import { payWithoutPaystack } from '../../../config'
export default {
     components: {
        paystack
    },
    data() {
        return {
            form:{
				email:'',
				password:''
            },
              userData: {
                full_name : this.$store.state.currentUser.full_name,
                email: this.$store.state.currentUser.email,
                country: this.$store.state.currentUser.country,
                state: this.$store.state.currentUser.state,
                city: this.$store.state.currentUser.city,
                address: this.$store.state.currentUser.address,
                phone: this.$store.state.currentUser.phone
                },
                orderDetails: {
                     user: this.$store.state.currentUser,
                     cart: this.$store.state.cart,
                     reference: this.reference,
                     status: 'ORDERED',
                     email1: this.$store.state.currentUser.email
                },
                 orderDetailsWithout: {
                     user: this.$store.state.currentUser,
                     cart: this.$store.state.cart,
                     status: 'ORDERED',
                     email: this.$store.state.currentUser.email
                },
			error:null,
            products: {},
            groups: {},
            categories: {},
            success: false,
            seen:false,
            seen1: false,
            errors: {},
            paymentMethod: 'Pay Online',
            paystackkey: "pk_live_f9bc52cf1eb6906ecd9d6efbdc31cae11b6baa1d", //paystack public key
            email: this.$store.state.currentUser.email , // Customer email
            amount: '' // in kobo

        }
    },
     computed : {
       isLoggedIn : function(){ return this.$store.getters.currentUser},
      cartCount : function(){ return this.$store.getters.getCart},
      total () { 
               let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            if(cart.length > 0){
          return this.$store.getters.getCart.map(item => item.subtotal).reduce((total, amount)=> total + amount)
          }
      },
      sum() {
          var a = parseInt(this.total);
          var b = parseInt(1500);
          var add = a + b;
          return add;
      },
      getAmt () {
          var a = parseInt(this.sum);
          var b = parseInt(100);
          var mult = a * b;
          return mult;
      },
      diff() {
          var a = parseInt(this.total);
          var b = parseInt(this.sum); 
          var c = b - a;
          return c;
      },
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    created () {
   
    },
    methods: {
       clearCart: function () {
        this.$store.dispatch('clearCart')
        .then(() => {
          this.$router.push('/')
        })
      },
    
      updateUser(){
          this.$http.patch(update + this.isLoggedIn._id, this.userData)
          .then(data => {
                        this.success = true;
                        this.userData = {};
          })
          .catch(err => {
                this.errors = err.response || {}
          });
      },
      
      clearCart: function () {
        this.$store.dispatch('clearCart')
        .then(() => {
         this.$router.push({path: '/cart'});
        })
      },
         
               callback() {
                   this.$http.put(payWithPaystack, this.orderDetails)
                   .then(response => {
                       alert('Order Has been placed. Your reference number is ' + this.reference);
                       this.clearCart();
                   })
                   .catch(err => {
                        console.log(err.response.data)
                        this.errors = err.response.data || {}; 
                   });
               },

                close: function(){
                    alert('Transaction Cancelled');
                    //  console.log("Payment closed")
                },

                 orderWithout() {
                   this.$http.post(payWithoutPaystack, this.orderDetailsWithout)
                   .then(response => {
                       alert('Order Has been placed.');
                        this.clearCart();
                      
                   })
                   .catch(err => {
                        console.log(err.response)
                        this.errors = err.response || {}; 
                   });
               },
            

      
    }
}

</script>