import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function postOrders(products:number[],token:any) {
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