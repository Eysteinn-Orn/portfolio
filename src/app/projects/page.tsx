import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import { ExternalLink } from 'lucide-react'; // Example icon

const projectsData: ProjectCardProps[] = [
  {
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "This very website, built with Next.js, TypeScript, and Tailwind CSS. Showcasing my skills and projects.",
    techstacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
    link: "https://github.com/yourusername/portfolio", // Replace with your actual link
    // imageUrl: "/file.svg", // Example image, replace or remove
    icon: ExternalLink, // Added icon
  },
  {
    category: "Mobile App",
    title: "Task Manager App",
    description:
      "A concept for a sleek and intuitive task management application for iOS and Android.",
    techstacks: ["React Native", "Firebase", "TypeScript"],
    link: "#", // Placeholder link
    // imageUrl: "/path/to/your/image2.jpg", // Optional image
    icon: ExternalLink, // Added icon
  },
  {
    category: "Data Science",
    title: "Customer Churn Prediction",
    description:
      "A machine learning model to predict customer churn based on historical data.",
    techstacks: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    link: "#",
    // imageUrl: "/globe.svg",
    icon: ExternalLink, // Added icon
  },
  {
    category: "UI/UX Design",
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and modern aesthetics.",
    techstacks: ["Figma", "Adobe XD", "User Research"],
    link: "#",
    icon: ExternalLink, // Added icon
  },
  {
    category: "Open Source",
    title: "Utility Library",
    description:
      "A small utility library for common JavaScript tasks, published on npm.",
    techstacks: ["JavaScript", "Jest", "npm"],
    link: "#",
    // imageUrl: "/window.svg",
    icon: ExternalLink, // Added icon
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
