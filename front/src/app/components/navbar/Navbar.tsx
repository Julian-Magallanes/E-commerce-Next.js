'use client'

import { useState } from "react"
import Bag_icon from "./bag_icon"
import Cart_icon from "./cart_icon"
import Login_icon from "./login_icon"
import Logo from "./logo"
import Menu from "./menu"
import SearchPages from "./searchPages"
import SearchBar from "./searchbar"
import AvatarProfile from "./avatarProfile"
import { useAuth } from "@/context/Context"
const Navbar: React.FC = (): React.ReactElement => {
    const auth = useAuth()
    const { token } = auth || {};
    //const [token, setToken] = useState<string | null>(localStorage.getItem("userToken")?? null)
    return (
        <div className="flex h-16 bg-secondary content-between items-center border-border border-b pl-10 pr-10 shadow-md relative z-90 w-screen justify-between">
            <Logo/>
            <SearchPages/>
            <div className="flex max-md:hidden">
                <SearchBar/>
            </div>
            <div className="flex">
                <Cart_icon/>
                <div className="flex max-md:hidden">
                {token ? <AvatarProfile/>:<Login_icon/>}
                {token && <Bag_icon/>}
                </div>
            <Menu/>
            </div>
        </div>
    )
}
export default Navbar