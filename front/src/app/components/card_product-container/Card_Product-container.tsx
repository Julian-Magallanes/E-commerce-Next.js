import { CardsProductContainer } from "./Card_Product-container.styles"
import Card_product from "./card_product"
const CardProductContainer:React.FC = ():React.ReactElement => {
    return (
        <CardsProductContainer>
            <Card_product/>
        </CardsProductContainer>
    )
}


export default CardProductContainer