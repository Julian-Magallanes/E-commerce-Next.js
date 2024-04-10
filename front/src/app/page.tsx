'use client'
import Navbar from "./components/navbar";
import Card_productContainer from "./components/card_product-container";
import Filter_search from "./components/filter_search";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Filter_search/>
      <Card_productContainer/>
    </>
  );
}
