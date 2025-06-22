import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  console.log('Rendering App with ThemeToggle');
  
  return (
    <ThemeProvider>
      <div className="App">
        {/* ThemeToggle positioned here for better visibility */}
        <div style={{ position: 'relative', zIndex: 9999 }}>
          <ThemeToggle />
        </div>
        <NavigationBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
