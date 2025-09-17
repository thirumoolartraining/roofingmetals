import { ArrowRight, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl text-white">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-success-green" />
            <span className="trust-badge">MSME Certified Supplier</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-oswald font-bold mb-6 leading-tight">
            TRUSTED ROOFING & METALS SUPPLIER
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl">
            Premium quality roofing materials, metals, hardware, and tools for contractors and homeowners across Tamil Nadu
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-success-green" />
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success-green" />
              <span className="font-medium">Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-success-green" />
              <span className="font-medium">Bulk Ready</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalog" className="btn-hero inline-flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/bulk-inquiry" className="btn-outline text-white border-white hover:bg-white hover:text-industrial-base inline-flex items-center justify-center">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;