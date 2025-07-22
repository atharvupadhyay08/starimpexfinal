"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Minus, Plus, ShoppingCart, Heart, Share2 } from "lucide-react"

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: Number.parseInt(params.id),
    name: "Quantum Stitch Pro 5000 Overlock Machine",
    price: 949,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 187,
    inStock: true,
    images: ["/images/usha.jpeg", "/images/jack.jpeg", "/images/breuce.jpeg"],
    description:
      "The Quantum Stitch Pro 5000 is a state-of-the-art overlock machine engineered for unparalleled speed and precision. It's the ideal choice for professional tailors, fashion designers, and serious hobbyists seeking flawless seams and durable finishes on a wide range of fabrics.",
    features: [
      "Ultra-high speed operation up to 1,800 stitches per minute",
      "Versatile 2, 3, and 4-thread overlock capabilities",
      "Advanced automatic tension system for consistent stitch quality",
      "Integrated bright LED work light for optimal visibility",
      "Color-coded, lay-in threading system for effortless setup",
      "Adjustable differential feed for perfect results on stretch and delicate fabrics",
      "Heavy-duty metal frame for enhanced stability and longevity",
    ],
    specifications: {
      "Stitch Types": "2/3/4-thread overlock, rolled hem, flatlock",
      "Stitch Width": "3.5mm (standard), 5.0mm (wide)",
      "Stitch Length": "1.0-5.0mm",
      Speed: "1,800 stitches/min (max)",
      Weight: "32 lbs (14.5 kg)",
      Dimensions: '15.5" (W) x 13" (D) x 12" (H)',
      Warranty: "3-year limited warranty on parts and labor",
      "Needle System": "ELx705",
      "Differential Feed Ratio": "0.6 to 2.0",
    },
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

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
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
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
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-blue-600">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-xl shadow-sm"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              {product.inStock ? (
                <Badge className="bg-green-100 text-green-800">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} verified reviews)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Product
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="specifications">Technical Specs</TabsTrigger>
              <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Detailed Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Eleanor R.</span>
                        <span className="ml-2 text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Absolutely phenomenal machine! The speed and precision have transformed my small tailoring
                        business. Threading is surprisingly easy for an industrial model."
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">David L.</span>
                        <span className="ml-2 text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "A solid investment. It handles heavy fabrics with ease. The only minor critique is the initial
                        learning curve for advanced settings, but the results are worth it."
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Sophia K.</span>
                        <span className="ml-2 text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "This machine is a dream! The automatic tension is a game-changer, and the LED light makes
                        working on dark fabrics so much easier. Highly recommend for any serious sewer."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
