<template>
    <div>
        <div class="container">
         <div class="product-comparison">
        <div>
        <div class="row">
        <div class="col-md-12">
  <h2 class="heading-title">Cancel your Order</h2>
       <div class="alert alert-success" v-if="success">
        <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
        Order Cancellation Sent
       </div>

    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.msg">
  {{ errors.msg }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
    </div>

  <span class="title-tag inner-top-ss">Please enter your Order ID in the box below and press Enter. This was given to you on your receipt and in the confirmation email you should have received. </span>
  <form @submit.prevent="cancel" @keydown="clear($event.target.name)" class="register-form outer-top-xs" role="form">
    <div class="form-group">
        <label class="info-title" for="exampleOrderId1">Order ID</label>
        <input type="text" name="uniqueId" class="form-control unicase-form-control text-input" id="exampleOrderId1" v-model="details.uniqueId" >
    </div>
      <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Cancel</button>
  </form> 
</div>      </div><!-- /.row -->
      </div>
            </div>
      </div>
    </div>
</template>

<style lang="css" scoped>
 @import "/static/css/main.css";
 .bg-white{
      color: red;  
    }
</style>


<script>
 import {allOrders} from '../../../config'
import {cancelOrder} from '../../../config'
export default {
    data() {
        return {
          details: {
              uniqueId: ''
              },
          errors: {},
          success: false,
        }
    },
    created(){
      
    },
    computed : {
       isLoggedIn : function(){ return this.$store.getters.currentUser},
    },
    methods: {
        cancel(){
          this.$http.patch(cancelOrder , this.details)
          .then(data => {
                        this.success = true;
                        this.details = {};
          })
          .catch(err => {
             // console.log(err.response)
                this.errors = err.response.data || {}
          });
      },
       clear(){
                this.errors = false;
            },
    }
}
</script>





