import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_TOKEN_AUTHORIZATION
export interface UserData {
    email: string;
    password: string;
}
async function postLogin(userData:UserData) {
    try{
    const response = await axios.post(`${apiUrl}/users/login`, 
    userData,
    {
        headers:{
            "Content-Type": "application/json"
        },

    }
);
    //localStorage.setItem("userToken", response.data.token)
    console.log(response)
    return response.data;
    }catch (error){
        console.log(error)
        throw error;
}
} 

async function postRegister() {
    try{
    const response = await axios.post(`${apiUrl}/users/register`, 
        
    );
    return response.data;
    }catch (error){
        throw error;
}
} 
export {
    postLogin,
    postRegister
}