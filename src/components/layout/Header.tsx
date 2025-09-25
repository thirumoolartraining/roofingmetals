import { useState } from "react";
import { Menu, X, Phone, MessageCircle, ShoppingCart, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium";
    const activeClasses = "text-roofing-blue border-b-2 border-roofing-blue pb-1";
    const inactiveClasses = "text-foreground hover:text-roofing-blue";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block py-2 transition-colors";
    const activeClasses = "text-roofing-blue font-semibold bg-blue-50 px-3 rounded";
    const inactiveClasses = "text-foreground hover:text-roofing-blue";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>📍 Krishnagiri, Tamil Nadu</span>
            <span>MSME Certified</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919976747413" className="flex items-center gap-1 text-roofing-blue hover:text-safety-orange transition-colors">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href="https://wa.me/919976747413" className="flex items-center gap-1 text-roofing-blue hover:text-safety-orange transition-colors">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-oswald font-bold text-industrial-base">
              SRI PACHAIAMMAN
              <div className="text-sm text-roofing-blue font-medium">ROOFING & METALS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/catalog" className={getLinkClasses('/catalog')}>
              Products
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              About
            </Link>
            <Link to="/bulk-inquiry" className={getLinkClasses('/bulk-inquiry')}>
              Bulk Orders
            </Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/bulk-inquiry" className="btn-outline">
              <FileText className="h-4 w-4 mr-2" />
              Request Quote
            </Link>
            <Link to="/cart" className={`btn-secondary relative ${isActive('/cart') ? 'bg-roofing-blue text-white' : ''}`}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-safety-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <Link to="/" className={getMobileLinkClasses('/')}>
                Home
              </Link>
              <Link to="/catalog" className={getMobileLinkClasses('/catalog')}>
                Products
              </Link>
              <Link to="/about" className={getMobileLinkClasses('/about')}>
                About
              </Link>
              <Link to="/bulk-inquiry" className={getMobileLinkClasses('/bulk-inquiry')}>
                Bulk Orders
              </Link>
              <Link to="/contact" className={getMobileLinkClasses('/contact')}>
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link to="/bulk-inquiry" className="btn-outline text-center">
                  Request Quote
                </Link>
                <Link to="/cart" className={`btn-secondary text-center ${isActive('/cart') ? 'bg-roofing-blue text-white' : ''}`}>
                  Cart {state.itemCount > 0 && `(${state.itemCount})`}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;