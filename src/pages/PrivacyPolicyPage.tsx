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

const PrivacyPolicyContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - Sri Pachaiamman Roofing & Metals</title>
        <meta name="description" content="Learn how we protect your privacy and handle your data at Sri Pachaiamman Roofing & Metals." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-roofing-blue text-white p-6">
                <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-blue-100">Your Privacy, Our Commitment</p>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                <section className="space-y-4">
                  <p>
                    At Sri Pachaiamman Roofing & Metals, we value the trust you place in us when choosing our construction materials, roofing supplies, hardware, and metals. Protecting your personal and business information is as important to us as maintaining the quality and reliability of our products.
                  </p>
                  <p>
                    This Privacy Policy explains what data we collect, why we collect it, how we safeguard it, and your rights when interacting with our business—whether for wholesale trading, retail purchases, or inquiries.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Information We Collect</h2>
                  <p>When you interact with us (in-store, via phone, or online), we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full Name / Business Name</li>
                    <li>Email Address & Phone Number</li>
                    <li>Billing & Shipping Address</li>
                    <li>Order Details & Purchase History</li>
                    <li>Payment Information (via secure third-party gateways; we never store card details)</li>
                    <li>GST / Business Identification (for wholesale clients)</li>
                    <li>Device & Browser Data (if using our website)</li>
                    <li>Cookies & Tracking Data (for analytics and performance)</li>
                  </ul>
                  <p>We only collect the information necessary to fulfill orders, provide services, and maintain compliance with trade regulations.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Why We Collect Your Information</h2>
                  <p>Your data is used strictly for business purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processing and fulfilling orders</li>
                    <li>Coordinating shipping and logistics</li>
                    <li>Managing wholesale/B2B transactions</li>
                    <li>Providing order updates and customer support</li>
                    <li>Sending promotional offers (only if you opt in)</li>
                    <li>Improving our website and customer service experience</li>
                    <li>Meeting legal, tax, and compliance requirements</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">How We Protect Your Information</h2>
                  <p>We take strong measures to ensure your information remains secure and confidential:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL Encryption for all online data exchange</li>
                    <li>Secure Payment Gateways – we do not store card or banking details</li>
                    <li>Restricted Access – only authorized staff access sensitive information</li>
                    <li>Firewall Protection & Regular Checks on servers and systems</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Your Rights & Choices</h2>
                  <p>As a customer, you have full control over your data. You may:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request a copy of the information we hold about you</li>
                    <li>Ask for corrections or updates to your data</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt out of marketing or promotional communications</li>
                    <li>Raise concerns about how your information is handled</li>
                  </ul>
                  <p>All valid requests are addressed within 30 business days.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Third-Party Sharing</h2>
                  <p>We do not sell or rent customer data. Information is shared only with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Logistics providers (for product delivery)</li>
                    <li>Payment processors (for secure transactions)</li>
                    <li>Government or regulatory authorities (if legally required)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Policy Updates</h2>
                  <p>This Privacy Policy may be updated periodically to reflect changes in business practices, laws, or technology. Updates will always be published on our website with a revised "Last Updated" date.</p>
                </section>

                <section className="space-y-4 pt-4 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                  <p>For privacy-related questions, requests, or concerns, please contact:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold text-lg">Sri Pachaiamman Roofing & Metals</h3>
                    <div className="mt-2 space-y-1">
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

                <div className="pt-4 mt-6 border-t border-gray-200 text-sm text-gray-500">
                  <p>Last Updated: August 2025</p>
                  <p className="mt-2">© 2025 Sri Pachaiamman Roofing & Metals. All Rights Reserved.</p>
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

const PrivacyPolicyPage = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error in PrivacyPolicyPage:', error, errorInfo);
    }}
  >
    <PrivacyPolicyContent />
  </ErrorBoundary>
);

export default PrivacyPolicyPage;
