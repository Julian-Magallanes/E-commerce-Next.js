'use client'
import { IRegister} from "@/app/types";
import { postRegister } from "@/helpers";
import { ValidateRegister } from "@/middleware";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

export default function Register() {
    const router = useRouter()
    const [userDataRegister, setUserDataRegister] = useState<IRegister>({
        email:"",
        password:"",
        passwordValidate:"",
        name:"",
        address:"",
        phone:""
    })
    const [errorDataRegister, setErrorDataRegister] = useState<IRegister>({
        email:"",
        password:"",
        passwordValidate:"",
        name:"",
        address:"",
        phone:""
    })

    useEffect(()=>{
        const errors = ValidateRegister(userDataRegister);
        setErrorDataRegister(errors)
    },[userDataRegister])

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
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.email}</p>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="password"
            value={userDataRegister.password}
            />
        </div>
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.password}</p>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="passwordValidate" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="passwordValidate"
            value={userDataRegister.passwordValidate}
            />
        </div>
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.passwordValidate}</p>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="name"
            value={userDataRegister.name}
            />
        </div>
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.name}</p>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your address</label>
            <input type="text" id="address" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="address"
            value={userDataRegister.address}
            />
        </div>
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.address}</p>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your phone</label>
            <input type="number" id="phone" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
            onChange={handleOnChange}
            name="phone"
            value={userDataRegister.phone}
            />
        </div>
        <p className="text-sm text-red-500 bold font-semibold">{errorDataRegister.phone}</p>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            </div>
        </div>
        <button type="submit" className="text-text border border-border bg-terciary hover:scale-105 hover:bg-hoverButton font-medium rounded-lg text-lg px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:hover:scale-100 disabled:bg-secondary" 
        onClick={handleSubmit}
        disabled={!!errorDataRegister.email || !!errorDataRegister.password || !!errorDataRegister.passwordValidate || !!errorDataRegister.name || !!errorDataRegister.phone || !!errorDataRegister.address}
        >Create personal account</button>
        </form>

    )

}