import { User } from 'lucide-react';
import type { Section } from '../App';

interface HomeProps {
  onNavigate: (section: Section) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen flex items-center bg-bg pt-24 pb-12 md:pt-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center md:justify-start animate-slide-left delay-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-500" strokeWidth={1} />
          </div>
        </div>
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-text leading-none animate-slide-bottom delay-200">
            Hello
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text mt-3 md:mt-4 animate-slide-bottom delay-400">
            A Bit About Me
          </h2>
          <p className="text-gray-500 mt-3 md:mt-4 leading-relaxed max-w-md text-sm sm:text-base animate-slide-bottom delay-600">
            I'm a passionate professional dedicated to creating meaningful impact through
            innovative solutions. With a background in design and technology, I bring ideas
            to life with precision and creativity.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-6 md:mt-8 animate-slide-bottom delay-800">
            <button
              onClick={() => onNavigate('resume')}
              className="circle-hover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-accent-yellow flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <span className="font-bold text-text text-xs sm:text-sm">Resume</span>
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="circle-hover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-accent-red flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <span className="font-bold text-text text-xs sm:text-sm">Projects</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="circle-hover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-accent-teal flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <span className="font-bold text-text text-xs sm:text-sm">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
