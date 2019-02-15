<template>
    <div>
     <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index-2.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Forgot Password</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="heading mb-4">
                    <h2 class="title">Reset Password</h2>
                    <p>Please enter your email address below to receive a password reset link.</p>
                </div><!-- End .heading -->

                <form action="#">
                    <div class="form-group required-field">
                        <label for="reset-email">Email</label>
                        <input type="email" class="form-control" id="reset-email" name="reset-email" required>
                    </div><!-- End .form-group -->

                    <div class="form-footer">
                        <button type="submit" class="btn btn-primary">Reset My Password</button>
                    </div><!-- End .form-footer -->
                </form>
            </div><!-- End .container -->

            <div class="mb-10"></div><!-- margin -->
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
                          this.$router.push('/auth/login')
                        })
                    .catch(err => {
                       this.loaded = true ;
                      //console.log(err.response.data)
                      this.errors = err.response.data || {};
                    });
                }
            },
            resend(){
                this.$http.post('http://localhost:3000/user/resend',{email: this.adminData.email})
                .then(data => {
                       alert('    We sent a verification email to you. Please check your email to confirm your account and complete your account creation process.')
                        })
                    .catch(err => {
                        this.errors = err.response.data || {};
                    });
            }
        }
     
}
</script>

