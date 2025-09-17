import { Phone, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-roofing-blue to-safety-orange">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get instant quotes, expert advice, and fast delivery for all your construction material needs
          </p>
          
          {/* CTA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone CTA */}
            <a 
              href="tel:+919876543210"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
            >
              <Phone className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-oswald font-semibold text-lg mb-2">CALL NOW</h3>
              <p className="text-sm opacity-90 mb-3">Immediate assistance and quotes</p>
              <div className="font-bold text-lg">+91 98765 43210</div>
            </a>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/919876543210?text=Hi, I need construction materials"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
            >
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-oswald font-semibold text-lg mb-2">WHATSAPP US</h3>
              <p className="text-sm opacity-90 mb-3">Quick chat for instant support</p>
              <div className="font-bold text-lg">Message Now</div>
            </a>

            {/* Bulk Quote CTA */}
            <Link 
              to="/bulk-inquiry"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
            >
              <FileText className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-oswald font-semibold text-lg mb-2">BULK ORDERS</h3>
              <p className="text-sm opacity-90 mb-3">Get special pricing for large orders</p>
              <div className="font-bold text-lg flex items-center justify-center">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-sm opacity-90">
            <p>Available Mon-Sat: 9 AM - 7 PM | Sunday: 10 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;