import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL


async function getOrders(token:any) {
    
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