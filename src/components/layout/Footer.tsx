import { MapPin, Phone, Mail, Clock, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="industrial-section">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-oswald font-bold text-white mb-4">
              SRI PACHAIAMMAN
              <div className="text-sm text-safety-orange font-medium">ROOFING & METALS</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium quality roofing materials, metals, hardware, and tools supplier serving contractors and homeowners across Tamil Nadu since 2018.
            </p>
            <div className="flex items-center gap-2 text-success-green mb-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium text-white">MSME Certified</span>
            </div>
            <div className="flex items-center gap-2 text-success-green mb-2">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium text-white">Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 text-success-green">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium text-white">Fast Delivery</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-oswald font-semibold text-white mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-safety-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/bulk-inquiry" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-oswald font-semibold text-white mb-6 uppercase">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog?category=roofing" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Roofing Materials
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=metals" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Metals & Steel
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=hardware" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Hardware & Fasteners
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=tools" className="text-gray-300 hover:text-safety-orange transition-colors">
                  Tools & Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-oswald font-semibold text-white mb-6 uppercase">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-safety-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Address</div>
                  <div className="text-gray-300 text-sm">
                    No 2/2-2A2, Agaram Road, Mempalam<br />
                    Kaveripattianam, Krishnagiri<br />
                    Tamil Nadu - 635112
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-safety-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <a href="tel:+919976747413" className="text-gray-300 text-sm hover:text-safety-orange transition-colors">
                    +91 99767 47413
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-safety-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <a href="mailto:contact@roofingmetals.shop" className="text-gray-300 text-sm hover:text-safety-orange transition-colors">
                    contact@roofingmetals.shop
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-safety-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Business Hours</div>
                  <div className="text-gray-300 text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 Sri Pachaiamman Roofing & Metals. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-safety-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-safety-orange transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/shipping-policy" className="text-gray-300 hover:text-safety-orange transition-colors">
                Shipping Policy
              </Link>
              <Link to="/cancellation-refund-policy" className="text-gray-300 hover:text-safety-orange transition-colors">
                Cancellation & Refund Policy
              </Link>
              <Link to="/gst" className="text-gray-300 hover:text-safety-orange transition-colors">
                GST Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;