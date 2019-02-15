<template>
    <div>
        <!-- header -->
<header class="main-header">
    <div class="container_header">
        <div class="logo">
            <a href="#">
                <strong class="logo_icon">
                   MEEKS CLOTHING
                </strong>
                <span class="logo-default">
					MEEKS CLOTHING
						</span>
            </a>
        </div>
        <div class="right_detail">
            <div class="row row d-flex align-items-center min-h pos-md-r">
                <div class="col-xl-5 col-3 search_col ">
                    <div class="top_function d-md-flex align-items-md-center">
                        <div class="icon_menu">
                            <a href="#" class="menu-toggler sidebar-toggler">
                                <i class="icon-menu"></i>
                            </a>
                        </div>
                        <div class="search">
                            <a id="toggle_res_search" data-toggle="collapse" data-target="#search_form" class="res-only-view collapsed" href="javascript:void(0);"
                               aria-expanded="false">
                                <i class=" icon-magnifier"></i>
                            </a>
                            <form id="search_form" role="search" class="search-form collapse" action="#">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <button type="button" class="btn" data-target="#search_form" data-toggle="collapse" aria-label="Close">
                                        <i class="ion-android-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-9 d-flex justify-content-end">
                    <div class="right_bar_top d-flex align-items-center">
                        <div class="fullscreen-btn">
                            <a href="javascript:;">
                                <i class="icon-size-fullscreen"></i>
                            </a>
                        </div>
                       
                      
                       
                        <!-- Dropdown_User -->
                        <div class="dropdown dropdown-user">
                            <a href="" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="true">
                                <img class="img-circle pro_pic" src="" alt="">
                                <span class="username"> {{ isLoggedIn.full_name }} </span>
                                <i class="fa fa-angle-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-default">
                                <li>
                                    <a href="#">
                                        <i class="fa fa-user"></i> Profile </a>
                                </li>
                                
                                <li>
                                    <a @click="logout" class="logout" v-if="isLoggedIn">
                                        <i class="fa fa-sign-out"></i> Log Out </a>                            
                                </li>
                            </ul>
                        </div>
                        <!-- Dropdown_User_End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- header_End -->
    </div>
</template>



<script>
export default {
    data() {
        return {
        }
    },
     
    computed: {
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

