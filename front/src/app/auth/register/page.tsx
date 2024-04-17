'use client'
import { postRegister } from "@/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'

/*import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Register - TechBox",
    description: "Join the TechBox community today! Register for an account to unlock exclusive benefits and stay updated on the latest in tech trends. Signing up is quick and easy - simply fill out the required information and create your personalized account. As a TechBox member, you'll gain access to special offers, personalized recommendations, and much more. Don't miss out on the opportunity to be part of something extraordinary. Sign up now and embark on your journey with TechBox!",
  };
*/
export default function Register() {
    const router = useRouter()
    const [userDataRegister, setUserDataRegister] = useState({
        email:"",
        password:"",
        name:"",
        address:"",
        phone:""
    })

    const handleOnChange = (event:any) =>{
        const {name, value} = event.target;
        setUserDataRegister({ ...userDataRegister, [name] : value})
    }
    const handleSubmit = async (event:any) =>{
        event.preventDefault()
        try{const response = await postRegister(userDataRegister);
            
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Successfully registered ${userDataRegister.email}`,
            showConfirmButton: false,
            timer: 1500
          });
          router.push('/auth/login') 
        }
        catch(error){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${userDataRegister.email} 
                Could not register`,
                showConfirmButton: false,
                timer: 1500
              });
                throw error;
        }
    }

    return(
        <form className="w-2/3 mx-auto m-10 max-md:w-full p-10">
            <h1 className="text-4xl text-center m-4">Form Register</h1>
            <h4 className="text-xl text-center m-4"> Already have an account? <Link className="text-sky-600 font-semibold hover:border-sky-600 hover:border-b-2" href="auth/login">Sign in</Link></h4>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-text dark:text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="email"
            value={userDataRegister.email}
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="password"
            value={userDataRegister.password}
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="name"
            value={userDataRegister.name}
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your address</label>
            <input type="text" id="address" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="address"
            value={userDataRegister.address}
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your phone</label>
            <input type="number" id="phone" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="phone"
            value={userDataRegister.phone}
            />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            </div>
        </div>
        <button type="submit" className="text-text border border-border bg-terciary hover:scale-105 hover:bg-hoverButton font-medium rounded-lg text-lg px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Create personal account</button>
        </form>

    )

}