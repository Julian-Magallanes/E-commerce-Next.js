import { HeaderContainer, HeaderText } from "./Header.styles"

const Header:React.FC = ():React.ReactElement=>{
    return(
        <HeaderContainer>
            <HeaderText>Envios gratis Argentina</HeaderText>
            <HeaderText>Descuentos del dia de la madre!</HeaderText>
        </HeaderContainer>
    )
}
export default Header 