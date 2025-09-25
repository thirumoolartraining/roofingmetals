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

const CancellationRefundContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Cancellation & Refund Policy - Sri Pachaiamman Roofing & Metals</title>
        <meta name="description" content="Review our cancellation and refund policy for roofing materials, hardware, and metals purchases." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-roofing-blue text-white p-6">
                <h1 className="text-3xl font-bold mb-2">Cancellation & Refund Policy</h1>
                <p className="text-blue-100">Clear, Practical & Fair</p>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                <section className="space-y-4">
                  <p className="text-gray-700">
                    At Sri Pachaiamman Roofing & Metals, we work hard to ensure every order of roofing materials, hardware, and metals is processed and delivered correctly. Given the nature of our products (heavy goods, cut-to-size materials, and wholesale consignments), cancellations and refunds must follow strict guidelines to remain fair for both our customers and our operations.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Order Cancellations</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><span className="font-medium">Cancellation Window:</span> Orders can be cancelled within 2 hours of confirmation, provided they have not yet been processed, cut, or dispatched.</li>
                    <li>Once cutting, packing, or dispatch has begun, cancellations will not be possible.</li>
                    <li>Customers must share their Order ID and reason for cancellation when making a request.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Returns & Replacements</h2>
                  <p className="text-gray-700">Returns are only accepted in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Incorrect items supplied against the invoice</li>
                    <li>Verified manufacturing or material defects</li>
                    <li>Damage during transport (must be reported immediately on receipt with photos/video evidence)</li>
                  </ul>
                  <p className="text-gray-700 font-medium mt-4">Conditions for Returns:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Products must remain in their original condition without being cut, altered, or used.</li>
                    <li>Return requests must be raised within 48 hours of delivery.</li>
                    <li>Custom-cut, fabricated, or special-order materials are non-returnable.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Non-Returnable Items</h2>
                  <p className="text-gray-700">Due to the nature of our business, the following cannot be returned or refunded:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Roofing sheets or metals cut to custom sizes</li>
                    <li>Special fabrication or bulk orders made to specific client requirements</li>
                    <li>Products damaged due to mishandling after delivery</li>
                    <li>Items returned without prior authorization</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Refunds</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Once a claim is verified and approved, refunds will be initiated within 5–7 business days.</li>
                    <li>Refunds will be processed via the original payment method (bank transfer, UPI, card, etc.).</li>
                    <li>Depending on the payment provider, it may take 7–10 business days for the amount to reflect in the customer's account.</li>
                    <li>Customers may also opt for a replacement product or credit note against future purchases.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Exceptions</h2>
                  <p className="text-gray-700">Refunds or cancellations will not apply in cases where:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Delays occur due to transport strikes, roadblocks, weather, or other force majeure events.</li>
                    <li>Delivery fails due to incorrect or incomplete address details provided by the customer.</li>
                    <li>Natural variations in metals, hardware finishes, or roofing materials occur (as these are industry-accepted tolerances).</li>
                  </ul>
                </section>

                <section className="space-y-4 pt-4 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
                  <p className="text-gray-700">For cancellation or refund assistance, please contact:</p>
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

const CancellationRefundPolicyPage = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error in CancellationRefundPolicyPage:', error, errorInfo);
    }}
  >
    <CancellationRefundContent />
  </ErrorBoundary>
);

export default CancellationRefundPolicyPage;
