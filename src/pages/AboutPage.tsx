import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-6 text-industrial-base">
                  ABOUT SRI PACHAIAMMAN ROOFING & METALS
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Serving Krishnagiri and Tamil Nadu since 2015, we are your trusted partner for 
                  premium roofing materials, metals, hardware, and construction tools.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="trust-badge">
                    <Award className="h-5 w-5 mr-2" />
                    MSME Certified
                  </div>
                  <div className="trust-badge">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Quality Assured
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Sri Pachaiamman Roofing warehouse facility"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-industrial-base/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-oswald font-bold mb-8 text-center text-industrial-base">
              OUR STORY
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to provide high-quality construction materials at competitive prices, 
                Sri Pachaiamman Roofing & Metals has grown from a small local supplier to one of 
                Krishnagiri's most trusted construction material dealers.
              </p>
              <p className="text-lg text-muted-foreground">
                We understand the unique needs of both individual homeowners and large-scale contractors, 
                offering personalized service, bulk pricing, and reliable delivery across Tamil Nadu.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-oswald font-bold mb-12 text-center text-industrial-base">
              WHY CHOOSE US
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-xl mb-3 text-industrial-base">
                  QUALITY FIRST
                </h3>
                <p className="text-muted-foreground">
                  All our products are sourced from certified manufacturers and undergo 
                  strict quality checks before reaching our customers.
                </p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-xl mb-3 text-industrial-base">
                  COMPETITIVE PRICING
                </h3>
                <p className="text-muted-foreground">
                  Direct relationships with manufacturers allow us to offer the best prices 
                  without compromising on quality.
                </p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-xl mb-3 text-industrial-base">
                  EXPERT SUPPORT
                </h3>
                <p className="text-muted-foreground">
                  Our experienced team provides technical guidance and support to help you 
                  choose the right materials for your project.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-industrial-base text-white py-16 -mx-4 mb-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-oswald font-bold mb-2">8+</div>
                  <div className="text-industrial-light">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-oswald font-bold mb-2">5000+</div>
                  <div className="text-industrial-light">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-oswald font-bold mb-2">50+</div>
                  <div className="text-industrial-light">Product Categories</div>
                </div>
                <div>
                  <div className="text-4xl font-oswald font-bold mb-2">24/7</div>
                  <div className="text-industrial-light">Customer Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* MSME Certification */}
          <section className="text-center">
            <h2 className="text-3xl font-oswald font-bold mb-8 text-industrial-base">
              CERTIFIED & TRUSTED
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="trust-badge-large mb-6">
                <Award className="h-8 w-8 mr-3" />
                MSME Certified Business
              </div>
              <p className="text-lg text-muted-foreground">
                We are a government-certified MSME (Micro, Small & Medium Enterprises) business, 
                ensuring compliance with all regulatory standards and quality protocols.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;