import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  // CardDescription, // Not used yet, but available
  // CardFooter, // Not used yet, but available
} from "@/components/ui/card";

interface ExperienceCardProps {
  role: string;
  link?: string;
  company: string;
  year: string;
  responsibility: string[];
  techstacks: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  link,
  company,
  year,
  responsibility,
  techstacks,
}) => {
  return (
    <Card className="py-5 border-b-0 shadow-none border-2 border-color-border hover:border-color-main transition-colors duration-300 ease-in-out">
      <CardHeader className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center"
            >
              <CardTitle className="text-lg group-hover:text-color-main">
                {company}
              </CardTitle>
              <ArrowUpRight className="ml-1 h-4 w-4 text-color-foreground/70 group-hover:text-color-main transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <CardTitle className="text-lg">{company}</CardTitle>
          )}
          <div className="flex flex-col text-sm text-color-foreground/90 md:flex-row md:items-center md:gap-2">
            <code className="font-mono text-sm">{role}</code>
            <span className="hidden md:inline">|</span>
            <code className="font-mono text-sm">{year}</code>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <ul className="list-disc pl-5">
          {responsibility.map((item, index) => (
            <li key={index} className="text-sm text-color-foreground/75">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {techstacks.map((tech, index) => (
            <Badge
              key={index}
              variant="default"
              className="whitespace-nowrap text-xs bg-color-secondary-background text-color-foreground hover:bg-color-secondary-background/80"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
