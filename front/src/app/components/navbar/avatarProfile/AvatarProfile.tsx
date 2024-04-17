import { useAuth } from "@/context/Context";
import Image from "next/image"
import { useState } from "react";

const AvatarProfile:React.FC=():React.ReactElement => {
    const auth = useAuth()
    const { logout } = auth || {};
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };

    return(
        <div>
            <button onClick={() => toggleDropdown()}>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1713303389/147144_t8emdw.png" alt="avatar profile" width={20} height={20} className="mx-5 w-8"/>
            </button>
            <ul className={`${!dropdownVisible ? "hidden" : "flex flex-col absolute z-10 top-14 right-10 p-5 bg-background w-30 items-center shadow-md rounded-lg"}`}>
                <li className="m-2 cursor-pointer border border-border hover:border hover:shadow-md duration-200 ease-in-out hover:border-font hover:font-bold bg-secondary rounded-md px-4"onClick={logout} >
                Logout
                </li>
            </ul>
        </div>
    )
}

export default AvatarProfile