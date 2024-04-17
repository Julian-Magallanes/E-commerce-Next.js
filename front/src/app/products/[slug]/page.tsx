'use client'

import { useCart } from "@/context/ContextCart";
import { getProductByID } from "@/helpers";
import { useRouter } from 'next/navigation'


export default async function ProductDetail({ params } : { params:any}) {
  const router = useRouter()
  const cartStorage = useCart()
  const { postCart} = cartStorage || {};

  const {slug} = params;
  const product = await getProductByID (slug)



  const addToCart = () => {
    if (!product) return;

    const cartString = localStorage.getItem("cart"); 
    const cart = cartString ? JSON.parse(cartString) : [];

    cart.push(product);
    if(postCart){
      postCart(JSON.stringify(cart));
    }
    router.push('/cart_order')

};
  return (
    <>
    <div className="flex items-center w-full justify-center p-10 h-full max-md:flex-col ">
      <div className="w-1/3 p-10  max-lg:w-full">
        <img src={product?.image} className="w-full" alt={product?.name}></img>
      </div>
      <div className="flex flex-col justify-between content-between bg-secondary rounded-xl w-1/3 border-border border shadow-md h-[600px] max-lg:w-full max-lg:h-full">
        <h1 className="text-4xl w-full m-6">{product?.name}</h1>
        <h4 className="text-2xl m-6">$ USD {product?.price} </h4> 
        <p className="m-6">{product?.description}</p> 
        <p className="m-6">Stock: {product?.stock}</p>
        <div className="flex">
          <button className=" m-6 rounded-xl w-40 bg-terciary h-10 border-border border hover:bg-hoverButton" onClick={addToCart}>Add to cart </button>
        </div>
      </div>
    </div>
    </>
  );
}
