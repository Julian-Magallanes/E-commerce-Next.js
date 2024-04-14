

import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_TOKEN_AUTHORIZATION

async function getOrders() {
    try{
    const response = await axios.get(`${apiUrl}/users/orders`, {
        headers:{
            Authorization:token,
        }
    });
    return response.data;
    }catch (error){
        throw error;
}
} 
export {
    getOrders
}