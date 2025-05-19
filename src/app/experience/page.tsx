import ExperienceCard from "@/components/experience-card";

const experiences = [
  {
    role: "Forritari",
    company: "CPS ehf.",
    link: "https://acuo.is/",
    year: "2024 - núverandi",
    responsibility: [
      "Microsoft Power Platform forritari",
      "Forritun í C# og TypeScript",
      "React, Next.js, Tailwind CSS",
      "Microsoft Power Apps, Power Automate og Power BI",
      "Aðstoðað við verkefni í Microsoft Power App, eins og að gera utanaðkomandi skráningar aðgang með vefform sem hýstar verða á Azure þjónustum.",
      "Lært að forrita með React og Next.js í TypeScript.",
    ],
    techstacks: [
      "C#",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Power Platform",
      "Azure",
    ],
  },
  {
    role: "Starfsmaður í afgreiðslu",
    company: "Kokka",
    link: "https://kokka.is/",
    year: "2024 - núverandi",
    responsibility: [
      "Afgreiðsla og þjónusta við viðskiptavini",
      "Senda út pantanir og taka við pöntunum",
      "Fylgja eftir pöntunum og þjónusta viðskiptavini",
    ],
    techstacks: ["Elska að elda", "Elska mat"],
  },
  {
    role: "Aðstoðarkennari",
    company: "Háskóli Reykjavíkur",
    link: "https://www.ru.is/",
    year: "2023 - 2024",
    responsibility: [
      "Dæmatímakennsla í tölvusamskiptum og stýrikerfis áföngum",
      "Hjálpað nemendum með verkefni og próf.",
      "Studdi kennara við undirbúning og heimavinnu, þ. á m. leiðbeiningar um verkefni og að fremja sjálfvirkar prófarnir.",
      "Sinnt dæmatímakennslu í tölvusamskiptum og stýrikerfis áföngum til skiptis.",
    ],
    techstacks: ["Git", "C++", "Python", "Linux"],
  },
  {
    role: "Rannsóknarverkefni",
    company: "Háskóli Reykjavíkur",
    link: "https://www.ru.is/",
    year: "Sumar 2023",
    responsibility: [
      "Rannsóknarverkefni með breytilíkönum",
      "Stöðlun gagna og fínstilling á breytilíkönum",
      "Lærði að nota PyTorch og Hugging Face",
      "Tók þátt í verkefni við að þjálfa gervigreind sem gæti svarað spurningum á Íslensku.",
    ],
    techstacks: ["PyTorch", "Hugging Face"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-color-background">
      <div className="w-full p-2 md:w-3/4 lg:w-2/3">
        <h1 className="mb-12 text-4xl font-heading text-left text-color-foreground">
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
