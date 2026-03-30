import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Technologies from '../pages/Technologies';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/technologie" element={<Technologies />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => (
  <div className="site-root">
    <Navbar />
    <main className="site-main">
      <AnimatedRoutes />
    </main>
    <Footer />
  </div>
);

export default AppRouter;
