import { Star, ShoppingCart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  // Featured products - limited to 4 best-selling items
  const products = [
    {
      id: 1,
      name: "Galvanized Roofing Sheets",
      category: "Roofing",
      price: 850,
      unit: "per sheet",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      image: "/images/products/roofing-sheet.jpg",
      description: "Premium quality galvanized steel roofing sheets"
    },
    {
      id: 2,
      name: "Steel TMT Bars 12mm",
      category: "Metals",
      price: 65000,
      unit: "per tonne",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      image: "/images/products/tmt-bars.jpg",
      description: "High strength TMT reinforcement bars"
    },
    {
      id: 6,
      name: "Safety Helmet with Visor",
      category: "Safety",
      price: 899,
      unit: "each",
      rating: 4.9,
      reviews: 231,
      inStock: true,
      image: "/images/products/safety-helmet.jpg",
      description: "High visibility safety helmet with clear visor"
    },
    {
      id: 8,
      name: "Power Drill Machine",
      category: "Tools",
      price: 4200,
      unit: "each",
      rating: 4.8,
      reviews: 145,
      inStock: true,
      image: "/images/products/power-drill.jpg",
      description: "Cordless hammer drill with 2 batteries"
    }
  ];

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
              FEATURED PRODUCTS
            </h2>
            <p className="text-lg text-muted-foreground">
              Best selling and most trusted products by our customers
            </p>
          </div>
          <Link to="/catalog" className="btn-secondary hidden lg:inline-flex">
            View All Products
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Image & Status */}
              <div className="relative bg-light-gray p-6 min-h-[180px] flex items-center justify-center">
                <div className="absolute top-3 right-3">
                  {product.inStock ? (
                    <span className="trust-badge text-xs">In Stock</span>
                  ) : (
                    <span className="bg-destructive text-white px-2 py-1 rounded text-xs">Out of Stock</span>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">
                    Image coming soon
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-roofing-blue font-medium mb-1">
                  {product.category}
                </div>
                <h3 className="font-oswald font-semibold text-lg mb-2 text-industrial-base">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
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

        {/* Mobile View All Button */}
        <div className="text-center mt-8 lg:hidden">
          <Link to="/catalog" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;