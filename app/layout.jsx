import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./shop/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Impex - Precision Sewing Machines & Textile Solutions",
  description:
    "Star Impex offers a curated selection of high-performance industrial and domestic sewing machines, parts, and accessories. Empowering craftsmanship with cutting-edge technology and dedicated support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}