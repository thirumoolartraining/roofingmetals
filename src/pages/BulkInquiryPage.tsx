import { useState } from "react";
import { Upload, FileText, Send, Package, Calculator, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const BulkInquiryPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    projectType: '',
    timeline: '',
    requirements: '',
    gstNumber: ''
  });
  const [selectedProducts, setSelectedProducts] = useState<Array<{
    product: string;
    quantity: string;
    unit: string;
  }>>([{ product: '', quantity: '', unit: 'pieces' }]);
  
  const { toast } = useToast();

  const productCategories = [
    'Galvanized Roofing Sheets',
    'Steel TMT Bars',
    'Roofing Screws & Fasteners',
    'Angle Grinders & Tools',
    'Metal Angles & Channels',
    'Cement & Building Materials',
    'Pipes & Fittings',
    'Other (Please specify)'
  ];

  const units = ['pieces', 'kg', 'tonnes', 'meters', 'sq ft', 'bundles', 'boxes'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleProductChange = (index: number, field: string, value: string) => {
    setSelectedProducts(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, { product: '', quantity: '', unit: 'pieces' }]);
  };

  const removeProduct = (index: number) => {
    if (selectedProducts.length > 1) {
      setSelectedProducts(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bulk Inquiry Submitted!",
      description: "Our team will contact you within 2-4 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      projectType: '',
      timeline: '',
      requirements: '',
      gstNumber: ''
    });
    setSelectedProducts([{ product: '', quantity: '', unit: 'pieces' }]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
                BULK INQUIRY & QUOTES
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get competitive wholesale prices for your construction projects. 
                Fill out the form below and our experts will prepare a customized quote within hours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-lg mb-2 text-industrial-base">
                  BEST WHOLESALE PRICES
                </h3>
                <p className="text-sm text-muted-foreground">
                  Competitive rates for bulk orders with volume discounts
                </p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-lg mb-2 text-industrial-base">
                  FLEXIBLE DELIVERY
                </h3>
                <p className="text-sm text-muted-foreground">
                  Direct delivery to your project site across Tamil Nadu
                </p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-roofing-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-roofing-blue" />
                </div>
                <h3 className="font-oswald font-semibold text-lg mb-2 text-industrial-base">
                  GST COMPLIANT
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proper GST invoicing and documentation for B2B orders
                </p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-oswald font-bold mb-6 text-industrial-base">
                  COMPANY INFORMATION
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Company/Organization Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="Your name"
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

                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      GST Number
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      placeholder="Enter GST number (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-industrial-base">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Project</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="renovation">Renovation/Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="month">Within a month</option>
                    <option value="quarter">Next 3 months</option>
                    <option value="planning">Planning phase</option>
                  </select>
                </div>
              </div>

              {/* Product Requirements */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-oswald font-bold mb-6 text-industrial-base">
                  PRODUCT REQUIREMENTS
                </h2>
                
                {selectedProducts.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-4 gap-4 mb-4 p-4 bg-light-gray rounded-lg">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2 text-industrial-base">
                        Product/Material *
                      </label>
                      <select
                        value={item.product}
                        onChange={(e) => handleProductChange(index, 'product', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                      >
                        <option value="">Select product</option>
                        {productCategories.map(product => (
                          <option key={product} value={product}>{product}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-industrial-base">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                        required
                        min="1"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2 text-industrial-base">
                          Unit
                        </label>
                        <select
                          value={item.unit}
                          onChange={(e) => handleProductChange(index, 'unit', e.target.value)}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                        >
                          {units.map(unit => (
                            <option key={unit} value={unit}>{unit}</option>
                          ))}
                        </select>
                      </div>
                      
                      {selectedProducts.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeProduct(index)}
                          className="mt-7 px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={addProduct}
                  className="w-full py-3 border-2 border-dashed border-roofing-blue text-roofing-blue rounded-md hover:bg-roofing-blue/5 transition-colors"
                >
                  + Add Another Product
                </button>
              </div>

              {/* Additional Requirements */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-oswald font-bold mb-6 text-industrial-base">
                  ADDITIONAL REQUIREMENTS
                </h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Detailed Requirements & Specifications
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-transparent"
                    placeholder="Please provide detailed specifications, quality requirements, delivery address, and any other important information for your project..."
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2 text-industrial-base">
                    Upload Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">
                      Upload project drawings, specifications, or requirement list
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: PDF, DOC, XLS, JPG, PNG (Max 10MB)
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                      className="mt-4 block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-roofing-blue file:text-white hover:file:bg-roofing-blue/90"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-3 mx-auto"
                >
                  <Send className="h-5 w-5" />
                  Submit Bulk Inquiry
                </button>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/919876543210?text=Hi, I need a bulk quote for construction materials"
                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp for Immediate Response
                  </a>
                  
                  <a 
                    href="tel:+919876543210"
                    className="btn-outline px-6 py-3 text-center"
                  >
                    Call: +91 98765 43210
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Our team will review your inquiry and send you a detailed quote within 2-4 hours during business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BulkInquiryPage;