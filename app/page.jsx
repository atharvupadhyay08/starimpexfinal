import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, Shield, Headphones, Gem } from "lucide-react" // Added Gem icon

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Quantum Stitch Pro 5000",
      price: 949,
      image: "/images/usha.jpeg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Titan Industrial Seamer X10",
      price: 1399,
      image: "/images/maqi.jpeg",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Aura Embroidery Master 7i",
      price: 2350,
      image: "/images/jack.jpeg",
      rating: 4.8,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SI</span> {/* Changed SI to SP */}
              </div>
              <span className="text-xl font-semibold text-gray-900">Star Impex</span> {/* Changed Star Impex */}
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Precision Sewing Machines for Every Creative Vision
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our meticulously curated collection of industrial and domestic sewing machines. Where advanced
                engineering meets unparalleled craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Discover Machines
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/jack.jpeg" // Updated to use jack.jpeg
                alt="Modern Industrial Sewing Machine"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expedited Delivery</h3>
              <p className="text-gray-600">Complimentary on orders above $750</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Extended Warranty</h3>
              <p className="text-gray-600">Comprehensive 3-year coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Round-the-clock technical assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Unrivaled Quality</h3>
              <p className="text-gray-600">Only premium-grade components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Flagship Models</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after sewing machines, engineered for peak performance and durability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
                  <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
                  <Link href={`/product/${product.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Machines
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (New Unique Section) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Star Project?</h2>{" "}
            {/* Changed Star Impex */}
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are more than just a supplier; we are your partner in textile innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Curated Selection</h3>
                <p className="text-gray-600">Hand-picked machines for reliability and performance.</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lifetime Technical Support</h3>
                <p className="text-gray-600">Assistance for the lifespan of your machine.</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure & Insured Shipping</h3>
                <p className="text-gray-600">Your investment is protected from our door to yours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SP</span> {/* Changed SI to SP */}
                </div>
                <span className="text-lg font-semibold">Star Project</span> {/* Changed Star Impex */}
              </div>
              <p className="text-gray-400">Your trusted partner for professional sewing machines and equipment.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>456 Textile Drive</li>
                <li>Los Angeles, CA 90012</li>
                <li>Phone: (888) 765-4321</li>
                <li>Email: sales@starproject.com</li> {/* Changed Star Impex */}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Star Project. All rights reserved.</p> {/* Changed Star Impex */}
          </div>
        </div>
      </footer>
    </div>
  )
}
