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
                        <h2>Login</h2>
                         <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="authError">
		            			{{ authError }}

		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                        <form @submit.prevent="authenticate" method="post">
                           
                            <div class="form-group required-field">
                                <label for="acc-email">Email</label>
                                  <input type="email" v-model="form.email" class="form-control" name="email" placeholder="Email" value="">
                            </div><!-- End .form-group -->

                            <div class="form-group required-field">
                                <label for="acc-password">Password</label>
                                 <input type="password" v-model="form.password" class="form-control" name="password" placeholder="Password">
                            </div><!-- End .form-group -->

                            <div class="mb-2"></div><!-- margin -->

                            <div class="custom-control custom-checkbox">
                                   <p class="mt-5">Don't have an account? <router-link to="/account/register">Register Now</router-link>
                                    </p>
                            </div><!-- End .custom-checkbox -->
                            <div class="custom-control custom-checkbox">
                                  <router-link to="/reset-password">Forgot Password? </router-link>
                                    
                            </div><!-- End .custom-checkbox -->

                            <div class="form-footer">
                                <div class="form-footer-right">
                                   <button type="submit" class="btn btn-primary">Login</button>
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
import {login} from '../../../helpers/auth.js';
export default{
	data(){
		return{
			form:{
				email:'',
				password:''
			},
			error:null,
		};
	},
	methods:{
		authenticate(){
			this.$store.dispatch("login");

			login(this.$data.form)
			.then((res)=>{
                
               
                //console.log(is_admin)
                this.$store.commit("loginSuccess",res);
                 let is_admin = res.user.is_admin
                if(is_admin === 1){
                this.$router.push({path:'/profile'});
               // window.location = '/profile'
                    }else{
                //this.$router.push({path:'/home'})
                 window.location = '/home'
               
                    }
				
			})
			.catch((error)=>{
				this.$store.commit("loginFailed",{error});
			})
		}
    },
    computed:{
		authError(){
			return this.$store.getters.authError;
		},
		isLoading(){
			return this.$store.getters.isLoading;
		}
	},
	
}
</script>