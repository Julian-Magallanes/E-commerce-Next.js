
import { Metadata } from "next";
import Banner from "./components/banner";
import Filter_search from "./components/filter_search";
import Offers from "./components/offers";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "TechBox",
  description: "Welcome to TechBox, your reliable source for tech news and analysis. Explore the latest trends in devices, software, gadgets, and more. Stay updated with our reviews and buying guides.",
};


export default function Home() {
  function Loading() {
  return <h2 className="w-full text-center p-10"> Loading...</h2>;
}
  return (
    <><div className="max-sm:hidden">
        <Filter_search/>
      </div>
      <Suspense fallback={<Loading />}>
      <Banner/>
      </Suspense>
      <Offers/>
    </>
  );
}
