'use client'

import { ThemeProvider } from "styled-components";
import theme from "@/theme/styledComponent";
import Navbar from "./components/navbar";
import Card_productContainer from "./components/card_product-container";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Card_productContainer/>
    </ThemeProvider>
  );
}
