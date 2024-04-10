import { NavbarContainer } from "./Navbar.styles"
import Cart_icon from "./cart_icon"
import Login_icon from "./login_icon"
import Logo from "./logo"
import SearchPages from "./searchPages"
import SearchBar from "./searchbar"

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <NavbarContainer>
            <Logo/>
            <SearchPages/>
            <SearchBar/>
            <Cart_icon/>
            <Login_icon/>
        </NavbarContainer>
    )
}
export default Navbar