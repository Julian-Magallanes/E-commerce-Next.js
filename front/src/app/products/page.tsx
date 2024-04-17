import { Metadata } from "next";
import Card_productContainer from "../components/card_product-container";
import Filter_search from "../components/filter_search";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products - TechBox",
  description: "Explore our selection of premium tech products at TechBox. From smartphones and laptops to smart home devices, we have everything you need to stay connected and productive in today's digital world.Explore our selection of premium tech products at TechBox. From smartphones and laptops to smart home devices, we have everything you need to stay connected and productive in today's digital world.",
};

export default function Product() {
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <>
    <div className=" max-md:hidden">
      <Filter_search/>
    </div>
    <Suspense fallback={<Loading />}>
      <Card_productContainer/>
    </Suspense>
    </>
  );
}
