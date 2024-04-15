import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_TOKEN_AUTHORIZATION

async function postOrders(products:number[]) {
    try{
    const response = await axios.post(`${apiUrl}/orders`, 
        {products},{
        headers:{
            Authorization:token,
        }
    }
    );
    return response.data;
    }catch (error){
        throw error;
}
} 
export {
    postOrders
}