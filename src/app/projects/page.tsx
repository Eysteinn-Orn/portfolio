import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import { ExternalLink } from 'lucide-react'; // Example icon

const projectsData: ProjectCardProps[] = [
  {
    category: "Vefþróun",
    title: "Heimasíðan mín",
    description:
      "Þessi vefsíða, byggð með Next.js, TypeScript, Tailwind CSS og shadcn/ui. Hönnuð til að sýna verkefni mín og reynslu.",
    techstacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
    link: "https://github.com/eysteinn-orn/portfolio", // Gakktu úr skugga um að þetta sé rétt geymsluslóð
    icon: ExternalLink,
  },
  {
    category: "Vefþróun",
    title: "Kynningarbréf.is (Í vinnslu)",
    description:
      "Vefverkefni sem nýtir ChatGPT til að aðstoða notendur við gerð kynningarbréfa á íslensku. Byggt með OpenAI SDK.",
    techstacks: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI SDK", "ChatGPT", "Vercel"],
    link: "https://kynningarbref.is",
    icon: ExternalLink,
  },
  {
    category: "Gervigreind",
    title: "Lokaverkefni: Viðhorfsgreining íslenskra kvikmyndaummæla",
    description:
      "Lokaverkefni í BSc námi þar sem þróað var breytilíkan (transformer model) til að greina viðhorf í íslenskum kvikmyndaummælum. Verkfæri: PyTorch og Hugging Face.",
    techstacks: ["Python", "PyTorch", "Hugging Face", "Scikit-learn", "Pandas"],
    link: "https://skemman.is/handle/1946/46224",
    icon: ExternalLink,
  },
  {
    category: "Leikjaþróun",
    title: "Spacetime Pong",
    description:
      "Verkefni til að kanna SpacetimeDB fyrir rauntíma fjölspilunarleiki, útfært sem Pong leikur.",
    techstacks: ["SpacetimeDB", "TypeScript"], // Eða annað tungumál ef við á
    link: "#", // Uppfærðu með viðeigandi hlekk ef hann er til
    icon: ExternalLink,
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-heading text-left text-foreground mb-6">
          Verkefnin mín
        </h1>
        <div className="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
