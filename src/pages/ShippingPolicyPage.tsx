import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ErrorBoundary } from 'react-error-boundary';

// Error boundary fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-700 mb-6">We're sorry, but we encountered an error while loading this page.</p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-sm font-mono text-red-600">{error.message}</p>
        </div>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-roofing-blue text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const ShippingPolicyContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Shipping Policy - Sri Pachaiamman Roofing & Metals</title>
        <meta name="description" content="Learn about our shipping policies, delivery timelines, and handling procedures for construction materials and roofing supplies." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-roofing-blue text-white p-6">
                <h1 className="text-3xl font-bold mb-2">Shipping Policy</h1>
                <p className="text-blue-100">Safe, Reliable & On-Time Delivery of Construction Materials</p>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                <section className="space-y-4">
                  <p className="text-gray-700">
                    At Sri Pachaiamman Roofing & Metals, we understand that timely and secure delivery of roofing sheets, hardware, and metals is critical for your projects. This Shipping Policy outlines how we process, package, and deliver orders—ensuring transparency and reliability for both wholesale and retail customers.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Order Processing Time</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Orders are processed within 2–4 business days of payment confirmation or approval of trade terms.</li>
                    <li>Orders placed on Sundays or public holidays will be processed the next working day.</li>
                    <li>Large wholesale or custom orders may require additional processing time, and customers will be notified accordingly.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Shipping Destinations & Delivery Timelines</h2>
                  <h3 className="text-xl font-medium text-gray-800 mt-2">Domestic Delivery (India)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><span className="font-medium">Tamil Nadu & Nearby States:</span> 3–7 business days after dispatch</li>
                    <li><span className="font-medium">Rest of India:</span> 7–12 business days depending on distance and load size</li>
                  </ul>
                  <h3 className="text-xl font-medium text-gray-800 mt-4">International Shipping</h3>
                  <p className="text-gray-700 pl-6">
                    Export support may be provided for wholesale clients upon request.
                    Timelines vary based on destination country, customs clearance, and freight schedules.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Shipping Charges</h2>
                  <p className="text-gray-700">Charges are calculated based on:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Weight & dimensions of materials</li>
                    <li>Distance from dispatch location</li>
                    <li>Order size (retail or bulk)</li>
                  </ul>
                  <p className="text-gray-700">
                    Freight charges will be clearly communicated at the time of order confirmation.
                    Customers are responsible for any applicable taxes, duties, or customs charges.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Packaging & Handling</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Materials are carefully bundled, strapped, or palletized to prevent transit damage.</li>
                    <li>Heavy items are loaded using proper lifting equipment to ensure safety.</li>
                    <li>Weather-protective covers are used for roofing sheets and metals during long-distance transport.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Delivery Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Customers must provide accurate delivery details and ensure the site is accessible for trucks or heavy vehicles.</li>
                    <li>Unloading at the site is the responsibility of the buyer unless otherwise agreed.</li>
                    <li>Risk of damage or loss transfers to the customer upon delivery at the specified location.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Tracking & Updates</h2>
                  <p className="text-gray-700">
                    Dispatch details, including expected delivery dates, will be shared by our logistics team.
                    For larger consignments, vehicle/truck details may also be provided for coordination.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Delays & Exceptions</h2>
                  <p className="text-gray-700">
                    While we strive for timely delivery, delays may occur due to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Transport strikes, regional restrictions, or roadblocks</li>
                    <li>Weather-related disruptions</li>
                    <li>Third-party logistics partner issues</li>
                    <li>Force majeure events (floods, natural disasters, etc.)</li>
                  </ul>
                  <p className="text-gray-700">
                    In such cases, we will inform customers promptly and work towards resolution.
                  </p>
                </section>

                <section className="space-y-4 pt-4 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
                  <p className="text-gray-700">For shipping-related queries or support, please contact:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold text-lg">Sri Pachaiamman Roofing & Metals</h3>
                    <div className="mt-2 space-y-1 text-gray-700">
                      <p className="flex items-start gap-2">
                        <span>📍</span>
                        <span>No 2/2-2A2, Agaram Road, Mempalam, Kaveripattinam, Krishnagiri, Tamil Nadu – 635112</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📞</span>
                        <a href="tel:+919976747413" className="hover:text-roofing-blue">+91 99767 47413</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📧</span>
                        <a href="mailto:contact@roofingmetals.shop" className="hover:text-roofing-blue">contact@roofingmetals.shop</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🌐</span>
                        <a href="https://roofingmetals.shop" target="_blank" rel="noopener noreferrer" className="hover:text-roofing-blue">roofingmetals.shop</a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const ShippingPolicyPage = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error in ShippingPolicyPage:', error, errorInfo);
    }}
  >
    <ShippingPolicyContent />
  </ErrorBoundary>
);

export default ShippingPolicyPage;
