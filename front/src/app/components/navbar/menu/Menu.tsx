'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Filter_search from "../../filter_search";
import { useAuth } from "@/context/Context";

const MenuIcon:React.FC=():React.ReactElement => {
    const auth = useAuth()
    const { token, logout } = auth || {};

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    const [dropdownVisibleCategories, setDropdownVisibleCategories] = useState(false);
    const [menuAnimationCategories, setMenuAnimationCategories] = useState(false);
    const toggleDropdownCategories = () => {
        setDropdownVisibleCategories(!dropdownVisibleCategories);
        setMenuAnimationCategories(!menuAnimationCategories);
    };
    const handleLogout = () =>{
        if(!logout){
            return
        }
        logout()
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    }
    return(
        <div className="md:hidden">
        <div className={"flex flex-col w-10 h-8 cursor-pointer"} onClick={() => toggleDropdown()}>
            <div className={`${"w-full h-1 bg-font m-1 duration-200"} ${menuAnimation ? "rotate-45 translate-y-2" : ''}`} ></div>
            <div className={`${"w-full h-1 bg-font m-1"} ${menuAnimation ? "hidden" : ''}`} ></div>
            <div className={`${"w-full h-1 bg-font m-1"} ${menuAnimation ? "-rotate-45 -translate-y-1" : ''}`}></div>
        </div>
        <ul className={`${!dropdownVisible ? "hidden" : "flex flex-col absolute z-10 top-16 right-0 p-10 bg-background w-screen items-center shadow-md"}`}>
            {token ?<div><li className="m-2 border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 text-center" onClick={() => handleLogout()}>
                Logout
            </li>
            <li className="m-2 mt-4 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4  w-28 text-center" onClick={() => toggleDropdown()}>
            <Link href="./auth/dashboardUser">Dashboard</Link>
            </li></div>:<li className="m-2 border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 w-28 text-center">
                <Link href={"/auth/login"} onClick={() => toggleDropdown()}>Login</Link>
            </li>}
            <li className="m-2 border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 w-28 text-center">
                <Link href={"/orders"} onClick={() => toggleDropdown()}>Orders</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold ">
                <Link href={"/"} onClick={() => toggleDropdown()}>Home</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/about"} onClick={() => toggleDropdown()}>About</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/products"} onClick={() => toggleDropdown()}>Products</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/contact"} onClick={() => toggleDropdown()}>Contact</Link>
            </li>
            <li className="flex items-center m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold sm:hidden" onClick={()=>toggleDropdownCategories()}>
                <h4 className="mr-2">Categories</h4>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713101932/Next/Vector_f0l5af.svg" alt="vectoIcon" width={16} height={26} className={`${""} ${menuAnimationCategories ? "-rotate-90 " : ''}`}/>
            </li>
            <div className={`${!dropdownVisibleCategories ? "hidden" : "flex"}`}>
                <Filter_search />
            </div>
        </ul>
        </div>
    )
}

export default MenuIcon