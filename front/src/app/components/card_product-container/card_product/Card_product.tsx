import { productsToPreLoad  } from "@/utils/Preload"
import { CardContainer, Image, Price} from "./Card_product.styles"

const CardProduct:React.FC = ():React.ReactElement => {
    return (
        <div>
            {productsToPreLoad.map((product,index)=>{
                return <CardContainer key={index} >
                    <Image src={product.image}/>

                    </CardContainer>
            })}
        </div>  
    )
}
export default CardProduct