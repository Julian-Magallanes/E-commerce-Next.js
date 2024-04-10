'use client'

import { ThemeProvider } from "styled-components";
import theme from "@/theme/styledComponent";
import Navbar from "@/app/components/navbar";
import Card_productContainer from "@/app/components/card_product-container";
import Filter_search from "@/app/components/filter_search";
import Header from "@/app/components/header";

export default function Product() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Navbar/>
      <Filter_search/>
      <Card_productContainer/>
    </ThemeProvider>
  );
}
