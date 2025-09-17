import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
              CONTACT US
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our expert team for any queries, quotes, or support. 
              We're here to help with all your construction material needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-oswald font-bold mb-8 text-industrial-base">
                GET IN TOUCH
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-roofing-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-roofing-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-base mb-2">Visit Our Store</h3>
                    <p className="text-muted-foreground">
                      No 2/2-2A2, Agaram Road, Mempalam<br />
                      Kaveripattianam, Krishnagiri<br />
                      Tamil Nadu - 635112
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-roofing-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-roofing-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-base mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919976747413" className="hover:text-roofing-blue transition-colors">
                        +91 99767 47413
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-base mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick responses for urgent queries</p>
                    <a 
                      href="https://wa.me/919976747413?text=Hi, I need information about your products"
                      className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-roofing-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-roofing-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-base mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@roofingmetals.shop" className="hover:text-roofing-blue transition-colors">
                        contact@roofingmetals.shop
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-roofing-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-roofing-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-base mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8:00 AM - 7:00 PM<br />
                      Sunday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-light-gray rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Krishnagiri, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-oswald font-bold mb-8 text-industrial-base">
                SEND MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="price-quote">Price Quote</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="delivery">Delivery Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                    placeholder="Tell us about your requirements, project details, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-light-gray rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Need immediate assistance?</strong> Call us at 
                  <a href="tel:+919876543210" className="text-roofing-blue font-medium"> +91 98765 43210</a> or 
                  <a href="https://wa.me/919876543210" className="text-green-600 font-medium"> WhatsApp us</a> 
                  for quick responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;