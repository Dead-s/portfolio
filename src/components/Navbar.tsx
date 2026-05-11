import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Section } from '../App';

const NAV_LINKS: { label: string; section: Section }[] = [
  { label: 'Resume', section: 'resume' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="w-3 h-3 rounded-full bg-accent-yellow inline-block" />
          <span className="font-bold text-text text-lg">Sabarisharan</span>
          <span className="text-gray-400 text-sm hidden sm:inline">Software Engineer</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.section}
              onClick={() => onNavigate(link.section)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.section
                  ? 'text-accent-yellow'
                  : 'text-text hover:text-accent-yellow'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text hover:text-accent-yellow transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigate(link.section)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeSection === link.section
                    ? 'text-accent-yellow'
                    : 'text-text hover:text-accent-yellow'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
