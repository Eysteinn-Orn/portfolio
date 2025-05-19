import Link from "next/link";
// import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from 'lucide-react';

export interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  techstacks: string[];
  link: string;
  // imageUrl?: string;
  icon?: LucideIcon;
}

export function ProjectCard({ category, title, description, techstacks, link, icon: Icon }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 ease-in-out border-border">
      {/* {imageUrl && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )} */}
      <CardHeader className="pb-4">
        <p className="text-xs font-semibold tracking-wider uppercase text-main mb-1">{category}</p>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 pb-4">
        <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 pt-1">
          {techstacks.map((tech) => (
            <Badge key={tech} variant="neutral" className="text-xs font-medium shadow-shadow">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full hover:bg-main/90 text-main-foreground">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            View Project
            {Icon && <Icon className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
