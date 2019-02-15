<template>
<div class="wrapper">
<app-header></app-header>
<!-- Content_right -->
    <div class="container_full">
  <app-sidebar></app-sidebar>
    <!--main contents start-->
        <main class="content_wrapper">
            <!--page title start-->
            <div class="page-heading">
                <div class="container-fluid">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">

                        </div>
                        <div class="col-md-6 justify-content-md-end d-md-flex">
                            <div class="breadcrumb_nav">
                                <ol class="breadcrumb">
                                    <li>
                                        <i class="fa fa-home"></i>
                                        <a class="parent-item" href="/profile">Home</a>
                                        <i class="fa fa-angle-right"></i>
                                    </li>
                                    <li class="active">
                                        Basic Input
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--page title end-->


            <div class="container-fluid">
                <!-- state start-->
                <div class="row">
                    <div class=" col-md-6">
                        <div class="card card-shadow mb-4">
                        </div>
                        <div class="card card-shadow mb-4">
                            <div class="card-header">
                                <div class="card-title">
                                    Add New Categories
                                </div>
                            </div>
                            <div class="card-body">
                                  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.length > 0" >
		            			{{ errors[0] }}<br/>{{ errors[1] }}
		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="submitted">
                                    New Categories Added Successfully
		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                                <form @submit.prevent="add" @keydown="clear($event.target.name)">
                                     <div class="form-group">
                                        <label for="collectionName"> Group</label>
                                        <select class="form-control" name="groupId" v-model="details.groupId">
                                 <!-- <option value="0">Choose a group * -</option> -->
                                <option v-for="group in groups.groupsArray" :value="group._id">{{ group.name }}</option>
                            </select>
                                    </div>
                                <div class="form-group">
                                        <label for="collectionName"> Name</label>
                                        <input type="text" v-model="details.name" class="form-control form-control-square" id="collectionName" name="name">
                                    </div>
                                    <div class="text-center mb-4 mt-4">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- state end-->
            </div>

        </main>
        <!--main contents end-->

    </div>
    <!-- Content_right_End -->
    <!-- Footer -->
     <app-footer></app-footer>
    <!-- Footer_End -->
</div>
</template>



<script>
  import Header from "../partials/Header.vue";
  import Sidebar from '../partials/Sidebar.vue';
  import Footer from '../partials/Footer.vue'
   import {addCategories} from '../../config'
    import {getGroups} from '../../config'
export default {
    data() {
        return {
           details: {
                name: "",
                groupId: ''
           },
           errors: {},
           submitted: false,
          groups: {},
        }
    },
     components: {
          'app-header': Header ,
          'app-sidebar': Sidebar,
          'app-footer': Footer
      },
    computed: {
        isLoggedIn : function(){ return this.$store.getters.currentUser}
       },
      created(){
         this.getGroups (); 
        },
       
    
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      },
      add() {
          this.$http.post(addCategories, this.details, {
               headers:{
						"Authorization":"Bearer "+ this.$store.state.currentUser.token 
					}
          }).then(data =>{
              this.submitted = true;
              this.details = ""
          })
          .catch(err => {
              this.errors = err.response.data || {};
             // this.errors = err.response.data[0]
          });

      },
       clear(){
                        this.errors = false;
                        this.success = false;
                        this.message = '';
                        clearTimeout(this.errorTimeout);
                        clearTimeout(this.successTimeout);
                    },
            
      getGroups() {
                this.$http.get(getGroups, {
              headers:{
						"Authorization":"Bearer "+ this.$store.getters.currentUser.token
					}
          }).then(response =>{
              this.groups = response.data
          })
          
      }
    }

}
</script>

<style lang="css" scoped>
 @import "/static/css/admin/bootstrap.min.css";
 @import "/static/css/admin/font-awesome.min.css";
 @import "/static/css/admin/ionicons.css";
 @import "/static/css/admin/simple-line-icons.css";
 @import "/static/css/admin/jquery.mCustomScrollbar.css";
 @import "/static/css/admin/style.css";
 @import "/static/css/admin/responsive.css";
 .bg-white{
      color: red;  
    }
</style>


