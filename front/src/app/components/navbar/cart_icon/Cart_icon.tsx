import { ButtonCart, Image } from "./Cart_icon.styles"

const CartIcon:React.FC=():React.ReactElement => {
    return(
            <ButtonCart>
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/cartIcon_jy3qtk.svg" alt="searchCart"/>
            </ButtonCart>
    )
}

export default CartIcon