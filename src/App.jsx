import React from 'react';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
