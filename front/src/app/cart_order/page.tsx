'use client'

import { useEffect, useState } from "react"
import { ICartProduct, IProduct } from "../types";
import { postOrders } from "@/helpers";
import { useRouter } from 'next/navigation'
import { useCart } from "@/context/ContextCart";
import { useAuth } from "@/context/Context";


export default function CartOrder() {
    const router = useRouter();
    const { cart, cleanCart } = useCart() || {};
    const {token} = useAuth() || {};

    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [countTotal, setCountTotal] = useState(0);

    useEffect(() => {
        if (!cart) return;

        const storedCart = JSON.parse(cart);
        const countedCart: ICartProduct[] = [];

        if (storedCart.length > 0) {
            storedCart.forEach((product: IProduct) => {
                const existingProduct = countedCart.find((item) => item.id === product.id);
                if (existingProduct) {
                    existingProduct.count += 1;
                } else {
                    countedCart.push({ ...product, count: 1 });
                }
            });
        }

        const total = countedCart.reduce((sum, product) => sum + product.price * product.count, 0);
        const countTotal = countedCart.reduce((sum, product) => sum + product.count, 0);

        setCartProducts(countedCart);
        setTotal(total);
        setCountTotal(countTotal);
    }, [cart]);

    async function handlePostOrders() {
        const orderProducts = new Set(cartProducts.map((products) => parseInt(products.id)));
        await postOrders(Array.from(orderProducts));
        if(!cleanCart)return
        cleanCart();
        setCartProducts([]);
        setTotal(0);
        setCountTotal(0);
        router.push('/orders');
    }
return (
    <div className="flex flex-row w-full justify-between  p-10 max-md:flex-col">  
        <div className=" w-full md:pr-5">
            <div className="w-full flex flex-row items-center justify-between  px-8 my-4 py-2 border-border border rounded-xl shadow-lg">
                <h1 className="text-lg">
                    Product
                </h1 >
                <h1 className="text-lg">
                    Price
                </h1>
                <h1 className="text-lg">
                    Amount
                </h1>
                <h1 className="text-lg">
                    Price
                </h1>
                <h1 className="text-lg">
                    Count
                </h1>
            </div>
            {cartProducts.map((product,index)=>{
                return <div key={index} className="w-full flex flex-row items-center justify-between border-border border rounded-xl  mb-4 p-4 shadow-lg transition ease-in-out delay-150 hover:scale-105">
                        <img src={product.image} className="w-20 max-sm:w-12" alt={product.name}/>
                        <h4 className="text-lg max-sm:text-sm">{product.name}</h4>
                        <h4 className="text-lg max-sm:text-sm">{product.stock}</h4>
                        <h1 className="text-lg max-sm:text-sm">{`$ USD ${product.price}`}</h1>
                        <h1 className="text-lg max-sm:text-sm">{product.count}</h1>
                    </div>
            })}
        </div>
        <div className="w-full md:pl-5">
            <div className="flex flex-col justify-between content-between bg-secondary rounded-xl w-full border-border border shadow-md h-full mx4 mt-4 mb-4">
                <div className="flex m-6 justify-between">
                    <p className="text-xl">Aticles: </p>
                    <h1 className="text-xl w-20 text-center"> {countTotal}</h1>
                </div>
                <div className="flex m-6 justify-between">
                    <h2 className="text-xl">Total: </h2>
                    <h1 className="text-xl">{`$ USD ${total}`}</h1>
                </div>
                <div className="flex flex-row">
                    {token && <button className=" m-6 rounded-xl w-48 bg-terciary h-10 border-border border hover:bg-hoverButton" onClick={handlePostOrders}>Proceed to Checkout</button>}
                    <button className=" m-6 rounded-xl w-48 bg-terciary h-10 border-border border hover:bg-hoverButton" onClick={()=>router.push('/products')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    </div>  
    )
}