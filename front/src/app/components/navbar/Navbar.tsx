'use client'

import Cart_icon from "./cart_icon"
import Login_icon from "./login_icon"
import Logo from "./logo"
import SearchPages from "./searchPages"
import SearchBar from "./searchbar"

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <div className="flex h-16 bg-secondary content-between items-center border-border border-b pl-10 pr-10 shadow-md relative z-10">
            <Logo/>
            <SearchPages/>
            <div className="flex">
                <SearchBar/>
                <Cart_icon/>
                <Login_icon/>
            </div>
        </div>
    )
}
export default Navbar