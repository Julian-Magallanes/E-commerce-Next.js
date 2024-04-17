
import Card_productDetail from "@/app/components/card_product-Detail";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product Detail - TechBox",
  description: "Explore our selection of premium tech products at TechBox. From smartphones and laptops to smart home devices, we have everything you need to stay connected and productive in today's digital world.",
};
export default async function ProductDetail({ params } : { params:any}) {
  

  const {slug} = params;
  
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
    <Card_productDetail slug={slug}/>
    </Suspense>
  );
}
