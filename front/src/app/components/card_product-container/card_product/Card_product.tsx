
import Link from "next/link"
import { getProducts } from "@/helpers"



 const CardProduct:React.FC = async() => {
    const products = await getProducts()
    console.log(products)
    return (
        <>
            {products.map((product,index)=>{
                return <Link href={`/products/${product.id}`}><div key={index} className="w-80 flex flex-col items-center justify-between border-border border rounded-xl h-[28rem] m-8 p-8 shadow-xl transition ease-in-out delay-150 hover:scale-105">
                    <img src={product.image}/>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl">{`$ USD ${product.price}`}</h1>
                        <h4 className="text-2xl">{product.name}</h4>
                    </div>
                    </div></Link>
            })}
        </>  
    )
}
export default CardProduct