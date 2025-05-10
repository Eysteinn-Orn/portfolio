import Hero from "@/components/hero";
import Marquee from "@/components/ui/marquee";

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
    <main className="flex min-h-screen flex-col items-center ">
      <Hero
        name="Eysteinn Örn Jónsson" 
        jobTitle="Software Engineer" 
        description="A brief description about yourself." // Replace with actual description
        githubUrl="https://github.com/eysteinn-orn"
        blueskyUrl="https://bsky.app/profile/yourusername.bsky.social" // Replace with your Bluesky URL
        imageUrl="/notion-face.png"
      />
      <Marquee items={libraries} />
      <h1 className="text-3xl font-bold">About Me</h1>
    </main>
  );
}