import { IOrder } from "@/app/types";
import axios, { AxiosResponse } from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL


async function getOrders(token:string): Promise<IOrder[]> {
    
    try{
    const response: AxiosResponse<IOrder[]> = await axios.get(`${apiUrl}/users/orders`, {
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