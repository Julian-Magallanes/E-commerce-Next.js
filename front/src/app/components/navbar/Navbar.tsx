'use client'

import Cart_icon from "./cart_icon"
import Login_icon from "./login_icon"
import Logo from "./logo"
import Menu from "./menu"
import SearchPages from "./searchPages"
import SearchBar from "./searchbar"

const Navbar: React.FC = (): React.ReactElement => {
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
                <Login_icon/>
                </div>
            <Menu/>
            </div>
        </div>
    )
}
export default Navbar