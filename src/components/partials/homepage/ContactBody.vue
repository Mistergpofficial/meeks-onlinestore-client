<template>
       <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/home"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <!-- <div id="map"></div> -->
                <!-- End #map -->
                
                <div id="map"></div>

                <div class="row">
                    <div class="col-md-8">
                        <h2 class="light-title">Write <strong>Us</strong></h2>
                                  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.msg">
		            			{{ errors.msg }}<br/>
                    			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="submitted">
                                   Mail Sent
		            			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		            			  <span aria-hidden="true">&times;</span>
		            			</button>

		            		</div>
                        <form action="#" @submit.prevent="postContact" @keydown="clear($event.target.name)">
                            <div class="form-group required-field">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" v-model="name" name="name" >
                            </div><!-- End .form-group -->

                            <div class="form-group required-field">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" v-model="email" name="email" >
                            </div><!-- End .form-group -->

                            <div class="form-group required-field">
                                <label for="phone">Phone Number</label>
                                <input type="tel" class="form-control" id="phone" v-model="phone" name="phone">
                            </div><!-- End .form-group -->

                            <div class="form-group required-field">
                                <label for="bodyMessage">What’s on your mind?</label>
                                <textarea cols="30" rows="5" id="bodyMessage" class="form-control" v-model="bodyMessage" name="bodyMessage"></textarea>
                            </div><!-- End .form-group -->

                            <div class="form-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div><!-- End .form-footer -->
                        </form>
                    </div><!-- End .col-md-8 -->

                    <div class="col-md-4">
                        <h2 class="light-title">Contact <strong>Details</strong></h2>

                        <div class="contact-info">
                            <div>
                                <i class="fa fa-phone"></i>
                                <p><a href="tel:">+(234) 7088510224</a></p>
                                <p><a href="tel:">+(234) 7084756925</a></p>
                            </div>
                            <div>
                                <i class="fa fa-mail-reply"></i>
                                <p><a href="mailto:meeks.clothing@yahoo.com">meeks.clothing@yahoo.com</a></p>
                            </div>
                            <div class="social-icons">
                                        <a :href="`https://www.facebook.com/meeks.clothing/?ref=bookmarks`" class="social-icon" target="_blank"><i class="fa fa-facebook"></i></a>
                                        <a :href="`https://twitter.com/ClothingMeeks`" class="social-icon" target="_blank"><i class="fa fa-twitter"></i></a>
                                        <a :href="`https://www.instagram.com/meeks__clothing/`" class="social-icon" target="_blank"><i class="fa fa-instagram"></i></a>
                                    </div><!-- End .social-icons -->
                        </div><!-- End .contact-info -->
                    </div><!-- End .col-md-4 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-8"></div><!-- margin -->
        </main><!-- End .main -->
</template>

<style scoped>
    #myMap {
    height:300px;
    width: 100%;
   }
</style>

<script>
import { addContact } from '../../../config'
export default {
    
    data() {
        return {
			map:"",
            mapOptions:{} ,
            name: '',
            email: '',
            phone: '',
            bodyMessage: '',
            errors: {},
            submitted: false
        }
    },
    mounted: function() {
        this.initMap();
  },
  methods:{
			initMap: function(){
				this.mapOptions = {
					center: new google.maps.LatLng(6.5439, 3.2797),
					zoom: 10,
					mapTypeId: 'roadmap'
				}
				this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
            },
            postContact() {
            this.$http.post(addContact, {
                name: this.name,
                email: this.email,
                phone: this.phone,
                bodyMessage: this.bodyMessage

            })
            .then(response => {
                 this.submitted = true;
            })
            .catch(err => {
                //console.log(err.response.data)
                this.errors = err.response.data || {}
            });
        },
         clear(){
                this.errors = false;
                this.success = false;
                this.message = '';
                clearTimeout(this.errorTimeout);
                clearTimeout(this.successTimeout);
            },
    }
        
}
</script>
