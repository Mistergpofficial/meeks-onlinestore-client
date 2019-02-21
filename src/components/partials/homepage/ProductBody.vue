<template>
    <div>
        
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Electronics</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Headsets</li>
                    </ol>
                </div><!-- End .container -->
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="product-single-container product-single-default">
                            <div class="row">
                                <div class="col-lg-7 col-md-6 product-single-gallery">
                                    <div class="product-slider-container product-item">
                                        <div class="product-single-carousel owl-carousel owl-theme">
                                            <div class="product-item">
                                         
                                                <img class="product-single-image" :src="product.image" data-zoom-image="assets/images/products/zoom/product-1-big.jpg"/>
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" :src="product.image" data-zoom-image="assets/images/products/zoom/product-2-big.jpg"/>
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" :src="product.image" data-zoom-image="assets/images/products/zoom/product-3-big.jpg"/>
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" :src="product.image" data-zoom-image="assets/images/products/zoom/product-4-big.jpg"/>
                                            </div>
                                        </div>
                                        <!-- End .product-single-carousel -->
                                        <span class="prod-full-screen">
                                            <i class="icon-plus"></i>
                                        </span>
                                    </div>
                                    <div class="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                        <div class="col-3 owl-dot">
                                            <img :src="product.image"/>
                                        </div>
                                        <div class="col-3 owl-dot">
                                            <img :src="product.image" />
                                        </div>
                                        <div class="col-3 owl-dot">
                                            <img :src="product.image" />
                                        </div>
                                        <div class="col-3 owl-dot">
                                            <img :src="product.image" />
                                        </div>
                                    </div>
                                </div><!-- End .col-lg -7 -->

                                <div class="col-lg-5 col-md-6">
                                    <div class="product-single-details">
                                        <h1 class="product-title">{{ product.name }}</h1>

                                        <div class="ratings-container">
                                        </div><!-- End .product-container -->

                                        <div class="price-box">
                                            <span class="old-price">N{{ product.price }}</span>
                                            <span class="product-price">N{{ product.price }}</span>
                                        </div><!-- End .price-box -->

                                        <div class="product-desc">
                                            <p>{{ product.description }}.</p>
                                        </div><!-- End .product-desc -->

                                        <div class="product-filters-container">
                                            <!-- <div class="product-single-filter">
                                                <label>Colors:</label>
                                                <ul class="config-swatch-list">
                                                    <li class="active">
                                                        <a href="#" style="background-color: #fff;"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" style="background-color: #ab6e6e;"></a>
                                                    </li>
                                                    
                                                </ul>
                                            </div> -->
                                            <!-- End .product-single-filter -->
                                        </div><!-- End .product-filters-container -->

                                        <div class="product-action product-all-icons">
                                            <div class="product-single-qty">
                                      
                                            </div><!-- End .product-single-qty -->
                                            <a class="paction add-cart" @click="addToBucket(product)"><span>Add to Cart</span></a>
                                        </div><!-- End .product-action -->

                                    </div><!-- End .product-single-details -->
                                </div><!-- End .col-lg-5 -->
                            </div><!-- End .row -->
                        </div><!-- End .product-single-container -->

                        <div class="product-single-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div class="product-desc-content">
                                        <p>{{ product.description }}</p>
                                    </div><!-- End .product-desc-content -->
                                </div><!-- End .tab-pane -->

                                
                            </div><!-- End .tab-content -->
                        </div><!-- End .product-single-tabs -->
                    </div><!-- End .col-lg-9 -->

                    <div class="sidebar-overlay"></div>
                    <div class="sidebar-toggle"><i class="icon-sliders"></i></div>
                    <aside class="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                        <div class="sidebar-wrapper">
                            <div class="widget widget-brand">
                                <a href="#">
                                    <img src="/static/images/product-brand.png" alt="brand name">
                                </a>
                            </div><!-- End .widget -->

                            <div class="widget widget-info">
                                <ul>
                                    <li>
                                        <i class="icon-shipping"></i>
                                        <h4>FREE<br>SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i class="icon-us-dollar"></i>
                                        <h4>100% MONEY<br>BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i class="icon-online-support"></i>
                                        <h4>ONLINE<br>SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div><!-- End .widget -->

                            <div class="widget widget-banner">
                                <div class="banner banner-image">
                                    <a href="#">
                                        <img src="/static/images/banner-sidebar.jpg" alt="Banner Desc">
                                    </a>
                                </div><!-- End .banner -->
                            </div><!-- End .widget -->

                            <div class="widget widget-featured">
                                <h3 class="widget-title">Featured Products</h3>
                                
                                <div class="widget-body">
                                    <div class="owl-carousel widget-featured-products">
                                        <div class="featured-col" v-for="prod in products">
                                            <div class="product product-sm">
                                                <figure class="product-image-container">
                                                    <a :href="`/product/${prod.productId}`" class="product-image">
                                                        <img :src="prod.firstProductImage" alt="product">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a :href="`/product/${prod.productId}`">{{ prod.firstProductName }}</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:80%"></span><!-- End .ratings -->
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">N{{ prod.firstProductPrice }}</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div><!-- End .product -->
                                            </div><!-- End .featured-col -->

                                        <!-- <div class="featured-col">
                                        
                                            

                                        </div> -->
                                        <!-- End .featured-col -->
                                    </div><!-- End .widget-featured-slider -->
                                </div><!-- End .widget-body -->
                            </div><!-- End .widget -->
                        </div>
                    </aside><!-- End .col-md-3 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="featured-section">
                <div class="container">
                    <h2 class="carousel-title">Featured Products</h2>

                    <div class="featured-products owl-carousel owl-theme owl-dots-top">
                        <div class="product" v-for="prod in products">
                            <figure class="product-image-container">
                                <a :href="`/product/${prod.productId}`" class="product-image">
                                    <img :src="prod.firstProductImage" alt="product">
                                </a>
                                <a href="#" class="btn-quickview">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:80%"></span><!-- End .ratings -->
                                    </div><!-- End .product-ratings -->
                                </div><!-- End .product-container -->
                                <h2 class="product-title">
                                    <a :href="`/product/${prod.productId}`">{{ prod.firstProductName }}</a>
                                </h2>
                                <div class="price-box">
                                    <span class="product-price">N{{ prod.firstProductPrice }}</span>
                                </div><!-- End .price-box -->

                                <div class="product-action">
                                    <a class="paction add-cart" @click="addToCart(prod)"><span>Add to Cart</span></a>
                                  

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
import { getProducts } from '../../../config'
import { featuredProducts } from '../../../config'
export default {
    data() {
        return {
            product: {},
            products: {},
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
    created() {
        this.getproductByID();
        this.getFeaturedProducts();
    },
    methods: {
         getproductByID() {
                this.$http.get(getProducts + this.$route.params.id).then(response => {
                    this.product = response.data
                })
                    .catch((err) => {

                        this.errors = err.data

                    })
            },
             getFeaturedProducts() {
            this.$http.get(featuredProducts + this.$route.params.categoryId)
            .then(response => {
                this.products = response.data
            })
            .catch(err => {
                this.errors = err.data
            });
        },
        
           addToCart(prod) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            if(cart.length === 0){
                let item = {
                    id: prod.productId,
                    name: prod.firstProductName,
                    price: prod.firstProductPrice,
                    subtotal: prod.firstProductPrice * 1,
                    qty: 1,
                    image: prod.firstProductImage
                }
                cart.push(item);
                this.$store.commit('setCart', item);
                //convert javascript object to string
                localStorage.setItem('cart', JSON.stringify(cart));
               this.$router.push({path: '/cart'});
            }else{
                //if it is not a new addition to cart, get the item id that exist already
                let item = cart.find(item => {
                    return item.id === prod.productId;
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
                     id: prod.productId,
                    name: prod.firstProductName,
                    price: prod.firstProductPrice,
                    subtotal: prod.firstProductPrice * 1,
                    qty: 1,
                    image: prod.firstProductImage
                    };
                    cart.push(item);
                    this.$store.commit('setCart', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    this.$router.push({path: '/cart'});
                }
            }
       },
         addToBucket(product) {
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
