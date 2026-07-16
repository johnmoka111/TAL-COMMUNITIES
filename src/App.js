import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from '././components/About';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Collaboration from './components/Collaboration';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Check local storage or system preference to set default theme
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode for the professional corporate "wowed" effect,
    // or fallback to system preferences. Let's default to dark for first load.
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to HTML tag natively
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 selection:bg-tal-orange selection:text-white">
      {/* Navigation Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Corporate Sections */}
      <main>
        {/* Section 1: Hero Header */}
        <Hero />

        {/* Section 2: About (Vision, Mission, History) */}
        <About />

        {/* Section 3: Pôles d'Expertise (7 Departments) */}
        <Services />

        {/* Section 4: Projects Showcase */}
        <ProjectGallery />

        {/* Section 4.5: Notre Vie en Images (Activities Gallery) */}
        <Gallery />

        {/* Section 5: Team Members Profiles */}
        <Team />

        {/* Section 6: Adhésion & Collaboration */}
        <Collaboration />

        {/* Section 7: Contact Form & Physical Details */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
