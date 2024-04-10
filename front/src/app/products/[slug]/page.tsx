import Navbar from "@/app/components/navbar";
import { getProductByID } from "@/helpers";


export default async function ProductDetail({ params } : { params:any}) {
  const {slug} = params;
  const product = await getProductByID (slug)
  return (
    <>
    <div>
        <img src={product?.image}></img>
        <h1>{product?.price}</h1>
        <h4>{product?.name}</h4> 
        <p>{product?.description}</p> 
        <p>{product?.stock}</p>
    </div>
    </>
  );
}
