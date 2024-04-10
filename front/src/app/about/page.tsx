'use client'

import { ThemeProvider } from "styled-components";
import theme from "@/theme/styledComponent";
import Navbar from "@/app/components/navbar";
import Header from "@/app/components/header";


export default function About() {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
        <Navbar/>
      </ThemeProvider>
    );
  }