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
                    <li class="active">
                        <span>Shipping</span>
                    </li>
                    <li>
                        <span>Review &amp; Payments</span>
                    </li>
                </ul>
                <div class="row">
                    <div class="col-lg-8">
                        <ul class="checkout-steps">
                            <li>
                                <h2 class="step-title">Shipping Address</h2>
                                 <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="authError">
		            			{{ authError }}

		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                                <form  @submit.prevent="authenticate" v-show="!isLoggedIn">
                                    <div class="form-group required-field">
                                        <label>Email Address </label>
                                        <div class="form-control-tooltip">
                                            <input type="email" class="form-control" v-model="form.email" name="email">
                                            <span class="input-tooltip" data-toggle="tooltip" title="We'll send your order confirmation here." data-placement="right"><i class="icon-question-circle"></i></span>
                                        </div><!-- End .form-control-tooltip -->
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>Password </label>
                                        <input type="password" class="form-control" v-model="form.password" name="password">
                                    </div><!-- End .form-group -->
                                    
                                    <p>You already have an account with us. Sign in or continue as guest.</p>
                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-primary">LOGIN</button>
                                        <a href="" class="forget-pass"> Forgot your password?</a>
                                    </div><!-- End .form-footer -->
                                </form>



                                 <div class="alert alert-success" v-if="success">
                                   <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                   We sent a verification email to {{ userData.email }}.<br/>
                                   Please check your email to confirm your account and complete your account creation process.<br/>
                                   <a @click="resend">Didn't get the email? Resend it</a>
                               </div>

                                 <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.msg">
		            			{{ errors.msg }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>
                                </div>

                                

                                

                                <form @submit.prevent="signup" v-show="!isLoggedIn">
                                    <div class="form-group required-field">
                                        <label>Full Name </label>
                                        <input type="text" class="form-control" name="full_name" v-model="userData.full_name">
                                    </div><!-- End .form-group -->

                                      <div class="form-group required-field">
                                        <label>Email Address </label>
                                        <div class="form-control-tooltip">
                                            <input type="email" class="form-control" v-model="userData.email" name="email">
                                        </div><!-- End .form-control-tooltip -->
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>Password </label>
                                        <input type="password" class="form-control" v-model="userData.password" name="password">
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>Street Address </label>
                                <textarea cols="30" rows="5" id="bodyMessage" class="form-control" v-model="userData.address" name="address"></textarea>
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>City  </label>
                                        <input type="text" class="form-control" v-model="userData.city">
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label>State</label>
                                        <div class="select-custom">
                                            <select class="form-control" v-model="userData.state">
                                                <option value="AB">Abia</option>
                                                <option value="LG">Lagos</option>
                                            </select>
                                        </div><!-- End .select-custom -->
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label>Country</label>
                                        <div class="select-custom">
                                            <select class="form-control" v-model="userData.country">
                                                <option value="USA">United States</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="China">China</option>
                                                <option value="Germany">Germany</option>
                                                 <option value="Nigeria">Nigeria</option>
                                            </select>
                                        </div><!-- End .select-custom -->
                                    </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                        <label>Phone Number </label>
                                        <div class="form-control-tooltip">
                                            <input type="text" class="form-control" name="phone" v-model="userData.phone">
                                            <span class="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i class="icon-question-circle"></i></span>
                                        </div><!-- End .form-control-tooltip -->
                                    </div><!-- End .form-group -->
                                     <div class="text-center mb-4 mt-4">
                                        <button type="submit" class="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </li><br/>

                            <li>
                                <div class="checkout-step-shipping">
                                    <h2 class="step-title">Shipping Methods</h2>

                                    <table class="table table-step-shipping">
                                      <tbody>
                                            <tr>
                                                <td><input type="radio" name="shippingMethod"  v-model="shippingMethod" v-bind:value="'1500'" checked></td>
                                                <td><strong>N1500.00</strong></td>
                                                <td>Fixed</td>
                                                <td>Flat Rate</td>
                                            </tr>

                                        
                                        
                                            <!-- <tr>
                                                <td><input type="radio" name="shippingMethod" v-model="shippingMethod" v-bind:value="'1500'"></td>
                                                <td><strong>N1500.00</strong></td>
                                                <td>Express</td>
                                                <td>Best Way</td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div><!-- End .checkout-step-shipping -->
                            </li>
                        </ul>
                    </div><!-- End .col-lg-8 -->

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
                    </div><!-- End .col-lg-4 -->
                </div><!-- End .row -->

                <div class="row">
                    <div class="col-lg-8">
                        <div class="checkout-steps-action">
                            <a v-if="isLoggedIn" :href="`/checkout-review`" class="btn btn-primary float-right">NEXT</a>
                        </div><!-- End .checkout-steps-action -->
                    </div><!-- End .col-lg-8 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->
    </div>
</template>
<script>
import {login} from '../../../helpers/auth';
 import {userRegUrl} from '../../../config';
 import {getGroups} from '../../../config'
  import {getCategories} from '../../../config'
  import { getProducts } from '../../../config'
  import { resend } from '../../../config'
export default {
    data() {
        return {
            form:{
				email:'',
				password:''
            },
              userData: {
                full_name : '',
                email: '',
                password: '',
                country: '',
                state: '',
                city: '',
                address: '',
                phone: ''

            },
			error:null,
            products: {},
            groups: {},
            categories: {},
            success: false,
            errors: {},
            shippingMethod: '1500',
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
      	authError(){
			return this.$store.getters.authError;
		},
		isLoading(){
			return this.$store.getters.isLoading;
		}
    },
    created () {
        this.getProducts();
        this.getGroups();
        this.getCategories();
    },
    methods: {
        getProducts() {
            this.$http.get(getProducts)
            .then(response => {
                this.products = response.data
            })
            .catch(err => {
                this.errors = err.data
            });
        },
         getGroups() {
            this.$http.get(getGroups)
            .then(response => {
                this.groups = response.data
            })
            .catch(err => {
                this.errors = err.data
            });
        },
         getCategories() {
            this.$http.get(getCategories)
            .then(response => {
                this.categories = response.data
            })
            .catch(err => {
                this.errors = err.data
            });
        },
        increment(item){
             let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            //check if cart is empty
            if(cart.length === 0){
                let item = {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    subtotal: product.price * 1,
                    qty: 1,
                    image: product.image
                }
                cart.push(item);
                this.$store.commit('setCart', item);
                localStorage.setItem('cart', JSON.stringify(cart));
            }else{
                let it = cart.find(it => {
                    return it.id === item.id;
                }); 
                 if(it){
                    it.qty++;
                    it.subtotal = it.price * it.qty
                    this.$store.commit('setQuantity', it);
                    this.$store.commit('setPrice', it);
                    localStorage.setItem('cart', JSON.stringify(cart));
            }else{

            }
           
            }
        },
        decrement(item){
             let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            //check if cart is empty
            if(cart.length === 0){
                let item = {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    subtotal: product.price * 1,
                    qty: 1,
                    image: product.image
                }
                cart.push(item);
                this.$store.commit('setCart', item);
                localStorage.setItem('cart', JSON.stringify(cart));
            }else{
                let it = cart.find(it => {
                    return it.id === item.id;
                }); 
                 if(it){
                    it.qty--;
                    it.subtotal = it.price * it.qty
                    this.$store.commit('setQuantity', it);
                    this.$store.commit('setPrice', it);
                    localStorage.setItem('cart', JSON.stringify(cart));
            }else{

            }
           
            }
        },
      clearCart: function () {
        this.$store.dispatch('clearCart')
        .then(() => {
          this.$router.push('/')
        })
      },
     
      	authenticate(){
			this.$store.dispatch("login");

			login(this.$data.form)
			.then((res)=>{
                //console.log(is_admin)
                this.$store.commit("loginSuccess",res);
                 let is_admin = res.user.is_admin
                if(is_admin === 1){
                this.$router.push({path:'/profile'});
               // window.location = '/profile'
                    }else{
                //this.$router.push({path:'/home'})
                 window.location = '/home'
                    }
				
			})
			.catch((error)=>{
				this.$store.commit("loginFailed",{error});
			})
        },
          signup(){
                    this.$http.post(userRegUrl, this.userData)
                    .then(data => {
                        this.success = true;
                       // this.userData = {};
                        
                       // this.$router.push({name:'Login'})
                        })
                    .catch(err => {
                        //console.log(err.response.data)
                        this.errors = err.response.data || {};
                    });
                },
                 resend(){
                this.$http.post(resend,{email: this.userData.email})
                .then(data => {
                         alert('We sent a verification email to you. Please check your email to confirm your account and complete your account creation process.')
                        })
                    .catch(err => {
                        this.errors = err.response.data || {};
                    });
            }
            

      
    }
}

</script>