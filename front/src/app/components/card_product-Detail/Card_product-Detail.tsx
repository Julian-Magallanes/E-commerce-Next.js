'use client'
import {  useEffect, useState } from 'react';
import { useCart } from "@/context/ContextCart";
import { getProductByID } from "@/helpers";
import { useRouter } from 'next/navigation';
import { IProduct } from '@/app/types'; // Asegúrate de importar el tipo correcto para tu producto
import Image from 'next/image';

const CardProductDetail: React.FC<{ slug: string }> = ({ slug }): React.ReactElement => {

  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null); // Estado para almacenar el producto
  const cartStorage = useCart();
  const { postCart } = cartStorage || {};

  useEffect(() => {
    // Función asincrónica para cargar el producto
    const fetchProduct = async () => {
      const fetchedProduct = await getProductByID(slug);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    };

    fetchProduct(); // Llamada a la función asincrónica al montar el componente
  }, [slug]); // Dependencia de useEffect

  const addToCart = () => {
    if (!product) return;

    const cartString = localStorage.getItem("cart");
    const cart = cartString ? JSON.parse(cartString) : [];

    cart.push(product);
    if (postCart) {
      postCart(JSON.stringify(cart));
    }
    router.push('/cart_order');
  };
 
  if (!product) {
    return <div>Loading...</div>; // Renderizar un mensaje de carga mientras se carga el producto
  }


  return (

    <div className="flex items-center w-full justify-center p-10 h-full max-md:flex-col">
      <div className="w-1/3 p-10 max-lg:w-full">
        <Image src={product.image} className="w-full" alt={product.name} width={800} height={800}/>
      </div>
      <div className="flex flex-col justify-between content-between bg-secondary rounded-xl w-1/3 border-border border shadow-md h-[600px] max-lg:w-full max-lg:h-full">
        <h1 className="text-4xl w-full m-6">{product.name}</h1>
        <h4 className="text-2xl m-6">$ USD {product.price} </h4>
        <p className="m-6">{product.description}</p>
        <p className="m-6">Stock: {product.stock}</p>
        <div className="flex">
          <button className=" m-6 rounded-xl w-40 bg-terciary h-10 border-border border hover:bg-hoverButton" onClick={addToCart}>Add to cart </button>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;