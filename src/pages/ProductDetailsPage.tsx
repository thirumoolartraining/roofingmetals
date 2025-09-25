import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, MessageCircle, Plus, Minus, Heart, Share2, Truck, Shield, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // All products data (same as in CatalogPage)
  const allProducts = [
    {
      id: 1,
      name: "Galvanized Roofing Sheets",
      category: "roofing",
      price: 850,
      unit: "per sheet",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      image: "/catalog/1.jpg",
      description: "Premium quality galvanized steel roofing sheets with 20-year warranty",
      specs: "Thickness: 0.5mm, Length: 8ft-12ft available",
      features: [
        "20-year warranty against corrosion",
        "Pre-painted with weather-resistant coating",
        "Available in multiple colors",
        "Easy installation with self-drilling screws",
        "Suitable for residential and commercial use"
      ],
      technicalSpecs: {
        "Material": "Galvanized Steel",
        "Thickness": "0.5mm",
        "Width": "1050mm",
        "Length": "8ft to 12ft",
        "Coating": "55% Aluminum-Zinc",
        "Weight": "4.5 kg/m²"
      }
    },
    {
      id: 2,
      name: "Steel TMT Bars 12mm",
      category: "metals",
      price: 65000,
      unit: "per tonne",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      image: "/catalog/2.jpg",
      description: "High strength TMT reinforcement bars Fe-500 grade",
      specs: "Grade: Fe-500, Length: 12m, ISI certified",
      features: [
        "Fe-500 grade high strength steel",
        "Superior bendability and ductility",
        "Earthquake resistant properties",
        "Corrosion resistant",
        "ISI certified quality"
      ],
      technicalSpecs: {
        "Grade": "Fe-500",
        "Diameter": "12mm",
        "Length": "12 meters",
        "Yield Strength": "500 N/mm²",
        "Tensile Strength": "545 N/mm²",
        "Elongation": "14.5% minimum"
      }
    },
    {
      id: 3,
      name: "Roofing Screws Set",
      category: "hardware",
      price: 1200,
      unit: "per 100 pcs",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      image: "/catalog/3.jpg",
      description: "Self-drilling roofing screws with EPDM washers",
      specs: "Size: 6.3x25mm to 6.3x75mm, Hex head with washer",
      features: [
        "Self-drilling design for easy installation",
        "EPDM rubber washers for weather sealing",
        "Corrosion resistant coating",
        "Hex head for secure grip",
        "Suitable for metal and wood substrates"
      ],
      technicalSpecs: {
        "Material": "Hardened Steel",
        "Coating": "Zinc Plated",
        "Head Type": "Hex Head",
        "Washer": "EPDM Rubber",
        "Thread": "Self-drilling",
        "Sizes Available": "6.3x25mm to 6.3x75mm"
      }
    },
    {
      id: 4,
      name: "Angle Grinder 4 Inch",
      category: "tools",
      price: 3500,
      unit: "each",
      rating: 4.6,
      reviews: 67,
      inStock: true,
      image: "/catalog/4.jpg",
      description: "Heavy duty angle grinder for metal cutting and grinding",
      specs: "Power: 850W, Disc size: 115mm, Speed: 11000 RPM",
      features: [
        "850W powerful motor",
        "11000 RPM high speed operation",
        "Ergonomic design for comfortable grip",
        "Safety guard included",
        "Suitable for cutting and grinding"
      ],
      technicalSpecs: {
        "Power": "850W",
        "Disc Size": "115mm (4 inch)",
        "No Load Speed": "11000 RPM",
        "Weight": "1.8 kg",
        "Voltage": "230V AC",
        "Cord Length": "2 meters"
      }
    },
    {
      id: 5,
      name: "Concrete Mixer 10/7",
      category: "machinery",
      price: 125000,
      unit: "each",
      rating: 4.8,
      reviews: 42,
      inStock: true,
      image: "/catalog/5.jpg",
      description: "Heavy duty diesel concrete mixer for construction sites",
      specs: "Capacity: 10/7 CFT, Engine: 7HP, Drum Speed: 24-28 RPM",
      features: [
        "10/7 CFT mixing capacity",
        "7HP diesel engine",
        "Heavy duty construction",
        "Easy mobility with wheels",
        "Suitable for construction sites"
      ],
      technicalSpecs: {
        "Capacity": "10/7 CFT",
        "Engine": "7HP Diesel",
        "Drum Speed": "24-28 RPM",
        "Weight": "350 kg",
        "Dimensions": "2100x1200x1400mm",
        "Fuel Tank": "15 liters"
      }
    },
    {
      id: 6,
      name: "Safety Helmet with Visor",
      category: "safety",
      price: 899,
      unit: "each",
      rating: 4.9,
      reviews: 231,
      inStock: true,
      image: "/catalog/6.jpg",
      description: "High visibility safety helmet with clear visor",
      specs: "Material: HDPE, Weight: 400g, IS 2925:1984 certified",
      features: [
        "IS 2925:1984 certified",
        "High visibility design",
        "Clear polycarbonate visor",
        "Adjustable chin strap",
        "Lightweight HDPE construction"
      ],
      technicalSpecs: {
        "Material": "HDPE",
        "Weight": "400g",
        "Visor": "Polycarbonate",
        "Standard": "IS 2925:1984",
        "Color": "High Visibility Yellow",
        "Size": "Adjustable"
      }
    },
    {
      id: 7,
      name: "Steel Scaffolding Set",
      category: "scaffolding",
      price: 85000,
      unit: "set",
      rating: 4.7,
      reviews: 78,
      inStock: true,
      image: "/catalog/7.jpg",
      description: "Heavy duty steel scaffolding for construction work",
      specs: "Height: 2m, Load capacity: 300kg, Includes: 4 frames, 4 cross braces, 4 base jacks",
      features: [
        "300kg load capacity",
        "2m working height",
        "Complete set with all accessories",
        "Easy assembly and disassembly",
        "Suitable for construction work"
      ],
      technicalSpecs: {
        "Height": "2 meters",
        "Load Capacity": "300 kg",
        "Material": "Galvanized Steel",
        "Components": "4 frames, 4 cross braces, 4 base jacks",
        "Weight": "45 kg per set",
        "Standard": "IS 4014:1999"
      }
    },
    {
      id: 8,
      name: "Power Drill Machine",
      category: "tools",
      price: 4200,
      unit: "each",
      rating: 4.8,
      reviews: 145,
      inStock: true,
      image: "/catalog/8.jpg",
      description: "Cordless hammer drill with 2 batteries",
      specs: "Voltage: 20V, Torque: 50Nm, Chuck Size: 13mm, Battery: 2.0Ah Li-ion",
      features: [
        "20V Li-ion battery system",
        "50Nm maximum torque",
        "13mm keyless chuck",
        "2 batteries included",
        "LED work light"
      ],
      technicalSpecs: {
        "Voltage": "20V",
        "Torque": "50Nm",
        "Chuck Size": "13mm",
        "Battery": "2.0Ah Li-ion",
        "Speed": "0-400/0-1500 RPM",
        "Weight": "1.5 kg"
      }
    },
    {
      id: 9,
      name: "Waterproofing Compound",
      category: "chemicals",
      price: 1250,
      unit: "5 kg",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      image: "/catalog/9.jpg",
      description: "Premium quality waterproofing compound for roofs",
      specs: "Coverage: 50 sq.ft per kg (2 coats), Drying time: 4-6 hours, Waterproofing: 10 years",
      features: [
        "10 years waterproofing guarantee",
        "50 sq.ft coverage per kg",
        "Quick drying formula",
        "UV resistant",
        "Easy application"
      ],
      technicalSpecs: {
        "Coverage": "50 sq.ft per kg",
        "Drying Time": "4-6 hours",
        "Warranty": "10 years",
        "Application": "Brush/Roller",
        "Color": "White",
        "Base": "Acrylic Polymer"
      }
    },
    {
      id: 10,
      name: "Aluminum Ladder 16ft",
      category: "access",
      price: 7500,
      unit: "each",
      rating: 4.6,
      reviews: 113,
      inStock: true,
      image: "/catalog/10.jpg",
      description: "Lightweight yet sturdy aluminum extension ladder",
      specs: "Material: Aluminum 6063-T6, Max Load: 150kg, Steps: 8, Weight: 12.5kg",
      features: [
        "Aluminum 6063-T6 construction",
        "150kg maximum load capacity",
        "16ft extended height",
        "8 steps for easy climbing",
        "Lightweight at 12.5kg"
      ],
      technicalSpecs: {
        "Material": "Aluminum 6063-T6",
        "Height": "16 feet",
        "Max Load": "150 kg",
        "Steps": "8",
        "Weight": "12.5 kg",
        "Width": "450mm"
      }
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (!product) {
      navigate('/catalog');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: product.image,
        category: product.category
      });
    }
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-roofing-blue">Home</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-roofing-blue">Catalog</Link>
            <span>/</span>
            <span className="text-industrial-base">{product.name}</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-roofing-blue hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-light-gray rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-roofing-blue font-medium mb-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <h1 className="text-3xl lg:text-4xl font-oswald font-bold mb-4 text-industrial-base">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {product.description}
                </p>
                <p className="text-sm font-specs text-muted-foreground">
                  {product.specs}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                {product.inStock ? (
                  <span className="trust-badge">In Stock</span>
                ) : (
                  <span className="bg-destructive text-white px-3 py-1 rounded text-sm">Out of Stock</span>
                )}
              </div>

              {/* Price */}
              <div className="border-t border-b border-border py-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-industrial-base">₹{product.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground">{product.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Inclusive of all taxes • Free delivery on orders above ₹5000
                </p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-light-gray"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-light-gray"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="btn-outline px-4">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="btn-outline px-4">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <Link 
                    to={`/bulk-inquiry?product=${product.id}`}
                    className="flex-1 btn-secondary text-center"
                  >
                    Get Bulk Quote
                  </Link>
                  <a 
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in ${product.name}`}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md text-center hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-roofing-blue" />
                  <div className="text-sm font-medium">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">On orders ₹5000+</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-roofing-blue" />
                  <div className="text-sm font-medium">Warranty</div>
                  <div className="text-xs text-muted-foreground">Manufacturer warranty</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-roofing-blue" />
                  <div className="text-sm font-medium">Quality</div>
                  <div className="text-xs text-muted-foreground">ISI certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-oswald font-semibold mb-4 text-industrial-base">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-roofing-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h3 className="text-xl font-oswald font-semibold mb-4 text-industrial-base">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-industrial-base">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-8 text-industrial-base">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="product-card group"
                  >
                    <div className="relative bg-light-gray overflow-hidden">
                      <div className="aspect-square w-full h-full flex items-center justify-center">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-industrial-base mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({relatedProduct.reviews})
                        </span>
                      </div>
                      <div className="text-lg font-bold text-industrial-base">
                        ₹{relatedProduct.price.toLocaleString()}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          {relatedProduct.unit}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
