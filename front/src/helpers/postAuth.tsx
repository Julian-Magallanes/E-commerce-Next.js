import axios, { AxiosResponse } from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export interface UserData {
    email: string;
    password: string;
}
export interface UserDataRegister {
    email: string;
    password: string;
    name:string;
    address:string;
    phone:string;
}
async function postLogin(userData:UserData): Promise<any> {
    try{
    const response:AxiosResponse<any> = await axios.post(`${apiUrl}/users/login`, 
    userData,
    {
        headers:{
            "Content-Type": "application/json"
        },
    }
    );
    return response.data;
    }catch (error){
        console.log(error)
        throw error;
    }
} 

async function postRegister(userDataRegister:UserDataRegister): Promise<any> {
    try{
    const response:AxiosResponse<any> = await axios.post(`${apiUrl}/users/register`, 
    userDataRegister,  
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