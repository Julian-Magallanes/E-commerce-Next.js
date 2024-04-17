import Link from "next/link"
import { ButtonCart, Image } from "./Cart_icon.styles"
import {IProduct } from "@/app/types"
import { useEffect, useState } from "react"
import { useCart } from "@/context/ContextCart"
import { useAuth } from "@/context/Context"

const CartIcon:React.FC=():React.ReactElement => {

    const cartStorage = useCart()
    const { cart} = cartStorage || {};
    const {token} = useAuth() || {};

    const [countTotal, setCountTotal] = useState(0)
    useEffect(()=>{
        if (!cart) {return};

        const storedCart = JSON.parse(cart);
        let count = 0;

        if (storedCart.length > 0) {
            storedCart.forEach((product: IProduct) => {
                count++;
            });
        }
        storedCart.length = 0


        setCountTotal(count);
    }, [cart]);
    return(
        <ButtonCart>
            <Link href="/cart_order" className="flex">
                <Image src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712494041/Next/cartIcon_jy3qtk.svg" alt="searchCart" width={50} height={50} loading="lazy"/>
                {token && <div>{cart ? <h1 className="absolute text-text font-bold border bg-terciary rounded-full w-4 text-xs right-[104px]">{countTotal}</h1> : <div className="hidden"/>}</div>}
            </Link>
        </ButtonCart>
    )
}

export default CartIcon