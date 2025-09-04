import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Heart, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Designer Handbag",
      category: "Bags",
      price: "₦45,000",
      image: "/luxury-designer-handbag-gold-elegant.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Elegant Heels",
      category: "Heels",
      price: "₦35,000",
      image: "/elegant-high-heels-gold-luxury-fashion.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Bridal Shoes",
      category: "Bridal",
      price: "₦55,000",
      image: "/luxury-bridal-shoes-white-gold-elegant-wedding.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Comfort Slides",
      category: "Slides",
      price: "₦25,000",
      image: "/luxury-comfort-slides-gold-fashion-elegant.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Round Neck Top",
      category: "Clothing",
      price: "₦18,000",
      image: "/elegant-round-neck-top-fashion-luxury.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Designer Trousers",
      category: "Trousers",
      price: "₦32,000",
      image: "/luxury-designer-trousers-fashion-elegant.jpg",
      rating: 4,
    },
  ]

  const categories = [
    "Bags",
    "Heels",
    "Slides",
    "Slippers",
    "Bridal Shoes & Purse",
    "Round Neck",
    "Trousers",
    "Bespoke",
    "Ready to Wear",
    "Fabrics",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-xl">BM</div>
              <div>
                <h1 className="font-bold text-xl text-foreground">Luxury Fashion Hub</h1>
                <p className="text-sm text-muted-foreground">Elevating Your Style</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">Available Wholesale & Retail</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Elevating Your Style with
                <span className="text-primary"> Quality, Stylish & Comfortable</span> Fashion
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Discover our curated collection of luxury bags, elegant heels, stylish clothing, and premium
                accessories. From bespoke pieces to ready-to-wear fashion, we bring you quality that speaks elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Collection
                </Button>
                <Button size="lg" variant="outline">
                  Wholesale Inquiry
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-03%20at%2012.23.46_72357e2b.jpg-I7M8YaOAuYC4PNH2sO1DfIvEIyJbKd.jpeg"
                  alt="BM Luxury Fashion Hub - Professional Fashion"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Categories</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From luxury bags to elegant footwear, explore our diverse range of fashion categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Featured Products</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of our most popular and trending fashion items
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">About BM Luxury Fashion Hub</h3>
              <p className="text-muted-foreground text-pretty">
                At BM Luxury Fashion Hub, we believe that fashion is more than just clothing—it's a statement of who you
                are. Our carefully curated collection features premium quality bags, elegant heels, stylish clothing,
                and sophisticated accessories that elevate your personal style.
              </p>
              <p className="text-muted-foreground text-pretty">
                Whether you're looking for bespoke pieces tailored to your unique taste or ready-to-wear fashion that
                makes an instant impact, we offer both wholesale and retail options to meet your needs. Our commitment
                to quality, style, and comfort ensures that every piece in our collection meets the highest standards of
                luxury fashion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Products Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/luxury-fashion-store-interior-elegant.jpg"
                  alt="Fashion Store"
                  width={200}
                  height={250}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/luxury-fashion-accessories-display-elegant.jpg"
                  alt="Fashion Accessories"
                  width={200}
                  height={250}
                  className="rounded-lg object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to elevate your style? Contact us for inquiries, wholesale orders, or custom pieces
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
              <p className="text-muted-foreground">08055486044</p>
            </Card>
            <Card className="text-center p-6">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground text-sm">akindelebukola077@gmail.com</p>
            </Card>
            <Card className="text-center p-6">
              <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Instagram</h4>
              <p className="text-muted-foreground">@bukola17</p>
            </Card>
            <Card className="text-center p-6">
              <Facebook className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Facebook</h4>
              <p className="text-muted-foreground">Akindele Olubukola</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-xl">BM</div>
                <div>
                  <h4 className="font-bold text-foreground">Luxury Fashion Hub</h4>
                  <p className="text-sm text-muted-foreground">Elevating Your Style</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Quality, stylish & comfortable fashion for the modern individual. Available for wholesale and retail.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#home" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 BM Luxury Fashion Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
