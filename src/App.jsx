import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MobileBar from './components/MobileBar/MobileBar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
