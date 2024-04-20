import Link from "next/link"
import { ButtonIcon } from "./Login_icon.styles"
import Image from "next/image"
import { useState } from "react";

const LoginIcon:React.FC =  ():React.ReactElement => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    return (
        <div>
            <ButtonIcon >
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/userIcon_k3vptu.svg" alt="LoginIcon" loading="lazy" width={20} height={20} className="mx-5 duration-300 ease-in-out hover:scale-105 w-auto h-auto "
                onClick={() => toggleDropdown()}
                />
            </ButtonIcon>
            <ul className={`${!dropdownVisible ? "hidden" : "flex flex-col absolute z-10 top-14 right-10 p-5 bg-background w-30 items-center shadow-md rounded-lg"}`}>
                    <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 w-24 text-center" >
                <Link href="/auth/login" onClick={() => toggleDropdown()}>
                Sign in
                </Link>
                </li>
                <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 w-24 text-center" >
                <Link href="/auth/register" onClick={() => toggleDropdown()}>
                Register
                </Link>
                </li>
            </ul>
        </div>
    )
}
export default LoginIcon