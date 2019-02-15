import { getLocalUser } from '../helpers/auth';
const user = getLocalUser();
export default{
	state:{
		currentUser:user,
		isLoggedIn:!!user,
		loading:false,
		authErr:null,
		message:'',
		cart: JSON.parse(localStorage.getItem('cart')) || [],
		charge: {}
	},
	getters:{
    currentUser(state){
			return state.currentUser;
    },
    isLoggedIn(state){
			return state.isLoggedIn;
		},
	isLoading(state){
			return state.loading;
		},
	  authError(state){
			return state.authErr;
		},
		getMessage(state){
			return state.message;
    },
		getCart(state) {
			return state.cart;
		},
		getCharge(state) {
			return state.charge;
		},
		getShipping(state){
			return state.shipping
		}
	},
	mutations:{
		login(state){
			state.loading = true;
			state.authErr = null;
		},
		signin(state){
			state.loading = true;
			state.authErr = null;
		},
		loginSuccess(state,payload){
			state.authErr = null;
			state.isLoggedIn = true;
			state.loading = false;
			state.message = "Howdy! You have been Logged in...";
			state.currentUser = Object.assign({},payload.user,{token:payload.token});

			localStorage.setItem("user",JSON.stringify(state.currentUser));
		},
		loginFailed(state,payload){
			state.message="Invalid Credentials"
			state.loading = false;
			state.authErr = payload.error;
		},

    logout(state){
			state.message = "You have been Logged out...";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
			state.isLoggedIn = false;
			state.currentUser = null;
		},
		setAuthError(state,payload){
			state.authErr = payload;
    },
		setCart: (state, payload) => {
			state.cart.push(payload);
		},
		setQuantity: (state,payload)  => {
			let item = state.cart.find(product => {
				return product.id === payload.id
			});
			item.qty = payload.qty;
			
		},
		setPrice: (state,payload) => {
			let item = state.cart.find(product => {
				return product.id === payload.id
			});
			item.subtotal = payload.subtotal;
		},
		removeItem: (state,payload) => {
			let item = state.cart.find(product => {
				return product.id === payload.id
			});
			localStorage.removeItem(item)
		},
		
		setCharge: (state, payload) => {
			state.charge = payload;
		},
		clearCart(state){
			localStorage.removeItem("cart");
		},
		setShipping: (state, payload) => {
			state.shipping.push(payload);
		}
	},
	actions:{
		login(context){
			context.commit("login");
		},
		register(context){
			context.commit("register");
		},
		signin(context){
			context.commit("signin");
		},
		signup(context){
			context.commit("signup");
		},
    logout(context){
			context.commit("logout");
	},
	clearCart(context){
		context.commit("clearCart");
}
	
}
}