import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Rules from './components/Rules';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Rules />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
