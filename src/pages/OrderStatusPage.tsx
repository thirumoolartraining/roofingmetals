import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const OrderStatusPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock order data - in real app, this would come from an API
  useEffect(() => {
    const mockOrderData = {
      orderId: orderId || '123456',
      orderDate: '2025-01-25',
      status: 'processing',
      customerName: 'John Doe',
      customerPhone: '+91 98765 43210',
      customerEmail: 'john.doe@example.com',
      deliveryAddress: {
        address: '123 Main Street, Apartment 4B',
        city: 'Krishnagiri',
        state: 'Tamil Nadu',
        pincode: '635001',
        country: 'India'
      },
      paymentMethod: 'debit',
      items: [
        {
          id: 1,
          name: 'Galvanized Roofing Sheets',
          quantity: 2,
          price: 850,
          unit: 'per sheet',
          image: '/catalog/1.jpg'
        },
        {
          id: 2,
          name: 'Steel TMT Bars 12mm',
          quantity: 1,
          price: 65000,
          unit: 'per tonne',
          image: '/catalog/2.jpg'
        }
      ],
      subtotal: 66700,
      gstAmount: 12006,
      deliveryCharge: 200,
      total: 78906,
      estimatedDelivery: '2025-01-30',
      trackingSteps: [
        { status: 'confirmed', label: 'Order Confirmed', date: '2025-01-25', time: '10:30 AM', completed: true },
        { status: 'processing', label: 'Processing', date: '2025-01-25', time: '02:15 PM', completed: true },
        { status: 'shipped', label: 'Shipped', date: '2025-01-27', time: '', completed: false },
        { status: 'delivered', label: 'Delivered', date: '2025-01-30', time: '', completed: false }
      ]
    };

    // Simulate API call delay
    setTimeout(() => {
      setOrderData(mockOrderData);
      setLoading(false);
    }, 1000);
  }, [orderId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
    
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-roofing-blue mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-oswald font-bold mb-4 text-industrial-base">Order Not Found</h1>
            <p className="text-muted-foreground mb-8">The order you're looking for doesn't exist or has been removed.</p>
            <Link to="/catalog" className="btn-primary">
              Continue Shopping
            </Link>
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-roofing-blue">Home</Link>
            <span>/</span>
            <Link to="/cart" className="hover:text-roofing-blue">Cart</Link>
            <span>/</span>
            <span className="text-industrial-base">Order Status</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-roofing-blue hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Status Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-oswald font-bold text-industrial-base">
                    Order #{orderData.orderId}
                  </h1>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(orderData.status)}`}>
                    {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                  </div>
                </div>

                {/* Order Timeline */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-industrial-base mb-4">Order Timeline</h2>
                  <div className="space-y-4">
                    {orderData.trackingSteps.map((step: any, index: number) => (
                      <div key={step.status} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`p-2 rounded-full ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                            {getStatusIcon(step.status, step.completed)}
                          </div>
                          {index < orderData.trackingSteps.length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${step.completed ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <h3 className={`font-medium ${step.completed ? 'text-industrial-base' : 'text-muted-foreground'}`}>
                            {step.label}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.date} {step.time && `at ${step.time}`}
                          </p>
                          {step.status === 'delivered' && !step.completed && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Estimated delivery date
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Items */}
                <div className="border-t border-border pt-6 mt-6">
                  <h2 className="text-xl font-semibold text-industrial-base mb-4">Order Items</h2>
                  <div className="space-y-4">
                    {orderData.items.map((item: any) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-light-gray rounded-lg">
                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex items-center justify-center">
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
                          <h3 className="font-medium text-industrial-base">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          <p className="text-sm font-medium">₹{item.price.toLocaleString()} {item.unit}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-industrial-base">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Customer Details */}
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-industrial-base mb-4">Customer Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-muted-foreground">Name:</div>
                    <div className="font-medium">{orderData.customerName}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>{orderData.customerPhone}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>{orderData.customerEmail}</div>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-industrial-base mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Address
                </h3>
                <div className="text-sm space-y-1">
                  <p>{orderData.deliveryAddress.address}</p>
                  <p>{orderData.deliveryAddress.city}, {orderData.deliveryAddress.state}</p>
                  <p>{orderData.deliveryAddress.pincode}</p>
                  <p>{orderData.deliveryAddress.country}</p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-industrial-base mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Order Date:</span>
                    <span>{new Date(orderData.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="capitalize">{orderData.paymentMethod} Card</span>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span>₹{orderData.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">GST (18%):</span>
                      <span>₹{orderData.gstAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span>₹{orderData.deliveryCharge.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>₹{orderData.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Estimated Delivery
                </h3>
                <p className="text-blue-800">
                  {new Date(orderData.estimatedDelivery).toLocaleDateString('en-IN', { 
                    weekday: 'long',
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link 
                  to="/catalog" 
                  className="w-full btn-primary text-center block"
                >
                  Continue Shopping
                </Link>
                <button 
                  onClick={() => window.print()}
                  className="w-full btn-outline"
                >
                  Print Order Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderStatusPage;
