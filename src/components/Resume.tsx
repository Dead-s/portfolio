const WORK_EXPERIENCE = [
  {
    range: '09/2023 - Present',
    title: 'Frontend Developer',
    company: 'Dept/TeknoPoint, Mumbai',
    description:
      'Built responsive UIs for Insurance, E-Commerce, and Automotive platforms using React.js, TypeScript, and RESTful APIs. Developed insurance product modules (CTPL, Motor, Health, Critical Illness), e-commerce search/filter/pagination features, vehicle selector and checkout workflows, JSON-driven lead form journeys with E2E encryption, and a suite of 15+ financial calculators with a shared reusable component library.',
  },
];

const EDUCATION = [
  {
    range: '09/2021 - 04/2023',
    title: 'BSC IT',
    company: 'Vivek College of Commerce, Mumbai',
    description:
      'Bachelor of Science in Information Technology. Built a strong foundation in software development, databases, and web technologies.',
  },
];

function TimelineSection({
  label,
  entries,
}: {
  label: string;
  entries: { range: string; title: string; company: string; description: string }[];
}) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-8">
        <div>
          <h3 className="font-bold text-text text-lg">{label}</h3>
        </div>
        <div className="space-y-8 md:space-y-10">
          {entries.map((entry, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-gray-300">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent-yellow" />
              <p className="text-gray-400 text-sm mb-1">{entry.range}</p>
              <h4 className="font-bold text-text text-base md:text-lg">{entry.title}</h4>
              <p className="text-gray-500 font-medium text-sm md:text-base">{entry.company}</p>
              <p className="text-gray-500 mt-2 leading-relaxed text-sm md:text-base">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="bg-bg pt-24 pb-16 md:pt-20 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text mb-10 md:mb-16">Resume</h2>
        <TimelineSection label="Work Experience" entries={WORK_EXPERIENCE} />
        <TimelineSection label="Education" entries={EDUCATION} />
      </div>
    </section>
  );
}
