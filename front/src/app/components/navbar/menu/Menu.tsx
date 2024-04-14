import Link from "next/link";
import { useState } from "react";

const MenuIcon:React.FC=():React.ReactElement => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    return(
        <div className="md:hidden">
        <div className={"flex flex-col w-10 cursor-pointer"} onClick={() => toggleDropdown()}>
            <div className={`${"w-full h-1 bg-font m-1 duration-200"} ${menuAnimation ? "rotate-45 translate-y-2" : ''}`} ></div>
            <div className={`${"w-full h-1 bg-font m-1"} ${menuAnimation ? "hidden" : ''}`} ></div>
            <div className={`${"w-full h-1 bg-font m-1"} ${menuAnimation ? "-rotate-45 -translate-y-1" : ''}`}></div>
        </div>
        <ul className={`${!dropdownVisible ? "hidden" : "flex flex-col absolute top-16 right-0 p-10 bg-background w-screen items-center"}`}>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold ">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/about"}>About</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/products"}>Products</Link>
            </li>
            <li className="m-2 border-b-2 border-transparent hover:border-b-2 duration-200 ease-in-out hover:border-font hover:font-bold">
                <Link href={"/contact"}>Contact</Link>
            </li>
        </ul>
        </div>
    )
}

export default MenuIcon