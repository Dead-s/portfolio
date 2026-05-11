import { useEffect, useRef, useState, useMemo } from 'react';

const PROJECTS = [
  {
    title: 'Insurance Web Application',
    description:
      'Built responsive frontend modules in React.js for CTPL, Motor, Critical Illness, and Health insurance products. Implemented advanced form validation, dynamic data handling, and API integrations — improving overall form performance and UX by 30%.',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Developed product listing and search pages with advanced filters, pagination, and sorting for large catalogs. Built a custom job filter module for branch users, optimizing data loading and improving page response time by 25%.',
  },
  {
    title: 'Automotive Parts E-Commerce',
    description:
      'Developed a vehicle selector module allowing users to configure car models, add parts, and manage cart selections. Integrated payment and checkout workflows with API services, reducing checkout time by 20%.',
  },
  {
    title: 'Bank Lead Form Journey',
    description:
      'Built a JSON-driven dynamic lead form journey where a new lead flow is created simply by adding a config entry — no additional coding required. Centralized validation and API calls handled via config, with end-to-end encryption for all API communications.',
  },
  {
    title: 'Financial Calculators Suite',
    description:
      'Developed 15+ financial calculators (SIP, STP, SWP, SIP Past Performance, and more). Built a reusable input component library (free text, amount, stepper) with centralized validation, error handling, and consistent styling — reused across the platform. Also built a centralized API utility with configurable E2E encryption.',
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
