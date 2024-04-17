import Filter_search from "@/app/components/filter_search";
import { getProductByCategoryID } from "@/helpers";
import Link from "next/link";

export default async function ProductCategory({ params } : { params:any}) {
    const {slug} = params;
    const product = await getProductByCategoryID (slug)
    
  return (
    <>  <div className=" max-md:hidden">
            <Filter_search/>
        </div>
        {product === undefined ?  (
                <div className="w-full text-center p-20 text-6xl my-40">There are no products for this category at the moment.</div>
            ) : (
                <Link href={`/products/${product?.id}`} className="w-full flex items-center justify-center">
                    <div key={product?.id} className="w-80 flex flex-col items-center justify-between border-border border rounded-xl h-[28rem] m-8 p-8 shadow-xl transition ease-in-out delay-150 hover:scale-105">
                        <img src={product?.image} alt={product?.name} />
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl">{`$ USD ${product?.price}`}</h1>
                            <h4 className="text-2xl">{product?.name}</h4>
                        </div>
                    </div>
                </Link>
            )}
    </>
  );
}