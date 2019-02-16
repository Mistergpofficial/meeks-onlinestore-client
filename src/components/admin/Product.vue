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
                                    Add New Product
                                </div>
                            </div>
                            <div class="card-body">
                                  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.length > 0">
		            			{{ errors[0] }}<br/>
                                {{ errors[1] }}<br/>
                                {{ errors[2] }}<br/>
                                {{ errors[3] }}<br/>
                                {{ errors[4] }}<br/>
                                {{ errors[5] }}<br/>
                                {{ errors[6] }}<br/>
                                

		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="submitted">
                                    New Product Added Successfully
		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                                <form @submit.prevent="add" @keydown="clear($event.target.name)" enctype="multipart/form-data">
                                     <div class="form-group">
                                        <label for="collectionName"> Group</label>
                                        <select class="form-control" name="groupId" v-model="groupId">
                                 <!-- <option value="0">Choose a group * -</option> -->
                                <option v-for="group in groups.groupsArray" :value="group._id">{{ group.name }}</option>
                            </select>
                                    </div>

                                    <p>You selected {{ groupId }} </p>
                                    
                                    
                                      <div class="form-group" v-if="groupId === `5c6714421aa57700172d70a3`">
                                        <label for="collectionName"> Category</label>
                                        <select class="form-control" name="categoryId" v-model="categoryId" >
                                        <option v-for="category in categories.categoryArray" :value="category._id" v-if="category.groupId === `5c6714421aa57700172d70a3`">{{ category.name }}</option>
                                        </select>
                                    </div v-else>
                                     <div class="form-group" v-if="groupId === `5c6744f3770d310017973856`">
                                        <label for="collectionName"> Category</label>
                                        <select class="form-control" name="categoryId" v-model="categoryId" >
                                             <option v-for="category in categories.categoryArray" :value="category._id" v-if="category.groupId === `5c6744f3770d310017973856`">{{ category.name }}</option>   
                                        </select>
                                    </div v-else>
                                      <div class="form-group" v-if="groupId === `5c674511770d310017973858`">
                                        <label for="collectionName"> Category</label>
                                        <select class="form-control" name="categoryId" v-model="categoryId" >
                                             <option v-for="category in categories.categoryArray" :value="category._id" v-if="category.groupId === `5c674511770d310017973858`">{{ category.name }}</option>   
                                        </select>
                                    </div>
                                   
                                    
                                <div class="form-group">
                                        <label for="collectionName">Product Name</label>
                                        <input type="text" v-model="name" class="form-control form-control-square" id="collectionName" name="name">
                                    </div>
                                     <div class="form-group">
                                        <label for="collectionName">Product Quantity</label>
                                        <input type="text" v-model="quantity" class="form-control form-control-square" id="collectionName" name="quantity">
                                    </div>
                                     <div class="form-group">
                                        <label for="collectionName">Product Price</label>
                                        <input type="text" v-model="price" class="form-control form-control-square" id="collectionName" name="price">
                                    </div>
                                     <div class="form-group">
                                        <label for="collectionName">Product Description</label>
                                        <input type="text" v-model="description" class="form-control form-control-square" id="collectionName" name="description">
                                    </div>
                                     <div class="form-group">
                                           <div v-if="!image">
                                    <input name="image" class="form-control" type="file" accept="image/x-png,image/gif,image/jpeg" @change="onFileChange">
                                    </div>
                                    <div v-if="image">
                                            <img style="width: 100px; height: 100px; " :src="image" enctype="" />
                                            <button @click="removeImage" class="btn btn-primary">Remove Image</button>
                                        </div>
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
   import {getGroups} from '../../config'
  import {getCategories} from '../../config'
  import { addProducts } from '../../config'
export default {
    data() {
        return {
                name: "",
                groupId: '',
                categoryId: '',
                quantity: "",
                price: "",
                description: "",
                image: '',
                errors: {},
           submitted: false,
            groups: {},
            categories: {}
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
         this.getCategories();
        },
       
    
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
      },
       onFileChange(e){
                const files = e.target.files || e.dataTransfer.files;
                if(!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                const image = new Image();
                const reader = new FileReader();
                const vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                    //vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function () {
               // this.image = '';
                this.image = '';
            },
      add() {
          this.$http.post(addProducts,{
                        name: this.name,
                        groupId: this.groupId, 
                        categoryId: this.categoryId, 
                        quantity: this.quantity, 
                        price: this.price, 
                        image: this.image,
                        description: this.description} , {
              headers:{
						"Authorization":"Bearer "+ this.$store.state.currentUser.token 
					}
          }).then(response =>{
              this.submitted = true;
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
          
      },
       getCategories() {
                this.$http.get(getCategories, {
              headers:{
						"Authorization":"Bearer "+ this.$store.getters.currentUser.token
					}
          }).then(response =>{
              this.categories = response.data
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


