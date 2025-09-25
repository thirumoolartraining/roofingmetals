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

const TermsAndConditionsContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms & Conditions - Sri Pachaiamman Roofing & Metals</title>
        <meta name="description" content="Review the terms and conditions for using Sri Pachaiamman Roofing & Metals services and purchasing our products." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-roofing-blue text-white p-6">
                <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
                <p className="text-blue-100">Last Updated: August 2025</p>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                <section className="space-y-4">
                  <p className="text-gray-700">
                    Welcome to Sri Pachaiamman Roofing & Metals. By engaging with our business, whether through our website, in person, or by placing wholesale/retail orders, you agree to comply with the following Terms & Conditions. These terms govern all sales, transactions, and interactions with Sri Pachaiamman Roofing & Metals.
                  </p>
                  <p className="text-gray-700 font-medium">
                    If you do not agree with any part of these terms, please discontinue use of our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. General Use of Services</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You confirm that you are at least 18 years of age or conducting business under a legally authorized entity.</li>
                    <li>You agree to provide accurate and complete information for all orders and inquiries.</li>
                    <li>Misuse, fraudulent activity, or abusive conduct may result in refusal or termination of service.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Products & Pricing</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>We deal in construction materials, roofing supplies, hardware, and metals.</li>
                    <li>Product descriptions are provided with care, but slight variations in appearance, weight, or finish may occur due to material properties.</li>
                    <li>All prices are listed in Indian Rupees (INR ₹) and may fluctuate based on raw material costs, market demand, and supplier pricing.</li>
                    <li>Sri Pachaiamman Roofing & Metals reserves the right to update or correct product details, errors, or pricing without prior notice.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Orders & Payments</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Orders are confirmed only after payment or approved credit arrangements.</li>
                    <li>Wholesale orders may be subject to minimum order quantities (MOQ).</li>
                    <li>Accepted payment methods include UPI, net banking, debit/credit cards, and approved offline transfers.</li>
                    <li>We do not store sensitive payment details; transactions are processed securely through trusted third-party providers.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Delivery & Logistics</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Deliveries are made through trusted logistics partners or in-house transportation, depending on order size and location.</li>
                    <li>Estimated delivery timelines will be shared during order confirmation but may vary due to logistics, availability, or external factors.</li>
                    <li>The buyer is responsible for providing accurate delivery information and ensuring accessibility for unloading heavy materials.</li>
                    <li>Risk of damage or loss passes to the buyer once the goods are delivered at the agreed location.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">5. Cancellations & Returns</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Orders may be cancelled within 2 hours of confirmation, provided they have not been processed, cut, or dispatched.</li>
                    <li>Returns are accepted only in cases of:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Wrong items delivered</li>
                        <li>Verified material defects</li>
                        <li>Damaged products during transit (reported immediately on receipt)</li>
                      </ul>
                    </li>
                    <li>Custom-cut, fabricated, or special-order items are non-returnable.</li>
                    <li>For further details, please refer to our Cancellation & Refund Policy.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">6. Customer Responsibilities</h2>
                  <p className="text-gray-700">By placing an order, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide accurate business, billing, and delivery details</li>
                    <li>Inspect goods upon receipt and notify us promptly of any discrepancies</li>
                    <li>Handle and store products safely as per industry standards</li>
                    <li>Not misuse or misrepresent our brand or materials in resale</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">7. Intellectual Property</h2>
                  <p className="text-gray-700">
                    All content on our website, including product descriptions, images, logos, and branding, are the intellectual property of Sri Pachaiamman Roofing & Metals. Unauthorized reproduction or use is prohibited.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">8. Limitation of Liability</h2>
                  <p className="text-gray-700">Sri Pachaiamman Roofing & Metals shall not be liable for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Minor variations in product specifications due to natural properties of metals and materials</li>
                    <li>Delays caused by logistics providers or force majeure events</li>
                    <li>Indirect, incidental, or consequential damages arising from product use</li>
                  </ul>
                  <p className="text-gray-700">Our liability is limited to the invoice value of the product purchased.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">9. Governing Law & Jurisdiction</h2>
                  <p className="text-gray-700">
                    These Terms & Conditions are governed by the laws of India, with disputes subject to the jurisdiction of the courts in Krishnagiri, Tamil Nadu.
                  </p>
                </section>

                <section className="space-y-4 pt-4 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">10. Contact Us</h2>
                  <p className="text-gray-700">For queries, clarifications, or support, please reach out to:</p>
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

const TermsAndConditionsPage = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error in TermsAndConditionsPage:', error, errorInfo);
    }}
  >
    <TermsAndConditionsContent />
  </ErrorBoundary>
);

export default TermsAndConditionsPage;
