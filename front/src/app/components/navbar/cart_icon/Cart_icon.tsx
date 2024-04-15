import Link from "next/link"
import { ButtonCart, Image } from "./Cart_icon.styles"
import { ICartProduct, IProduct } from "@/app/types"
import { useEffect, useState } from "react"

const CartIcon:React.FC=():React.ReactElement => {
    const [cart, setCart]= useState<ICartProduct[]>([])
    const [countTotal, setCountTotal] = useState(0)
    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const countedCart: ICartProduct[]=[];
        if (storedCart.length > 0){
            storedCart.forEach((product : IProduct) => {
                const existingProduct = countedCart.find(
                    (item) => item.id === product.id
                )
                if (existingProduct){
                    existingProduct.count += 1
                } else {
                    countedCart.push({...product, count:1})
                }
            });
        }
    setCart(countedCart)
    const countTotal = countedCart.reduce((sum, product)=> sum + product.count, 0)
    setCountTotal(countTotal)
},[]);
    return(
        <ButtonCart>
            <Link href="/cart_order" className="flex">
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/cartIcon_jy3qtk.svg" alt="searchCart" width={50} height={50} loading="lazy"/>
                {countTotal > 0 && <h1 className="absolute text-text font-bold border bg-terciary rounded-full w-4 text-xs right-[104px]">{countTotal}</h1>}
            </Link>
        </ButtonCart>
    )
}

export default CartIcon