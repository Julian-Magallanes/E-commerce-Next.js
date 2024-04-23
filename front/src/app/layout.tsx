import Header from "./components/header";
import Navbar from "./components/navbar";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { AuthProvider } from "@/context/Context";
import { CartProvider } from "@/context/ContextCart";

const barlow = Barlow({ subsets: ['latin'], weight: "300"});

export const metadata: Metadata = {
  title: "Home -TechBox",
  description: "Page of tecnology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className} suppressHydrationWarning={true}>
        <CartProvider>
        <AuthProvider >
          <Header/>
          <Navbar/>
          {children}
          <Footer/>
        </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
