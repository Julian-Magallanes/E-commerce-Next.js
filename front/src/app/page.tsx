
import { Metadata } from "next";
import Banner from "./components/banner";
import Filter_search from "./components/filter_search";
import Offers from "./components/offers";

export const metadata: Metadata = {
  title: "TechBox",
  description: "Welcome to TechBox, your reliable source for tech news and analysis. Explore the latest trends in devices, software, gadgets, and more. Stay updated with our reviews and buying guides.",
};


export default function Home() {
  return (
    <><div className="max-sm:hidden">
        <Filter_search/>
      </div>
      <Banner/>
      <Offers/>
    </>
  );
}
