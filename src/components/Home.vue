<template>
     <div class="page-wrapper">
          <app-header></app-header>
            <app-body></app-body>

        <app-footer></app-footer>
      

        <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

        <div class="mobile-menu-container">
            <div class="mobile-menu-wrapper">
                <span class="mobile-menu-close"><i class="icon-cancel"></i></span>
                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li class="active"><a href="/">Home</a></li>           
                        <li><a href="/contact">Contact Us</a></li>
                        
                    </ul>
                </nav><!-- End .mobile-nav -->

                <div class="social-icons">
                             <a :href="`https://www.facebook.com/meeks.clothing/?ref=bookmarks`" class="social-icon" target="_blank"><i class="fa fa-facebook"></i></a>
                                        <a :href="`https://twitter.com/ClothingMeeks`" class="social-icon" target="_blank"><i class="fa fa-twitter"></i></a>
                                        <a :href="`https://www.instagram.com/meeks__clothing/`" class="social-icon" target="_blank"><i class="fa fa-instagram"></i></a>
                              
                </div><!-- End .social-icons -->
            </div><!-- End .mobile-menu-wrapper -->
        </div><!-- End .mobile-menu-container -->

        <div class="newsletter-popup mfp-hide" id="newsletter-popup-form" style="background-image: url(assets/images/newsletter_popup_bg.jpg)">
            <div class="newsletter-popup-content">
                <img src="assets/images/logo-black.png" alt="Logo" class="logo-newsletter">
                <h2>BE THE FIRST TO KNOW</h2>
                <p>Subscribe to the Porto eCommerce newsletter to receive timely updates from your favorite products.</p>
                <form action="#">
                    <div class="input-group">
                        <input type="email" class="form-control" id="newsletter-email" name="newsletter-email" placeholder="Email address" required>
                        <input type="submit" class="btn" value="Go!">
                    </div><!-- End .from-group -->
                </form>
                <div class="newsletter-subscribe">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="1">
                            Don't show this popup again
                        </label>
                    </div>
                </div>
            </div><!-- End .newsletter-popup-content -->
        </div><!-- End .newsletter-popup -->

        <a id="scroll-top" href="#top" title="Top" role="button"><i class="icon-angle-up"></i></a>
    </div>
</template>


<script>
 import Header from "./partials/homepage/Header.vue";
 import Body from './partials/homepage/Body.vue';
 import Footer from './partials/homepage/Footer.vue'
  import {getGroups} from '../config'
  import {getCategories} from '../config'
  import { getProducts } from '../config'
export default {
    data() {
        return {
            products: {},
            groups: {},
            categories: {},
            errors: {}
        }
    },
    components: {
          'app-header': Header ,
          'app-body': Body,
          'app-footer': Footer
      },
    //  computed : {
    //   cartCount : function(){ return this.$store.getters.getCart},
    //   total () { 
    //       let cart = JSON.parse(localStorage.getItem('cart')) || [];
    //         //for new addition to cart
    //         if(cart.length > 0){
    //       return this.$store.getters.getCart.map(item => item.subtotal).reduce((total, amount)=> total + amount)
    //       }
    //   }
    // },
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
       
    }
}
</script>

