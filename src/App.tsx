import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type Section = 'home' | 'resume' | 'projects' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
    }
  };

  return (
    <div className="min-h-screen bg-bg font-sans flex flex-col">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 animate-fade-in" key={activeSection}>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
