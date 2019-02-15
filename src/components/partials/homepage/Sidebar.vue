<template>
    <div>
       <h2>PRODUCTS BY CATEGORIES</h2>
       <div class="side-menu-body">
           <ul v-for="category in categories.categoryArray" :key="category._id">
            <li><a :href="`/product/category/${category._id}`"><i class="icon-cat-shirt"></i>{{ category.name }}</a></li>
            </ul>
            <a href="#" class="btn btn-block btn-primary">HUGE SALE - <strong>70%</strong> Off</a>
            </div><!-- End .side-menu-body -->
                                
                          
    </div>
</template>
<script>
import {getCategories} from '../../config'
export default {
    data() {
        return {
           categories: {},
           errors: {}   
        }
    },
     computed : {
      isLoggedIn : function(){ return this.$store.getters.currentUser}
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
      }
    }
}
</script>
