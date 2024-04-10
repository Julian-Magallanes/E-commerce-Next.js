import { getProductByID } from "@/helpers";


export default async function ProductDetail({ params } : { params:any}) {
  const {slug} = params;
  const product = await getProductByID (slug)
  return (
    <>
    <div className="flex items-center w-full justify-center m-8">
      <div className="w-1/3">
        <img src={product?.image} className="w-full"></img>
      </div>
      <div className="flex-col justify-center bg-secondary rounded-xl w-1/3 border-border border">
        <h1 className="text-4xl w-full m-4">{product?.name}</h1>
        <h4 className="text-2xl m-4">{product?.price}</h4> 
        <p className="m-4">{product?.description}</p> 
        <p className="m-4">Stock: {product?.stock}</p>
        <button className=" m-4 rounded-xl w-40 bg-terciary h-10 border-border border">Add to cart </button>
      </div>
    </div>
    </>
  );
}
