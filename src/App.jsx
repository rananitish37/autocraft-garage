import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MobileBar from './components/MobileBar/MobileBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          {/* Skip to main content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:font-semibold"
          >
            Skip to main content
          </a>

          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/contact" element={<Contact />} />
                {/* Catch-all 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <MobileBar />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
