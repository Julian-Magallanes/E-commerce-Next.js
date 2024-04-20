import { useAuth } from "@/context/Context";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AvatarProfile:React.FC=():React.ReactElement => {
    const router = useRouter();
    const auth = useAuth()
    const { logout } = auth || {};
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };

    const handleLogout = () =>{
        if(!logout){
            return
        }
        logout()
        router.push('/')
    }
    return(
        <div>
            <button onClick={() => toggleDropdown()}>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713303389/147144_t8emdw.png" alt="avatar profile" width={24} height={24} className="mx-5 duration-300 ease-in-out hover:scale-105"/>
            </button>
            <ul className={`${!dropdownVisible ? "hidden" : "flex flex-col absolute z-10 top-14 right-10 p-5 bg-background w-30 items-center shadow-md rounded-lg"}`}>
                <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4 w-28 text-center"onClick={handleLogout} >
                Logout
                </li>
                <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4  w-28 text-center" onClick={toggleDropdown}>
                    <Link href="/auth/dashboardUser">Dashboard</Link>
                </li>
                <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4  w-28 text-center"  onClick={toggleDropdown}>
                    <Link href="/orders">Orders</Link>
                </li>
            </ul>
        </div>
    )
}

export default AvatarProfile