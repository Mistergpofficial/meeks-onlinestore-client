<template>
    <div>
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container" v-if="cartCount.length > 0">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-table-container">
                            <table class="table table-cart">
                                <thead>

                                    <tr>
                                        <th class="product-col">Product</th>
                                        <th class="price-col">Price</th>
                                        <th class="qty-col">Qty</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="product-row" v-for="item in cartCount" :key="item._id" v-if="item.qty > 0">
                                        <td class="product-col">
                                            <figure class="product-image-container">
                                                <a href=""  class="product-image">
                                                    <img :src="item.image" alt="product">
                                                </a>
                                            </figure>
                                            <h2 class="product-title">
                                                <a href="">{{ item.name }}</a>
                                            </h2>
                                        </td>
                                        <td>N{{ item.price }}</td>
                                        <td>
                                            <span class="vertical-quantity form-control">{{ item.qty }}</span>
                                            <button @click="increment(item)">+</button>
                                             <button @click="decrement(item)" >-</button>
                                            <!-- <input class="vertical-quantity form-control" type="text"> -->
                                        </td>
                                        <td>N{{ item.subtotal }}</td>
                                    </tr>
                                    <tr class="product-action-row">
                                        <td colspan="4" class="clearfix">
                                            <div class="float-left">
                                                <a href="#" class="btn-move">Move to Wishlist</a>
                                            </div><!-- End .float-left -->
                                            
                                            <div class="float-right">
                                                <a href="#" title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                                                <a href="#" title="Remove product" class="btn-remove"><span class="sr-only">Remove</span></a>
                                            </div><!-- End .float-right -->
                                        </td>
                                    </tr>

                                   
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td colspan="4" class="clearfix">
                                            <div class="float-left">
                                                <router-link to="/" class="btn btn-outline-secondary">Continue Shopping</router-link>
                                            </div><!-- End .float-left -->

                                            <div class="float-right">
                                                <a @click="clearCart" class="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
                                                <!-- <a href="#" class="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</a> -->
                                            </div><!-- End .float-right -->
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div><!-- End .cart-table-container -->

                        <div class="cart-discount">
                            <h4>Apply Discount Code</h4>
                           
                            <form action="#">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-sm" placeholder="Enter discount code"  required>
                                    <div class="input-group-append">
                                        <button class="btn btn-sm btn-primary" type="submit">Apply Discount</button>
                                    </div>
                                </div><!-- End .input-group -->
                            </form>
                        </div><!-- End .cart-discount -->
                    </div><!-- End .col-lg-8 -->

                    <div class="col-lg-4">
                        <div class="cart-summary">
                            <h3>Summary</h3>

                            <h4>
                                <a data-toggle="collapse" href="#total-estimate-section" class="collapsed" role="button" aria-expanded="false" aria-controls="total-estimate-section">Estimate Shipping and Tax</a>
                            </h4>


                            <table class="table table-totals" >
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>N{{ total }}</td>
                                    </tr>

                                    <tr>
                                        <td>Tax</td>
                                        <td>N0.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Order Total</td>
                                        <td>N{{ total }}</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div class="checkout-methods">
                                <router-link to="/checkout-shipping" class="btn btn-block btn-sm btn-primary">Go to Checkout</router-link>
                            </div><!-- End .checkout-methods -->
                        </div><!-- End .cart-summary -->
                    </div><!-- End .col-lg-4 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

             <div class="container" v-if="cartCount.length < 1">
               <a :href="`/home`"><img src="/static/images/cart.jpg"></a>
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->
    </div>
</template>

<script>
 import {getGroups} from '../../../config'
  import {getCategories} from '../../../config'
  import { getProducts } from '../../../config'
export default {
    data() {
        return {
            products: {},
            groups: {},
            categories: {},
            errors: {}
        }
    },
     computed : {
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
                let retrievedItem = cart.find(retrievedItem => {
                    return retrievedItem.id === item.id;
                }); 
                 if(retrievedItem){
                    retrievedItem.qty++;
                    retrievedItem.subtotal = retrievedItem.price * retrievedItem.qty
                    this.$store.commit('setQuantity', retrievedItem);
                    this.$store.commit('setPrice', retrievedItem);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    window.reload = '/cart'
            }else{
                    let item = {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    subtotal: product.price * 1,
                    qty: 1,
                    image: product.image
                }
            }
           
            }
        },
        decrement(item){
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            //check if cart is empty
            
                let retrievedItem = cart.find(retrievedItem => {
                    return retrievedItem.id === item.id;
                }); 
                 if(retrievedItem){
                    retrievedItem.qty = retrievedItem.qty - 1 ;
                    retrievedItem.subtotal = retrievedItem.price * retrievedItem.qty
                    //update price and quantity of retrieved item
                    this.$store.commit('setQuantity', retrievedItem);
                    this.$store.commit('setPrice', retrievedItem);
                    //after the cart has been updated, now bring its content to the localstorage
                    localStorage.setItem('cart', JSON.stringify(cart));
            }else{
                alert('Cart is Empty')
                }

                if(retrievedItem.qty === 0){
                   // let array = this.$store.getters.getCart;
                    for (var i =0; i < this.cartCount.length; i++)
                    if (this.cartCount[i].qty === 0) {
                        this.cartCount.splice(i,1);
                        localStorage.setItem('cart', JSON.stringify(this.cartCount));
                        break;
                    }
            
                }
        },



      clearCart: function () {
        this.$store.dispatch('clearCart')
        .then(() => {
         window.reload = '/'
        })
      }
      
    }
}

</script>
