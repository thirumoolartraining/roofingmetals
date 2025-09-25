import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-red-50 p-6 rounded-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h2>
        <p className="text-red-700 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.href = '/';
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
