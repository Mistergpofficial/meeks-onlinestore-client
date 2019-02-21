<template>
    <div>
        
            <main class="main">
                <div class="home-top-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="home-slider owl-carousel owl-carousel-lazy">
                                    <div class="home-slide">
                                        <div class="owl-lazy slide-bg" data-src="/static/images/slider/slide-1.jpg"></div>
                                        <div class="home-slide-content">
                                            <h3><span>Black Friday Sales</span></h3>
                                            <h1>MENS FASHION</h1>
                                            <p>Hurry while stock last!</p>
                                            <a href="/" class="btn btn-dark">Shop Now</a>
                                        </div><!-- End .home-slide-content -->
                                    </div><!-- End .home-slide -->

                                    <div class="home-slide">
                                        <div class="owl-lazy slide-bg" data-src="/static/images/slider/slide-2.jpg"></div>
                                        <div class="home-slide-content">
                                            <h3>OVER <span>200+</span></h3>
                                            <h1>GREAT DEALS</h1>
                                            <p>While they last!</p>
                                            <a href="/" class="btn btn-dark">Shop Now</a>
                                        </div><!-- End .home-slide-content -->
                                    </div><!-- End .home-slide -->

                                    <div class="home-slide">
                                        <div class="owl-lazy slide-bg" data-src="/static/images/slider/slide-3.jpg"></div>
                                        <div class="home-slide-content">
                                            <h3>up to <span>40%</span> off</h3>
                                            <h1>NEW ARRIVALS</h1>
                                            <p>Starting at N15000</p>
                                            <a href="/" class="btn btn-dark">Shop Now</a>
                                        </div><!-- End .home-slide-content -->
                                    </div><!-- End .home-slide -->
                                </div><!-- End .home-slider -->
                            </div><!-- End .col-lg-9 -->
                             <div class="col-lg-3 order-lg-first">
                                  <div class="side-custom-menu">
                <app-sidebar></app-sidebar>
                </div><!-- End .side-custom-menu -->
                  </div><!-- End .col-lg-3 -->
                        </div><!-- End .row -->
                    </div><!-- End .container -->
                </div><!-- End .home-top-container -->

                <div class="info-boxes-container">
                    <div class="container">
                        <div class="info-box">
                            <i class="icon-shipping"></i>

                            <div class="info-box-content">
                                <h4>FREE SHIPPING & RETURN</h4>
                                <p>Free shipping on all orders over N50000.</p>
                            </div><!-- End .info-box-content -->
                        </div><!-- End .info-box -->

                        <div class="info-box">
                            <i class="icon-us-dollar"></i>

                            <div class="info-box-content">
                                <h4>MONEY BACK GUARANTEE</h4>
                                <p>100% money back guarantee</p>
                            </div><!-- End .info-box-content -->
                        </div><!-- End .info-box -->

                        <div class="info-box">
                            <i class="icon-support"></i>

                            <div class="info-box-content">
                                <h4>ONLINE SUPPORT 24/7</h4>
                                <p>Our support center is open to assist you.</p>
                            </div><!-- End .info-box-content -->
                        </div><!-- End .info-box -->
                    </div><!-- End .container -->
                </div><!-- End .info-boxes-container -->

                <div class="banners-group">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-1.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-2.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-3.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->
                            </div><!-- End .col-lg-3 -->

                            <div class="col-lg-3 col-sm-6 order-lg-last">
                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-4.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-5.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-6.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->
                            </div><!-- End .col-lg-3 -->

                            <div class="col-lg-6">
                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-7.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-8.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->

                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-9.jpg" alt="banner">
                                    </a>
                                </div><!-- End .banner -->
                            </div><!-- End .col-lg-6 -->
                        </div><!-- End .row -->
                    </div><!-- End .container -->
                </div><!-- End .banners-group -->

                <div class="mb-4"></div><!-- margin -->

                <div class="featured-section">
                    <div class="container">
                        <h2 class="carousel-title">Featured Products</h2>

                        <div class="featured-products owl-carousel owl-theme owl-dots-top">
                            <div class="product" v-for="product in products.productArray">
                                <figure class="product-image-container">
                                    <a :href="`/product/${product._id}`" class="product-image">
                                        <img :src="product.image" alt="product" width="244px" height="270px">
                                    </a>
                                    <a :href="`/product/${product._id}`" class="btn-quickview">Quick View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style="width:80%"></span><!-- End .ratings -->
                                        </div><!-- End .product-ratings -->
                                    </div><!-- End .product-container -->
                                    <h2 class="product-title">
                                        <a :href="`/product/${product._id}`">{{ product.name }}</a>
                                    </h2>
                                    <div class="price-box">
                                        <span class="product-price">N{{ product.price }}</span>
                                    </div><!-- End .price-box -->

                                    <div class="product-action">
                                       

                                        <!-- <router class="paction add-cart" @click="addToCart(product)">Add to Cart</router>
                                       -->
                                       <!-- <input @click.prevent="addToCart(product)" type="submit" class="btn btn-primary"  disabled="product.quantity === 0" value="Add to CART">
                                        -->
                                        <a @click="addToCart(product)" class="paction add-cart" title="Add to Cart" disabled="product.quantity === 0">
                                            <span>Add to Cart</span>
                                        </a>

                                        
                                    </div><!-- End .product-action -->
                                </div><!-- End .product-details -->
                            </div><!-- End .product -->

                        </div><!-- End .featured-proucts -->
                    </div><!-- End .container -->
                </div><!-- End .featured-section -->
            </main><!-- End .main -->
    </div>
</template>
<script>
 import Sidebar from "../../partials/homepage/Sidebar.vue";
 import { getProducts } from '../../../config'
export default {
    data() {
        return {
            products: {},
            errors: {}
        }
    },
    components: {
          'app-sidebar': Sidebar 
      },

    created () {
        this.getProducts();
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
        addToCart(product) {
            //alert('submit')
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
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
                localStorage.setItem('cart', item)
                this.$store.commit('setCart', item);
                //convert javascript object to string
                localStorage.setItem('cart', JSON.stringify(cart));
                this.$router.push({path: '/cart'});
            }else{
                //if it is not a new addition to cart, get the item id that exist already
                let item = cart.find(item => {
                    return item.id === product._id;
                });
                // if we got the item already which already is in the cart
                if(item){
                    item.qty++;
                    item.subtotal = item.price * item.qty
                    this.$store.commit('setQuantity', item);
                    this.$store.commit('setPrice', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    this.$router.push({path: '/cart'});
                }else{
                    let item = {
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        subtotal: product.price * 1,
                        qty: 1,
                        image: product.image
                    };
                    cart.push(item);
                    this.$store.commit('setCart', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    this.$router.push({path: '/cart'});
                }
            }
        }
    }
}
</script>
