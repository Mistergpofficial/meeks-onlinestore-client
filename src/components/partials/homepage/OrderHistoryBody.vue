<template>
    <div>
        <div class="container">
         <div class="product-comparison">
        <div>
			<h1 class="page-title text-center heading-title">Order History</h1>
			<div class="table-responsive">
                <table class="table compare-table inner-top-vs">
					<tr>
						<th>Items</th>
						<td v-for="it in orders.orderArray" v-if="isLoggedIn.full_name === it.user.full_name">
							<div class="product" v-for="i in it.cart">
								<div class="product-image">
									<div class="image">
										<a href="detail.html">
										    <img alt="" :src="i.image">
										</a>
									</div>

                                    <div class="action">
										    <h3 class="name">Order ID: {{ it.uniqueId }}</h3>
										</div>

									<div class="product-info text-left">
										<h3 class="name">Name: {{ i.name }}</h3>
                                        <div class="action">
										    <h3 class="name" v-if="i.qty === 1">Quantity: {{ i.qty }} item</h3>
                                            <h3 class="name" v-else>Quantity: {{ i.qty }} items</h3>
										</div>
                                        <div class="action">
										    <h3 class="name">Price: N{{ i.price }}</h3>
										</div>
										<div class="action">
										    <h3 class="name">Subtotal: N{{ i.subtotal }}</h3>
										</div>
                                        <div class="action">
										    <h3 class="name">Date Ordered: {{ it.createdAt }}</h3>
										</div>
									</div>
								</div>
							</div>
                             <div class="action">
								<a class="lnk btn btn-primary" href="/order-cancelled">Cancel Order</a>
							</div>
						</td>

					</tr>


					

					

				</table>
			</div>
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
export default {
    data() {
        return {
          orders: {}  
        }
    },
    created(){
        this.getOrders();
    },
    computed : {
       isLoggedIn : function(){ return this.$store.getters.currentUser},
    },
    methods: {
         getOrders() {
                this.$http.get(allOrders, {
              headers:{
						"Authorization":"Bearer "+ this.$store.getters.currentUser.token
					}
          }).then(response =>{
              this.orders = response.data
          })
        }
    }
}
</script>





