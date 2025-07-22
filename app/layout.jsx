import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Star Project - Precision Sewing Machines & Textile Solutions",
  description:
    "Star Project offers a curated selection of high-performance industrial and domestic sewing machines, parts, and accessories. Empowering craftsmanship with cutting-edge technology and dedicated support.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
