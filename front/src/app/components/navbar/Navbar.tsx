import { NavbarContainer } from "./Navbar.styles"
import Cart_icon from "./cart_icon"
import Filter_search from "./filter_search"
import Login_icon from "./login_icon"
import Logo from "./logo"
import SearchBar from "./searchbar"

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <NavbarContainer>
            <Logo/>
            <Filter_search/>
            <SearchBar/>
            <Cart_icon/>
            <Login_icon/>
        </NavbarContainer>
    )
}
export default Navbar