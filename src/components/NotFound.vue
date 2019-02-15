<template>
    <div>
  


            <div class="left_pre"></div>
            <div class="right_pre"></div>
            <div class="row m0 content">            
                <div class="circle">
                    <div class="red">
                        <div class="rotator">
                            <img src="images/curve.png" alt="">
                        </div>
                        <a href="#" class="logo"><img src="images/loading-img.png" alt=""></a>
                    </div>
                </div>
            </div>
        
        
       <app-header></app-header>
        <!--================End Footer Area =================-->
       
        
        <!--==========Error area==========-->
        <section class="error_area p_100">
            <div class="container">
                <div class="error_content">
                    <h3>404</h3>
                    <h4>This page is not be found</h4>
                    <p>Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous page or see our Help Center for more information</p>
                    <a class="blog_btn" href="/home">Back to Home Page</a>
                </div>
            </div>
        </section>
        <!--==========End Error area==========-->
        
        <!--================Footer Area =================-->
        <app-footer></app-footer>
        <!--================End Footer Area =================-->
        
        
        
        
    </div>
</template>



<style lang="css" scoped>
    @import "/static/css/error.css";
 
</style>

<script>
import Header from "./partials/homepage/Header.vue";
 import Footer from './partials/homepage/Footer.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
            'app-header': Header,
            'app-footer' : Footer
        }
}
</script>
