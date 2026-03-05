import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Philosophy from './components/Philosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-monarc-black">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Philosophy />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
