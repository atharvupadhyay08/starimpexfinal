"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter } from "lucide-react"

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterCategory, setFilterCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Quantum Stitch Pro 5000",
      price: 949,
      category: "overlock",
      image: "/images/usha.jpeg",
      rating: 4.9,
      description: "High-speed overlock machine with advanced tension control for professional garment finishing.",
    },
    {
      id: 2,
      name: "Titan Industrial Seamer X10",
      price: 1399,
      category: "industrial",
      image: "/images/maqi.jpeg",
      rating: 4.9,
      description: "Robust industrial machine designed for continuous heavy-duty operations on thick fabrics.",
    },
    {
      id: 3,
      name: "Aura Embroidery Master 7i",
      price: 2350,
      category: "embroidery",
      image: "/images/jack.jpeg",
      rating: 4.8,
      description: "Advanced computerized embroidery machine with intuitive LCD and vast design library.",
    },
    {
      id: 4,
      name: "QuiltCrafter 3000 Pro",
      price: 680,
      category: "quilting",
      image: "/images/typical.jpeg",
      rating: 4.7,
      description: "Dedicated quilting machine with extended work area and precise stitch regulation.",
    },
    {
      id: 5,
      name: "VersaSew Home Edition",
      price: 475,
      category: "home",
      image: "/images/breuce.jpeg",
      rating: 4.6,
      description: "Versatile multi-function machine perfect for all home sewing and repair tasks.",
    },
    {
      id: 6,
      name: "LeatherCraft Pro Stitcher",
      price: 1650,
      category: "industrial",
      image: "/images/maqi.jpeg",
      rating: 4.8,
      description: "Specialized heavy-duty machine for sewing leather, canvas, and other tough materials.",
    },
    {
      id: 7,
      name: "Compact Travel Stitcher",
      price: 180,
      category: "home",
      image: "/images/usha.jpeg",
      rating: 4.2,
      description: "Lightweight and portable, ideal for quick fixes and travel.",
    },
    {
      id: 8,
      name: "SergeMaster 8800D",
      price: 1100,
      category: "overlock",
      image: "/images/jack.jpeg",
      rating: 4.7,
      description: "High-performance serger with differential feed for perfect seams on all fabrics.",
    },
  ]

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === "all" || product.category === filterCategory),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span> {/* Changed SI to SP */}
              </div>
              <span className="text-xl font-semibold text-gray-900">Star Project</span> {/* Changed Star Impex */}
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-blue-600 font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            <Link href="/cart">
              <Button variant="outline" size="sm">
                Cart (0)
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Machine Collection</h1>
          <p className="text-gray-600">Explore our extensive range of high-quality sewing and textile machines.</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search machines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="overlock">Overlock</SelectItem>
                <SelectItem value="embroidery">Embroidery</SelectItem>
                <SelectItem value="quilting">Quilting</SelectItem>
                <SelectItem value="home">Home & Hobby</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
                <SelectContent>
                  <SelectItem value="name">Machine Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price: Ascending</SelectItem>
                  <SelectItem value="price-high">Price: Descending</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>

            <div className="text-sm text-gray-600 flex items-center">Displaying {filteredProducts.length} machines</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>

                <div className="flex gap-2">
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Specifications
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No machines found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
