import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const CartPage = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const [gstNumber, setGstNumber] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>('delivery');
  // Customer details will be collected on the checkout page

  const gstAmount = state.total * 0.18; // 18% GST
  const deliveryCharge = deliveryOption === 'delivery' ? 200 : 0;
  const finalTotal = state.total + gstAmount + deliveryCharge;

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: "Product removed from cart successfully.",
    });
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (state.items.length === 0) return;
    
    // Navigate to checkout page
    navigate('/checkout', {
      state: {
        deliveryOption,
        gstNumber,
        finalTotal
      }
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground/50" />
              <h1 className="text-3xl font-oswald font-bold mb-4 text-industrial-base">
                YOUR CART IS EMPTY
              </h1>
              <p className="text-muted-foreground mb-8">
                Add some products to your cart to get started with your order.
              </p>
              <Link to="/catalog" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-4 text-industrial-base">
              SHOPPING CART
            </h1>
            <div className="flex items-center gap-4">
              <Link to="/catalog" className="text-roofing-blue hover:underline flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{state.itemCount} items in cart</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg">
                <div className="p-6 border-b border-border">
                  <h2 className="text-xl font-oswald font-semibold text-industrial-base">
                    Cart Items
                  </h2>
                </div>
                
                <div className="divide-y divide-border">
                  {state.items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-light-gray rounded-lg overflow-hidden flex items-center justify-center">
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
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-industrial-base mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                          <p className="text-lg font-bold text-industrial-base">
                            ₹{item.price.toLocaleString()} <span className="text-sm font-normal">per {item.unit}</span>
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-light-gray"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-light-gray"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          
                          <div className="text-right min-w-[100px]">
                            <p className="font-bold text-industrial-base">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary & Checkout */}
            <div className="space-y-6">
              {/* Checkout Info */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-oswald font-semibold mb-4 text-industrial-base">
                  Ready to Checkout?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  You'll enter your delivery and payment details on the next page.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>GST invoice included</span>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-oswald font-semibold mb-4 text-industrial-base">
                  Delivery Options
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-light-gray">
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={deliveryOption === 'delivery'}
                      onChange={(e) => setDeliveryOption(e.target.value as 'delivery' | 'pickup')}
                      className="text-roofing-blue"
                    />
                    <Truck className="h-5 w-5 text-roofing-blue" />
                    <div className="flex-1">
                      <div className="font-medium">Home Delivery</div>
                      <div className="text-sm text-muted-foreground">₹200 delivery charge</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-light-gray">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value as 'delivery' | 'pickup')}
                      className="text-roofing-blue"
                    />
                    <MapPin className="h-5 w-5 text-roofing-blue" />
                    <div className="flex-1">
                      <div className="font-medium">Store Pickup</div>
                      <div className="text-sm text-muted-foreground">Free - Krishnagiri Store</div>
                    </div>
                  </label>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  {deliveryOption === 'delivery' ? (
                    <p>Delivery charges will be calculated at checkout</p>
                  ) : (
                    <p>Pick up from our Krishnagiri store</p>
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-oswald font-semibold mb-4 text-industrial-base">
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>₹{state.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span>₹{gstAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span>₹{deliveryCharge.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">GST Number (Optional)</label>
                  <input
                    type="text"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-roofing-blue"
                    placeholder="Enter GST number for business invoice"
                  />
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <p>🔒 Secure checkout • GST invoice included</p>
                  <p>We'll call you to confirm order details</p>
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

export default CartPage;