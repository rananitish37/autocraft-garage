import React from 'react';

/**
 * ErrorBoundary — catches JavaScript errors in child component tree.
 * Displays a friendly fallback instead of a blank screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production, send to your error tracking service (e.g. Sentry)
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-garage-950 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-orange-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-white text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-gray-400 mb-8">
              An unexpected error occurred. Please refresh the page or contact us if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-semibold transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
