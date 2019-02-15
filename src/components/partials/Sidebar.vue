<template>
        <!-- Content_right -->
    <div class="side_bar scroll_auto">
        <div class="user-panel">
            <div class="user_image">
                <img src="/static/images/admin/about-1.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="info">
                <p>
                   {{ isLoggedIn.full_name }}
                </p>
                <a href="#">
                    <i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <ul id="dc_accordion" class="sidebar-menu tree">
             <li class="menu_sub">
                <router-link to="/profile"> <i class="fa fa-home"></i>Dashboard</router-link>
            </li>
            <li class="menu_sub">
                <router-link to="/add-collections"> <i class="fa fa-pie-chart"></i>Add Collections</router-link>
            </li>
             <li class="menu_sub">
                <router-link to="/add-categories"> <i class="fa fa-pie-chart"></i>Add Categories</router-link>
            </li>
             <li class="menu_sub">
                <router-link to="/add-products"> <i class="fa fa-pie-chart"></i>Add Products</router-link>
            </li>

              <li class="menu_sub">
                <router-link to="/all-orders"> <i class="fa fa-pie-chart"></i>View Orders</router-link>
            </li>

             <li class="menu_sub">
                 <a @click="logout" v-if="isLoggedIn"><i class="fa fa-sign-out"></i> Log Out </a>                           
                                </li>
          
          
        </ul>
    </div>
<!--left sidebar end-->
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
     computed : {
      isLoggedIn : function(){ return this.$store.getters.currentUser}
    },
   
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      }
    }
}
</script>
