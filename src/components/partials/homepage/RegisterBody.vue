<template>
    <div>
      <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/home"><i class="icon-home"></i></a></li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-lg-9 order-lg-last dashboard-content">
                        <h2>Admin Register</h2>
                       
                                <div class="form-group" >
                                 <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.msg">
		            			{{ errors.msg }}<br/>
                    			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                                </div> 
                                 <div class="alert alert-success" v-if="success">
                                   <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                   We sent a verification email to {{ adminData.email }}.<br/>
                                   Please check your email to confirm your account and complete your account creation process.<br/>
                                   <a @click="resend">Didn't get the email? Resend it</a>
                               </div>
                        <form @submit.prevent="adminSignup">
                                        
                            <div class="form-group required-field">
                                <label for="acc-email">Full Name</label>
                                 <input type="text" v-model="adminData.full_name" class="form-control" name="full_name"  >
                                 </div><!-- End .form-group -->

                            <div class="form-group required-field">
                                <label for="acc-email">Email</label>
                                 <input type="email" v-model="adminData.email" class="form-control" name="email"  >
                                 </div><!-- End .form-group -->

                                   <div class="form-group required-field">
                                <label for="acc-password">Password</label>
                                 <input type="password" v-model="adminData.password" class="form-control" name="password" >
                            </div><!-- End .form-group -->

                          
                            
                            <div class="form-group required-field">
                           <label for="acc-password">Are you Admin?</label>
                                <select v-model="adminData.is_admin" class="form-control">
                                    <option value=1>Yes</option>
                                    <option value=0>No</option>
                                </select>
                                  </div><!-- End .form-group -->

                                    <div class="form-group required-field">
                                <label for="acc-password">Country</label>
                                 <input type="text" v-model="adminData.country" class="form-control" name="country" >
                            </div><!-- End .form-group -->

                            
                            <div class="form-group required-field">
                                <label for="acc-password">State</label>
                                 <input type="text" v-model="adminData.state" class="form-control" name="state" >
                            </div><!-- End .form-group -->
                            
                            <div class="form-group required-field">
                                <label for="acc-password">City</label>
                                 <input type="text" v-model="adminData.city" class="form-control" name="city" >
                            </div><!-- End .form-group -->
                            
                            <div class="form-group required-field">
                                <label for="acc-password">Address</label>
                           <textarea cols="30" rows="5" id="bodyMessage" class="form-control" v-model="adminData.address" name="address"></textarea>
                                 </div><!-- End .form-group -->
                            
                            <div class="form-group required-field">
                                <label for="acc-password">Phone</label>
                                 <input type="text" v-model="adminData.phone" class="form-control" name="phone" >
                            </div><!-- End .form-group -->

                            

                            <div class="mb-2"></div><!-- margin -->

                            <div class="custom-control custom-checkbox">
                                   <p class="mt-5">Already have an account? <router-link to="/auth/login">Login Now</router-link>
                                    </p>
                            </div><!-- End .custom-checkbox -->

                            <div class="form-footer">
                                <div class="form-footer-right">
                                   <input type="submit" class="btn btn-primary" value="Register">
                                </div>
                            </div><!-- End .form-footer -->
                        </form>
                      
                    </div><!-- End .col-lg-9 -->

                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->
    </div>
</template>
<style lang="css" scoped>
    .bg-white{
      color: red;  
    }
    .error {
  margin: 0px;
  color: #C03943;
}
</style>


<script>
 import {regUrl} from '../../../config';
 import {resend} from '../../../config';
export default {
    data() {
        return {
            adminData: {
                full_name : '',
                email: '',
                password: '',
                country: '',
                state: '',
                city: '',
                address: '',
                phone: '',
                is_admin: null

            },
            errors: {},
            success: false,
            loaded: true,
        }
    },
    methods: {
        adminSignup(){
                if(this.loaded){
                    this.loaded = false;
                    this.success = false;
                    this.errors = {};
                    //  if(this.userData.is_admin != null || this.userData.is_admin == 1)
                    this.$http.post(regUrl, this.adminData)
                    .then(response => {
                       // this.userData = {};
                        this.loaded = true;
                        this.success = true;
                          this.$router.push({name: 'Login'})
                        })
                    .catch(err => {
                       this.loaded = true ;
                      //console.log(err.response.data)
                      this.errors = err.response.data || {};
                    });
                }
            },
            resend(){
                this.$http.post(resend, {email: this.adminData.email})
                .then(data => {
                       alert('We sent a verification email to you. Please check your email to confirm your account and complete your account creation process.')
                        })
                    .catch(err => {
                        this.errors = err.response.data || {};
                    });
            }
        }
     
}
</script>

