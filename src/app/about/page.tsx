import Hero from "@/components/hero";
import Marquee from "@/components/ui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const libraries = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "shadcn/ui",
  "Drizzle ORM",
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24">
      <Hero
        name="Eysteinn Örn Jónsson"
        jobTitle="Software Engineer"
        description="A brief description about yourself." // Replace with actual description
        githubUrl="https://github.com/eysteinn-orn"
        blueskyUrl="https://bsky.app/profile/yourusername.bsky.social" // Replace with your Bluesky URL
        imageUrl="/notion-face.png"
      />
      <Marquee items={libraries} />
      <div className="mt-12 w-full max-w-4xl px-4 md:mt-16">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              className="text-3xl font-heading text-foreground sm:text-4xl md:text-5xl"
              style={{ textShadow: `2px 2px 0px var(--border)` }}
            >
              About Me
            </CardTitle>
            <CardDescription className="text-foreground/80 pt-2">
              A little more about my journey and interests.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Hello! I&apos;m Eysteinn, a software engineer passionate about
              building modern web applications. I enjoy working with
              technologies like React, Next.js, and TypeScript to create
              engaging user experiences. When I&apos;m not coding, I enjoy
              exploring new technologies and contributing to open-source
              projects.
            </p>
            {/* You can add more detailed paragraphs, lists, or other content here */}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-foreground/70">
              Feel free to connect or check out my projects!
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}