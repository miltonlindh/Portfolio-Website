import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import './components/styles/respons.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    console.log("💡 Applying theme:", theme); // Debugging
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="wrapper"> {/* New wrapper for full-page layout */}
      <Navbar />
      <div className="content"> {/* Pushes footer down */}
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
