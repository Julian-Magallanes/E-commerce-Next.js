'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ICartContext {
     cart: string | null; postCart: (newCart: string) => void; cleanCart : () => void; 
}
const CartContext = createContext<ICartContext | null>(null)
export function CartProvider ({children}:{children: ReactNode}) {
    const [cart, setCart] = useState<string | null>(null)
    
    useEffect (() =>{
        const localStorageCart = localStorage.getItem('cart')
        if (localStorageCart){
            setCart(localStorageCart)
        }
    },[])

    const postCart= (newCart: string) =>{
        localStorage.setItem('cart', newCart)
        setCart(newCart);
    }

    const cleanCart = () =>{
        localStorage.setItem('cart', "[]");
        setCart(null)
    }

    return (
        <CartContext.Provider value={{cart,postCart,cleanCart }}>
            {children}
        </CartContext.Provider>
    )

}

export function useCart():ICartContext | null {
    return useContext(CartContext);
}