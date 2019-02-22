<template>
  <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left header-dropdowns">
                       <div class="header-dropdown">
                                <a href="#">NGN</a>
                            </div><!-- End .header-dropown -->


                        <div class="dropdown compare-dropdown">
                            <a href="/order-history">
                                <i class="icon-retweet"></i>Order History
                            </a>

                        
                        </div><!-- End .dropdown -->
                    </div><!-- End .header-left -->

                    <div class="header-right">
                         <p class="welcome-msg">Welcome to Meeks Clothing! </p>
                        <li><router-link to="/contact" class="login-link">CONTACT</router-link></li>
                        <div class="header-dropdown dropdown-expanded">
                            <li v-if="isLoggedIn"><span>{{ this.$store.getters.currentUser.full_name  }}</span></li>
                            <li v-if="isLoggedIn"><a @click="logout">Logout</a></li>
                            <li v-else><router-link to="/auth/login">LOG IN</router-link></li>
                            
                          
                           
                        </div><!-- End .header-dropown -->
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-top -->

            <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                       <span><b><font color="white">MEEKS CLOTHING</font></b></span>
                    </div><!-- End .header-left -->

                    <div class="header-center">
                        <div class="header-search">
                            <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                                <form action="#" method="get">
                                    <div class="header-search-wrapper">
                                        <input type="search" class="form-control" name="q" id="q" placeholder="Search..." required>
                                        <div class="select-custom">
                                            <select id="cat" name="cat">
                                                <option value="">All Categories</option>
                                                     <option v-for="category in categories.categoryArray" :value="category._id">{{ category.name }}</option>
                                                     </select>
                                        </div><!-- End .select-custom -->
                                        <button class="btn" type="submit"><i class="icon-magnifier"></i></button>
                                    </div><!-- End .header-search-wrapper -->
                                </form>
                        </div><!-- End .header-search -->
                    </div><!-- End .headeer-center -->

                    <div class="header-right">
                        <button class="mobile-menu-toggler" type="button">
                            <i class="fa fa-phone"></i>
                        </button>
                        <div class="header-contact">
                            <span>Call us now</span>
                                <a href="tel:#"><strong>+234 7084756925</strong></a>
                        </div><!-- End .header-contact -->

                        <div class="dropdown cart-dropdown">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <span class="cart-count">{{ cartCount.length }}</span>
                            </a>

                            <div class="dropdown-menu">
                                <div class="dropdownmenu-wrapper">
                                    <div class="dropdown-cart-header">
                                        <span>{{ cartCount.length }} Items</span>
                                        <router-link to="/cart"> <i class="fa fa-pie-chart"></i>View Cart</router-link>
                                   </div><!-- End .dropdown-cart-header -->
                                    <div class="dropdown-cart-products">
                                        <div class="product" v-for="(cart, index) in cartCount" :key="cart.id">
                                                <div class="product-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">{{ cart.name }}</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                    <span class="cart-product-qty">{{ cart.qty }}</span>
                                                    x N{{ cart.price }}
                                                </span>
                                                </div><!-- End .product-details -->

                                                <figure class="product-image-container">
                                                    <a href="" class="product-image">
                                                        <img :src="cart.image" alt="product">
                                                    </a>
                                                    <a @click="removeCart(index)" class="btn-remove" title="Remove Product" ><i class="icon-cancel"></i></a>
                                                </figure>
                                            </div><!-- End .product -->
                                    </div><!-- End .cart-product -->

                                    <div class="dropdown-cart-total" v-if="cartCount.length > 0">
                                        <span>Total</span>

                                        <span class="cart-total-price">N{{ total }} </span>
                                    </div><!-- End .dropdown-cart-total -->

                                    <div class="dropdown-cart-action">
                                        <router-link to="/checkout-shipping" class="btn btn-block" v-if="cartCount.length > 0">Checkout</router-link>
                                    </div><!-- End .dropdown-cart-total -->
                                </div><!-- End .dropdownmenu-wrapper -->
                            </div><!-- End .dropdown-menu -->
                        </div><!-- End .dropdown -->
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-middle -->

            <div class="sticky-wrapper" style="">
                <div class="header-bottom sticky-header">
                <div class="container">
                        
                    <div class="dropdown cart-dropdown">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <span class="cart-count">{{ cartCount.length }}</span>
                            </a>
<!-- <div v-for="cart in cartCount">{{ cart.qty }}</div> -->
                            <div class="dropdown-menu">
                                <div class="dropdownmenu-wrapper">
                                    <div class="dropdown-cart-header">
                                        <span>{{ cartCount.length }} Items</span>
                                        <router-link to="/cart"> <i class="fa fa-pie-chart"></i>View Cart</router-link>
                                    </div><!-- End .dropdown-cart-header -->
                                    <div class="dropdown-cart-products">
                                        <div class="product" v-for="(cart, index) in cartCount" :key="cart.id">
                                                <div class="product-details">
                                                    <h4 class="product-title">
                                                        <a href="#">{{ cart.name }}</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                    <span class="cart-product-qty">{{ cart.qty }}</span>
                                                    x N{{ cart.price }}
                                                </span>
                                                </div><!-- End .product-details -->

                                                <figure class="product-image-container">
                                                    <a href="" class="product-image">
                                                        <img :src="cart.image" alt="product">
                                                    </a>
                                                    <a @click="removeCart(index)" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                                </figure>
                                            </div><!-- End .product -->
                                    </div><!-- End .cart-product -->

                                    <div class="dropdown-cart-total" v-if="cartCount.length > 0">
                                        <span>Total</span>

                                        <span class="cart-total-price">N{{ total }} </span>
                                    </div><!-- End .dropdown-cart-total -->

                                    <div class="dropdown-cart-action">
                                                 <router-link to="/checkout-shipping" class="btn btn-block" v-if="cartCount.length > 0">Checkout</router-link>
                                  </div><!-- End .dropdown-cart-total -->
                                </div><!-- End .dropdownmenu-wrapper -->
                            </div><!-- End .dropdown-menu -->
                        </div>
                    <nav class="main-nav">
                        <ul class="menu sf-arrows sf-js-enabled" style="touch-action: pan-y;">
                            <li class="active"><a href="/home">Home</a></li>
                           <li class=""><a href="/account/register">Register</a></li>
                           <li class=""><a href="/auth/login">Login</a></li>
                             <li class=""><a href="/contact">Contact</a></li>
                            <!--<li class="float-right"><a href="/auth/login">Login</a></li>
                            <li class="float-right"><a href="/contact">Contact</a></li> -->
                        </ul>
                    </nav>
                </div><!-- End .header-bottom -->
            </div></div><!-- End .header-bottom -->
        </header><!-- End .header -->
</template>



<script>
import {getCategories} from '../../../config'
export default {
    data() {
        return {
            categories: {},
            errors: {}
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
      }
    },
    created () {
        this.getCategories();
    },
    methods: {
         getCategories() {
            this.$http.get(getCategories)
            .then(response => {
                this.categories = response.data
            })
            .catch(err => {
                this.errors = err.data
            });
        },
        logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      },
      removeCart(index) {
        this.$delete(this.cartCount, index)
         localStorage.setItem('cart', JSON.stringify(this.cartCount));
         alert('Item deleted')
      }
}
     
   
}
</script>

