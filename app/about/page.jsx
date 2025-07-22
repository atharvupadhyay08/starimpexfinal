import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "15,000+" },
    { icon: Globe, label: "Global Reach", value: "30+ Countries" },
    { icon: Award, label: "Industry Expertise", value: "Over 20 Years" },
    { icon: Clock, label: "Responsive Support", value: "24/7 Availability" },
  ]

  const team = [
    {
      name: "atharv upadhyay",
      role: "CEO & Visionary",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "abhay  acharaya",
      role: "Chief Engineering Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "ya ya ",
      role: "Head of Customer Success",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

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
              <span className="text-xl font-semibold text-gray-900">Star Impex</span> {/* Changed Star Impex */}
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">The Star Impex Story</h1> {/* Changed Star Impex */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, Star Impex has been at the forefront of providing cutting-edge sewing and textile
            machinery. Our unwavering dedication to quality, innovation, and customer success defines our journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Genesis & Growth</h2>
            <p className="text-gray-600 mb-4">
              Established in 2004, Star Impex began as a modest venture driven by a passion for textile craftsmanship
              and a vision to equip creators with superior tools. From a small local distributor, we've organically
              grown into a globally recognized supplier of advanced sewing and embroidery solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our expansion into over 30 countries is a testament to our commitment to fostering creativity and
              efficiency in the textile industry. We pride ourselves on a foundation built on three core principles:
              delivering unparalleled product quality, offering exceptional post-sales support, and maintaining a
              competitive edge through continuous innovation.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Connect With Us</Button>
            </Link>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Modern textile factory interior"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Guiding Mission</h3>
              <p className="text-gray-600">
                To empower textile professionals and enthusiasts worldwide by providing innovative, reliable, and
                high-performance sewing machinery that elevates their craft and productivity. We are committed to being
                the catalyst for creative and industrial excellence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Excellence : Uncompromising standards in every machine we offer.</li>
                <li>• Client-Centricity : Prioritizing our customers' needs and success.</li>
                <li>• Innovation : Continuously embracing technological advancements.</li>
                <li>• Integrity : Upholding transparency and ethical practices.</li>
                <li>• Sustainability : Promoting responsible practices in manufacturing and operations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Dedicated Team</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our diverse team brings together decades of collective experience, technical prowess, and a shared passion
            for delivering the best sewing solutions to our global clientele.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-sm">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Craft?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Browse our comprehensive catalog of advanced sewing machines and discover the perfect tool to bring your
            textile projects to life. Our experts are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" variant="secondary">
                Explore Machines
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Get Personalized Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
