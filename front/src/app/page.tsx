

import Banner from "./components/banner";
import Filter_search from "./components/filter_search";
import Offers from "./components/offers";


export default function Home() {
  return (
    <>
      <Filter_search/>
      <Banner/>
      <Offers/>
    </>
  );
}
