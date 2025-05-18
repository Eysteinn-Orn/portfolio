import ExperienceCard from "@/components/experience-card";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Company A",
    link: "https://example.com/tech-company-a",
    year: "2023 - Present",
    responsibility: [
      "Developed and maintained web applications using modern JavaScript frameworks.",
      "Collaborated with product managers and designers to define project requirements.",
      "Implemented responsive user interfaces and ensured cross-browser compatibility.",
    ],
    techstacks: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Innovative Solutions Ltd.",
    year: "Summer 2022",
    responsibility: [
      "Assisted in the development of a new e-commerce platform.",
      "Contributed to UI components and helped with debugging and testing.",
      "Learned about agile development methodologies and version control (Git).",
    ],
    techstacks: ["React", "JavaScript", "HTML5", "CSS3", "Firebase"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    year: "2021 - 2022",
    responsibility: [
      "Designed and developed websites for small businesses.",
      "Managed client communication and project timelines.",
      "Provided ongoing maintenance and support for completed projects.",
    ],
    techstacks: ["WordPress", "PHP", "jQuery", "MySQL", "Adobe Creative Suite"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-color-background">
      <div className="w-full p-4 md:w-3/4 lg:w-2/3">
        <h1 className="mb-12 text-4xl font-bold text-left text-color-foreground">
          Reynslan mín 
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              link={exp.link}
              year={exp.year}
              responsibility={exp.responsibility}
              techstacks={exp.techstacks}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
