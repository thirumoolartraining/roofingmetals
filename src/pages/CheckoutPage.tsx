import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, User, Phone, Mail, MapPin, Truck, CreditCard, Shield, Lock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const CheckoutPage = () => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { deliveryOption = 'delivery', finalTotal } = location.state || {};
  const [gstNumber, setGstNumber] = useState('');

  // Form state
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India'
  });
  
  const [paymentMethod, setPaymentMethod] = useState('debit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 0,
    gstAmount: 0,
    deliveryCharge: 0,
    total: 0
  });

  // Calculate order summary
  const gstAmount = state.total * 0.18;
  const deliveryCharge = deliveryOption === 'delivery' ? 200 : 0;
  const orderTotal = state.total + gstAmount + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!customerDetails.name || !customerDetails.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (deliveryOption === 'delivery' && (!customerDetails.address || !customerDetails.pincode || !customerDetails.city || !customerDetails.state || !customerDetails.country)) {
      toast({
        title: "Address Incomplete",
        description: "Please provide complete delivery address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Generate order ID
    const newOrderId = (Math.random() * 1000000).toFixed(0).padStart(6, '0');
    setOrderId(newOrderId);
    
    // Store order details before clearing cart
    setOrderDetails({
      subtotal: state.total,
      gstAmount,
      deliveryCharge,
      total: orderTotal
    });
    
    // Simulate API call
    setTimeout(() => {
      console.log('Order submitted:', {
        orderId: newOrderId,
        ...customerDetails,
        items: state.items,
        subtotal: state.total,
        gstAmount,
        deliveryCharge,
        total: orderTotal,
        paymentMethod,
        gstNumber: gstNumber || 'Not provided'
      });
      
      setIsSubmitting(false);
      setIsOrderPlaced(true);
      clearCart();
      
      // Scroll to order confirmation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-green-50">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-oswald font-bold text-green-800">
                      Order Confirmed! 🎉
                    </h1>
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Order #{orderId}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your order!</h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Your order has been received and is being processed. We'll contact you shortly to confirm the details.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto text-left mb-8">
                      <h3 className="font-medium text-gray-900 mb-3">Order Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Order Number:</span>
                          <span className="font-medium">#{orderId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span>{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal:</span>
                          <span>₹{orderDetails.subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GST (18%):</span>
                          <span>₹{orderDetails.gstAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery:</span>
                          <span>₹{orderDetails.deliveryCharge.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                          <span className="text-gray-900 font-bold">Total:</span>
                          <span className="font-bold text-lg">₹{orderDetails.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Method:</span>
                          <span className="capitalize">{paymentMethod}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => navigate(`/order-status/${orderId}`)}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        View Order Status
                      </button>
                      <button
                        onClick={() => navigate('/catalog')}
                        className="px-6 py-3 bg-roofing-blue text-white rounded-md hover:bg-roofing-blue/90 transition-colors"
                      >
                        Continue Shopping
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Print Receipt
                      </button>
                      <button
                        onClick={() => window.open(`https://wa.me/?text=Hi%20I%20have%20placed%20an%20order%20with%20Roofing%20Metals.%20Order%20Number:%20${orderId}.%20Total:%20%u20B9${orderTotal.toLocaleString()}.%20Please%20contact%20me%20for%20any%20queries.`)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Share Order Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-roofing-blue hover:underline mr-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Cart
              </button>
              <h1 className="text-3xl font-oswald font-bold text-industrial-base">
                Checkout
              </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Customer & Payment Info */}
              <div className="md:col-span-2 space-y-6">
                {/* Customer Information */}
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                      <User className="h-5 w-5 mr-2 text-roofing-blue" />
                      Contact Information
                    </h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={customerDetails.name}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={customerDetails.phone}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={customerDetails.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Delivery Information */}
                  <div className="p-6 border-t border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
                      <Truck className="h-5 w-5 mr-2 text-roofing-blue" />
                      {deliveryOption === 'delivery' ? 'Delivery Address' : 'Pickup Information'}
                    </h2>
                    
                    {deliveryOption === 'delivery' ? (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Complete Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute top-3 left-3">
                              <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <textarea
                              id="address"
                              name="address"
                              value={customerDetails.address}
                              onChange={handleInputChange}
                              rows={3}
                              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                              placeholder="House/Flat No., Building, Street, Area"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              City <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={customerDetails.city}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                              placeholder="Your city"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                              State/Province <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={customerDetails.state}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                              placeholder="Your state/province"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                              Pincode/Postal Code <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              value={customerDetails.pincode}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                              placeholder="635001"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                              Country <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="country"
                              name="country"
                              value={customerDetails.country}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                              required
                            >
                              <option value="India">🇮🇳 India (GST: 18%)</option>
                              <option value="United States">🇺🇸 United States (Tax: 8-12%)</option>
                              <option value="China">🇨🇳 China (VAT: 13%)</option>
                              <option value="Japan">🇯🇵 Japan (Tax: 10%)</option>
                              <option value="Germany">🇩🇪 Germany (VAT: 19%)</option>
                              <option value="United Kingdom">🇬🇧 United Kingdom (VAT: 20%)</option>
                              <option value="France">🇫🇷 France (VAT: 20%)</option>
                              <option value="Italy">🇮🇹 Italy (VAT: 22%)</option>
                              <option value="Brazil">🇧🇷 Brazil (Tax: 17-25%)</option>
                              <option value="Canada">🇨🇦 Canada (GST/HST: 5-15%)</option>
                              <option value="Russia">🇷🇺 Russia (VAT: 20%)</option>
                              <option value="South Korea">🇰🇷 South Korea (VAT: 10%)</option>
                              <option value="Australia">🇦🇺 Australia (GST: 10%)</option>
                              <option value="Mexico">🇲🇽 Mexico (IVA: 16%)</option>
                              <option value="Indonesia">🇮🇩 Indonesia (VAT: 11%)</option>
                              <option value="Turkey">🇹🇷 Turkey (KDV: 18%)</option>
                              <option value="Saudi Arabia">🇸🇦 Saudi Arabia (VAT: 15%)</option>
                              <option value="Argentina">🇦🇷 Argentina (IVA: 21%)</option>
                              <option value="South Africa">🇿🇦 South Africa (VAT: 15%)</option>
                              <option value="European Union">🇪🇺 European Union (VAT: 17-27%)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-medium text-gray-900 mb-2">Pickup Address</h3>
                        <p className="text-gray-700">Krishnagiri Forge & Hardware</p>
                        <p className="text-gray-600">No 2/2-2A2, Agaram Road, Mempalam</p>
                        <p className="text-gray-600">Kaveripattianam, Krishnagiri</p>
                        <p className="text-gray-600">Tamil Nadu - 635112</p>
                        <p className="text-gray-600 mt-2">Phone: +91 99767 47413</p>
                        <p className="text-sm text-gray-500 mt-3">
                          Our team will prepare your order for pickup. We'll notify you when it's ready.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Payment Method */}
                  <div className="p-6 border-t border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Select Payment Method
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <button
                        type="button"
                        className={`p-4 text-center rounded-lg border transition-colors ${paymentMethod === 'debit' ? 'border-roofing-blue bg-blue-50 text-roofing-blue font-medium' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setPaymentMethod('debit')}
                      >
                        💳 Debit Card
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 text-center rounded-lg border transition-colors ${paymentMethod === 'credit' ? 'border-roofing-blue bg-blue-50 text-roofing-blue font-medium' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setPaymentMethod('credit')}
                      >
                        💳 Credit Card
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 text-center rounded-lg border transition-colors ${paymentMethod === 'netbanking' ? 'border-roofing-blue bg-blue-50 text-roofing-blue font-medium' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setPaymentMethod('netbanking')}
                      >
                        🏦 Internet Banking
                      </button>
                    </div>
                  </div>
                  
                  {/* GST Information */}
                  <div className="p-6 border-t border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">GST Details (Optional)</h2>
                    <div>
                      <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        GSTIN Number
                      </label>
                      <input
                        type="text"
                        id="gstNumber"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-roofing-blue focus:border-roofing-blue"
                        placeholder="22AAAAA0000A1Z5"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Enter your GSTIN to claim input tax credit (if applicable)
                      </p>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 text-roofing-blue focus:ring-roofing-blue border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the <a href="/terms" className="text-roofing-blue hover:underline">Terms & Conditions</a> and{' '}
                          <a href="/privacy" className="text-roofing-blue hover:underline">Privacy Policy</a>
                        </label>
                        <p className="text-gray-500 mt-1">
                          By placing this order, you agree to our terms and conditions. Your personal data will be used to process your order and for other purposes described in our privacy policy.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-roofing-blue hover:bg-roofing-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roofing-blue disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        `Place Order • ₹${orderTotal.toLocaleString()}`
                      )}
                    </button>
                    
                    <p className="mt-3 text-center text-xs text-gray-500">
                      <Lock className="h-3 w-3 inline-block mr-1" />
                      Your payment is secure and encrypted. We never store your credit card details.
                    </p>
                  </div>
                </form>
              </div>
              
              {/* Right Column - Order Summary */}
              <div className="md:sticky md:top-6 h-fit">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Order Summary
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    {/* Order Items */}
                    <div className="space-y-4 mb-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        {state.itemCount} {state.itemCount === 1 ? 'Item' : 'Items'} in Cart
                      </h3>
                      
                      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 -mr-2">
                        {state.items.map((item) => (
                          <div key={item.id} className="flex items-start">
                            <div className="h-16 w-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/placeholder.svg';
                                }}
                              />
                            </div>
                            
                            <div className="ml-4 flex-1">
                              <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Order Summary */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal</span>
                          <span>₹{state.total.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">GST (18%)</span>
                          <span>₹{gstAmount.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            {deliveryOption === 'delivery' ? 'Delivery Charges' : 'Pickup'}
                          </span>
                          <span>
                            {deliveryOption === 'delivery' 
                              ? `₹${deliveryCharge.toLocaleString()}` 
                              : 'Free'}
                          </span>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <span>Total</span>
                            <span>₹{orderTotal.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <Shield className="h-4 w-4 mr-1.5 text-green-500" />
                      Secure checkout with 256-bit SSL encryption
                    </div>
                  </div>
                </div>
                
                {/* Help Section */}
                <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Need help with your order?</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-medium">Call us:</span>{' '}
                        <a href="tel:+919876543210" className="text-roofing-blue hover:underline">
                          +91 98765 43210
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Email us:</span>{' '}
                        <a href="mailto:support@krishnagiriforge.com" className="text-roofing-blue hover:underline">
                          support@krishnagiriforge.com
                        </a>
                      </p>
                      <p className="mt-3 text-xs text-gray-500">
                        Our customer service is available 24/7 to assist you with any questions or concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
