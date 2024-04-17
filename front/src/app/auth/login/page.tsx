'use client'

import { postLogin } from "@/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useAuth } from "@/context/Context"

/*import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Login - TechBox",
    description: "Welcome to TechBox's login page. Log in to access your account and explore our exciting tech offerings. If you're already a member, simply enter your credentials to get started. Forgot your password? No worries! We've got you covered with our password recovery options. Join the TechBox community today and experience a world of innovation and convenience at your fingertips.",
  };*/

export default function Login() {
    const router = useRouter()
    const auth = useAuth()
    const { login } = auth || {};
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleOnChange = (event:any) =>{
        const {name, value} = event.target;
        setUserData({ ...userData, [name] : value})
    }
    const handleSubmit = async(event:any) =>{
        event.preventDefault()
        try{const response = await postLogin(userData);
            if (login) {
                login(response.token);
            }
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Welcome ${userData.email}`,
            showConfirmButton: false,
            timer: 1500
          });
          router.push('/') 
        }
        catch(error){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${userData.email} 
                is not registered`,
                showConfirmButton: false,
                timer: 1500
              });
                throw error;
        }
    }
    return(
        
        <form className="w-2/3 mx-auto m-10 max-md:w-full p-10">
            <h1 className="text-4xl text-center m-4">Form login</h1>
            <h4 className="text-xl text-center m-4"> Sign in to TechBox or <Link className="text-sky-600 font-semibold hover:border-sky-600 hover:border-b-2" href="/auth/register">create an account</Link></h4>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-text dark:text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="email"
            value={userData.email}
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="password"
            value={userData.password}
            />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            </div>
        </div>
        <button type="submit" className="text-text border border-border bg-terciary hover:scale-105 hover:bg-hoverButton font-medium rounded-lg text-lg px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Continue</button>
        </form>

    )

}