import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const CatalogPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();
  const { toast } = useToast();

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Galvanized Roofing Sheets",
      category: "roofing",
      price: 850,
      unit: "per sheet",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      image: "/images/products/roofing-sheet.jpg",
      description: "Premium quality galvanized steel roofing sheets with 20-year warranty",
      specs: "Thickness: 0.5mm, Length: 8ft-12ft available"
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
      image: "/images/products/tmt-bars.jpg",
      description: "High strength TMT reinforcement bars Fe-500 grade",
      specs: "Grade: Fe-500, Length: 12m, ISI certified"
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
      image: "/images/products/roofing-screws.jpg",
      description: "Self-drilling roofing screws with EPDM washers",
      specs: "Size: 6.3x25mm to 6.3x75mm, Hex head with washer"
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
      image: "/images/products/angle-grinder.jpg",
      description: "Heavy duty angle grinder for metal cutting and grinding",
      specs: "Power: 850W, Disc size: 115mm, Speed: 11000 RPM"
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
      image: "/images/products/concrete-mixer.jpg",
      description: "Heavy duty diesel concrete mixer for construction sites",
      specs: "Capacity: 10/7 CFT, Engine: 7HP, Drum Speed: 24-28 RPM"
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
      image: "/images/products/safety-helmet.jpg",
      description: "High visibility safety helmet with clear visor",
      specs: "Material: HDPE, Weight: 400g, IS 2925:1984 certified"
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
      image: "/images/products/scaffolding.jpg",
      description: "Heavy duty steel scaffolding for construction work",
      specs: "Height: 2m, Load capacity: 300kg, Includes: 4 frames, 4 cross braces, 4 base jacks"
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
      image: "/images/products/power-drill.jpg",
      description: "Cordless hammer drill with 2 batteries",
      specs: "Voltage: 20V, Torque: 50Nm, Chuck Size: 13mm, Battery: 2.0Ah Li-ion"
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
      image: "/images/products/waterproofing.jpg",
      description: "Premium quality waterproofing compound for roofs",
      specs: "Coverage: 50 sq.ft per kg (2 coats), Drying time: 4-6 hours, Waterproofing: 10 years"
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
      image: "/images/products/ladder.jpg",
      description: "Lightweight yet sturdy aluminum extension ladder",
      specs: "Material: Aluminum 6063-T6, Max Load: 150kg, Steps: 8, Weight: 12.5kg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'roofing', name: 'Roofing Materials', count: products.filter(p => p.category === 'roofing').length },
    { id: 'metals', name: 'Metals & Steel', count: products.filter(p => p.category === 'metals').length },
    { id: 'hardware', name: 'Hardware & Fasteners', count: products.filter(p => p.category === 'hardware').length },
    { id: 'tools', name: 'Tools & Equipment', count: products.filter(p => p.category === 'tools').length },
    { id: 'machinery', name: 'Machinery', count: products.filter(p => p.category === 'machinery').length },
    { id: 'safety', name: 'Safety Equipment', count: products.filter(p => p.category === 'safety').length },
    { id: 'scaffolding', name: 'Scaffolding', count: products.filter(p => p.category === 'scaffolding').length },
    { id: 'chemicals', name: 'Chemicals', count: products.filter(p => p.category === 'chemicals').length },
    { id: 'access', name: 'Access Equipment', count: products.filter(p => p.category === 'access').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      category: product.category
    });
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
              PRODUCT CATALOG
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive range of construction materials and tools
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h3 className="font-oswald font-semibold text-lg mb-4 text-industrial-base">
                  FILTERS
                </h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-roofing-blue text-white'
                            : 'hover:bg-light-gray'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm opacity-75">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="lg:w-3/4">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-roofing-blue text-white' : 'bg-light-gray'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-roofing-blue text-white' : 'bg-light-gray'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {filteredProducts.map((product) => (
                  <div key={product.id} className={viewMode === 'grid' ? 'product-card' : 'product-card flex flex-row'}>
                    {/* Product Image */}
                    <div className="relative bg-light-gray p-4 min-h-[120px] flex items-center justify-center">
                      <div className="absolute top-2 right-2">
                        {product.inStock ? (
                          <span className="trust-badge text-xs">In Stock</span>
                        ) : (
                          <span className="bg-destructive text-white px-2 py-1 rounded text-xs">Out of Stock</span>
                        )}
                      </div>
                      <div className="text-center p-4">
                        <div className="text-muted-foreground text-sm">
                          Image coming soon
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1">
                      <div className="text-sm text-roofing-blue font-medium mb-1">
                        {categories.find(c => c.id === product.category)?.name}
                      </div>
                      <h3 className="font-oswald font-semibold text-lg mb-2 text-industrial-base">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <p className="text-xs font-specs text-muted-foreground mb-4">
                        {product.specs}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-industrial-base">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2">
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="w-full btn-secondary flex items-center justify-center"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <div className="flex gap-2">
                          <Link 
                            to={`/bulk-inquiry?product=${product.id}`}
                            className="flex-1 btn-outline text-center text-sm py-2"
                          >
                            Bulk Quote
                          </Link>
                          <a 
                            href={`https://wa.me/919876543210?text=Hi, I'm interested in ${product.name}`}
                            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm text-center hover:bg-green-700 transition-colors flex items-center justify-center"
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-oswald font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;