const WORK_EXPERIENCE = [
  {
    range: '2022 - Present',
    title: 'Senior Product Designer',
    company: 'Creative Studio Inc.',
    description:
      'Leading design initiatives for enterprise clients, establishing design systems, and mentoring junior designers across multiple product lines.',
  },
  {
    range: '2019 - 2022',
    title: 'UX Designer',
    company: 'TechFlow Solutions',
    description:
      'Designed user-centered interfaces for SaaS products, conducted user research, and collaborated with engineering teams to ship high-quality features.',
  },
  {
    range: '2017 - 2019',
    title: 'Junior Designer',
    company: 'Pixel & Code Agency',
    description:
      'Created visual designs and prototypes for web and mobile applications, participated in client workshops, and contributed to brand identity projects.',
  },
];

const EDUCATION = [
  {
    range: '2013 - 2017',
    title: 'Bachelor of Design',
    company: 'National Institute of Design',
    description:
      'Specialized in interaction design and visual communication. Graduated with honors and received the Best Thesis Project award.',
  },
  {
    range: '2011 - 2013',
    title: 'Diploma in Fine Arts',
    company: 'School of Visual Arts',
    description:
      'Foundation studies in drawing, painting, and digital media. Developed a strong understanding of color theory and composition.',
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
