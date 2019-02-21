<template>
    <div>
        
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/home"><i class="icon-home"></i></a></li>
                        <!-- <li class="breadcrumb-item"><a href="#">Electronics</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Headsets</li> -->
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
                                            <div class="product-item" v-for="product in productBycategory.docs" :key="product._id">
                                                <img class="product-single-image" :src="product.image" :data-zoom-image="product.image"/>
                                            </div>
                                        </div>
                                        <!-- End .product-single-carousel -->
                                        <span class="prod-full-screen">
                                            <i class="icon-plus"></i>
                                        </span>
                                    </div>
                                    <div class="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                         <div class="col-3 owl-dot" v-for="product in productBycategory.docs" :key="product._id">
                                            <img :src="product.image"/>
                                          <span><b>{{ product.name }}</b></span>
                                        </div>


         
                                       
                                    </div>
                                </div><!-- End .col-lg -7 -->

                                <div class="col-lg-5 col-md-6">
                                    <div class="product-single-details">
                                        <h1 class="product-title"></h1>

                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style="width:60%"></span><!-- End .ratings -->
                                            </div><!-- End .product-ratings -->

                                            <!-- <a href="#" class="rating-link">( 6 Reviews )</a> -->
                                        </div><!-- End .product-container -->

                                        <div class="price-box">
                                            <span class="old-price"></span>
                                            <span class="product-price"></span>
                                        </div><!-- End .price-box -->

                                        <div class="product-desc">
                                            <p></p>
                                        </div><!-- End .product-desc -->

                                        <div class="product-filters-container">
                                            <div class="product-single-filter">
                                                <label>Colors:</label>
                                                <ul class="config-swatch-list">
                                                    <li class="active">
                                                        <a href="#" style="background-color: #fff;"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" style="background-color: #ab6e6e;"></a>
                                                    </li>
                                                    
                                                </ul>
                                            </div><!-- End .product-single-filter -->
                                        </div><!-- End .product-filters-container -->

                                        <div class="product-action product-all-icons">
                                            <div class="product-single-qty">
                                             <button @click="increment()">+</button>
                               <span></span>
                                         <button @click="decrement()">-</button>
                                            </div><!-- End .product-single-qty -->
                                            <a class="paction add-cart" @click="addToCart()"><span>Add to Cart</span></a>
                                           
                                        </div><!-- End .product-action -->

                                      
                                    </div><!-- End .product-single-details -->
                                </div><!-- End .col-lg-5 -->
                            </div><!-- End .row -->
                        </div><!-- End .product-single-container -->

<div class="row">
    <div class="col-md-8">
        <nav>
            <ul class="pagination">
                <li class="page-item" v-bind:class="{disabled:!pagination.first_link}"><a href="#" class="page-link" @click="getproductByCategory(pagination.first_link)">&laquo;</a></li>
                <li class="page-item" v-bind:class="{disabled:!pagination.prev_link}"><a href="#" class="page-link" @click="getproductByCategory(pagination.prev_link)">&lt;</a></li>
                <li v-for="n in pagination.last_page" v-bind:key="n" class="page-item" v-bind:class="{active:!pagination.current_page == n}"><a href="#" class="page-link" @click="getproductByCategory(pagination.path_page + n)">{{ n }}</a></li>
                <li class="page-item" v-bind:class="{disabled:!pagination.next_link}"><a href="#" class="page-link" @click="getproductByCategory(pagination.next_link)">&gt;</a></li>
                <li class="page-item" v-bind:class="{disabled:!pagination.last_link}"><a href="#" class="page-link" @click="getproductByCategory(pagination.last_link)"></a></li>
            </ul>
        </nav>
    </div>

     <!-- <div class="col-md-4">
         Page:{{ pagination.from_page}} - {{ pagination.to_page }}
         Total: {{ pagination.total_page }}
    </div> -->
</div>

                               <!-- <div class="pagination">
            <button class="btn btn-default" @click="getproductByCategory(pagination.prev_page_url)"
                    :disabled="!pagination.prev_page_url">
                Previous
            </button>
            <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
            <button class="btn btn-default" @click="getproductByCategory(pagination.next_page_url)"
                    :disabled="!pagination.next_page_url">Next
            </button>
        </div> -->


                        <div class="product-single-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div class="product-desc-content">
                                        <p></p>
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
                                        <div class="featured-col" v-for="product in products">
                                            <div class="product product-sm">
                                                <figure class="product-image-container">
                                                    <a :href="`/product/category/${product.productId}`" class="product-image">
                                                        <img :src="product.firstProductImage" alt="product">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a :href="`/product/category/${product.productId}`">{{ product.firstProductName }}</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:80%"></span><!-- End .ratings -->
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">N{{ product.firstProductPrice }}</span>
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
                        <div class="product" v-for="product in products">
                            <figure class="product-image-container">
                                 <a :href="`/product/${product.productId}`" class="product-image">
                                        <img :src="product.firstProductImage" alt="product" width="244px" height="270px">
                                </a>
                                <a :href="`/product/${product.productId}`" class="btn-quickview">Quick View</a>
                            </figure>
                            <div class="product-details">
                                 <h2 class="product-title">
                                        <a :href="`/product/${product.productId}`">{{ product.firstProductName }}</a>
                                    </h2>
                                    <div class="price-box">
                                        <span class="product-price">N{{ product.firstProductPrice }}</span>
                                    </div><!-- End .price-box -->


                                <div class="product-action">
                                 <a class="paction add-cart" @click="addToCart(product)"><span>Add to Cart</span></a>
                                </div><!-- End .product-action -->
                            </div><!-- End .product-details -->
                        </div><!-- End .product -->

                        

                      

                    </div><!-- End .featured-proucts -->
                </div><!-- End .container -->
            </div><!-- End .featured-section -->
        </main><!-- End .main -->
    </div>
</template>
<style lang="css" scoped>
    @import "/static/css/_all-skins.css";
    @import "/static/css/master_style.css";
    .bg-white{
      color: red;  
    }
    .error {
  margin: 0px;
  color: #C03943;
}
</style>

<script>
import { featuredProducts } from '../../../config'
import { productsByCategory } from '../../../config'
export default {
    data() {
        return {
            productBycategory: {},
            products: {},
            errors: {},
            pagination: {}
        
            
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
        this.getproductByCategory();
        this.getFeaturedProducts();
    },
    methods: {
          getproductByCategory() {
                this.$http.get(productsByCategory + this.$route.params.categoryId).then((response) => {
                    this.productBycategory = response.data;
                    this.pagination = {
                        current_page: response.meta.current_page,
                        last_page: response.meta.last_page,
                        from_page: response.meta.from_page,
                        to_page: response.meta.to_page,
                        total_page: response.meta.total_page,
                        path_page: response.meta.path+"?page=",
                        first_link: response.links.first,
                        last_link: response.links.last,
                        prev_link: response.links.prev,
                        next_link: response.links.next
                    }
                });

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
             addToCart(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            //for new addition to cart
            if(cart.length === 0){
                let item = {
                    id: product.productId,
                    name: product.firstProductName,
                    price: product.firstProductPrice,
                    subtotal: product.firstProductPrice * 1,
                    qty: 1,
                    image: product.firstProductImage
                }
                cart.push(item);
                this.$store.commit('setCart', item);
                //convert javascript object to string
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location = '/cart'
            }else{
                //if it is not a new addition to cart, get the item id that exist already
                let item = cart.find(item => {
                    return item.id === product.productId;
                });
                // if we got the item already which already is in the cart
                if(item){
                    item.qty++;
                    item.subtotal = item.price * item.qty
                    this.$store.commit('setQuantity', item);
                    this.$store.commit('setPrice', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    window.location = '/cart'
                }else{
                    let item = {
                     id: product.productId,
                    name: product.firstProductName,
                    price: product.firstProductPrice,
                    subtotal: product.firstProductPrice * 1,
                    qty: 1,
                    image: product.firstProductImage
                    };
                    cart.push(item);
                    this.$store.commit('setCart', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    window.location = '/cart'
                }
            }
       },
    
    }
}
</script>
