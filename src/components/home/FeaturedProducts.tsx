import { Star, ShoppingCart, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
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
      image: "/catalog/1.jpg",
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
      image: "/catalog/2.jpg",
      description: "High strength TMT reinforcement bars"
    },
    {
      id: 3,
      name: "Roofing Screws Set",
      category: "Hardware",
      price: 1200,
      unit: "per 100 pcs",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      image: "/catalog/3.jpg",
      description: "Self-drilling roofing screws with EPDM washers"
    },
    {
      id: 4,
      name: "Angle Grinder 4 Inch",
      category: "Tools",
      price: 3500,
      unit: "each",
      rating: 4.6,
      reviews: 67,
      inStock: true,
      image: "/catalog/4.jpg",
      description: "Heavy duty angle grinder for metal cutting and grinding"
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
            <div key={product.id} className="product-card group cursor-pointer flex flex-col" onClick={() => navigate(`/product/${product.id}`)}>
              {/* Product Image & Status */}
              <div className="relative bg-light-gray overflow-hidden">
                <div className="absolute top-3 right-3 z-10">
                  {product.inStock ? (
                    <span className="trust-badge text-xs">In Stock</span>
                  ) : (
                    <span className="bg-destructive text-white px-2 py-1 rounded text-xs">Out of Stock</span>
                  )}
                </div>
                <div className="aspect-square w-full h-full flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: 'center' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col">
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

                {/* Spacer for alignment */}
                <div className="flex-1"></div>
                
                {/* Actions */}
                <div className="space-y-2 mt-auto">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      Bulk Quote
                    </Link>
                    <a 
                      href={`https://wa.me/919876543210?text=Hi, I'm interested in ${product.name}`}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm text-center hover:bg-green-700 transition-colors flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
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