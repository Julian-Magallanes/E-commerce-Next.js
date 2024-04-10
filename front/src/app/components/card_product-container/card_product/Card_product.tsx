import { CardContainer, Image, Price, Title, Description} from "./Card_product.styles"
import Link from "next/link"
import { getProducts } from "@/helpers"



 const CardProduct:React.FC = async() => {
    const products = await getProducts()
    console.log(products)
    return (
        <>
            {products.map((product,index)=>{
                return <Link href={`/products/${product.id}`}><CardContainer key={index} className="shadow-xl transition ease-in-out delay-150 hover:scale-105">
                    <Image src={product.image}/>
                    <Price>{`${product.price} $`}</Price>
                    <Title>{product.name}</Title>
                    {/*<Description>{product.description}</Description>*/}
                    </CardContainer></Link>
            })}
        </>  
    )
}
export default CardProduct