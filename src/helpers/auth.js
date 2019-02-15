 import axios from 'axios'
 
export function login(credentials){
	return new Promise((res,rej)=>{
		axios.post("http://localhost:3000/user/login",credentials)
		.then((response)=>{
			res(response.data)
		})
		.catch((err)=>{
			rej("Incorrect Login credentials")
		})
	})
}

export function getLocalUser(){
	const userStr = localStorage.getItem("user");
	if(!userStr){
		return null;
	}

    return JSON.parse(userStr);
    
    
    
}

