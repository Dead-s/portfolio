import { useEffect, useRef, useState, useMemo } from 'react';

const PROJECTS = [
  {
    title: 'E-Commerce Platform Redesign',
    description:
      'Led the complete redesign of a major e-commerce platform, improving conversion rates by 35% through data-driven design decisions and extensive user testing across multiple device types.',
  },
  {
    title: 'Mobile Banking Application',
    description:
      'Designed a mobile banking app from the ground up, creating intuitive flows for complex financial transactions while maintaining strict accessibility and security standards.',
  },
];

function TypewriterText({
  text,
  visible,
  delay,
  className,
  charDelay = 50,
}: {
  text: string;
  visible: boolean;
  delay: number;
  className: string;
  charDelay?: number;
}) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [started, setStarted] = useState(false);

  const chars = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [visible, delay]);

  useEffect(() => {
    if (!started) return;
    setRevealedCount(0);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i <= chars.length) {
        setRevealedCount(i);
      } else {
        clearInterval(timer);
      }
    }, charDelay);
    return () => clearInterval(timer);
  }, [started, chars.length, charDelay]);

  if (!visible) {
    return <div className={className}>&nbsp;</div>;
  }

  return (
    <div className={className}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className={`typewriter-char${i < revealedCount ? ' visible' : ''}`}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: { title: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 !== 0;

  // Image: left-positioned slides from left, right-positioned slides from right
  const imageSlideClass = visible
    ? isReversed
      ? 'project-slide-right'
      : 'project-slide-left'
    : 'opacity-0';

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      <div className={isReversed ? 'md:order-2' : ''}>
        <TypewriterText
          text={project.title}
          visible={visible}
          delay={0}
          className="text-xl sm:text-2xl font-bold text-text mb-3 md:mb-4"
          charDelay={50}
        />
        <TypewriterText
          text={project.description}
          visible={visible}
          delay={project.title.length * 50 + 300}
          className="text-gray-500 leading-relaxed text-sm md:text-base"
          charDelay={20}
        />
      </div>
      <div
        className={`w-full aspect-[4/3] bg-gray-200 rounded-lg border border-gray-300 ${imageSlideClass} ${isReversed ? 'md:order-1' : ''}`}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          Project Image
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-20 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text mb-10 md:mb-16">Projects</h2>
        <div className="space-y-12 md:space-y-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
