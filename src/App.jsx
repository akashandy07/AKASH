import useTheme from './hooks/useTheme';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Loader />
      <ParticleBackground />
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <CustomCursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="wrap">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
