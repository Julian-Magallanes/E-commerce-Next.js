import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Login - TechBox",
    description: "Welcome to TechBox's login page. Log in to access your account and explore our exciting tech offerings. If you're already a member, simply enter your credentials to get started. Forgot your password? No worries! We've got you covered with our password recovery options. Join the TechBox community today and experience a world of innovation and convenience at your fingertips.",
  };

export default function Login() {
    return(
        
        <form className="w-2/3 mx-auto m-10 max-md:w-full p-10">
            <h1 className="text-4xl text-center m-4">Form login</h1>
            <h4 className="text-xl text-center m-4"> Sign in to eBay or <Link className="text-sky-600 font-semibold" href="/register">create an account</Link></h4>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-text dark:text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm  border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            </div>
        </div>
        <button type="submit" className="text-text border border-border bg-terciary hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
        </form>

    )

}