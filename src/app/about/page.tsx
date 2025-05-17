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
  "Power Platform",
  "Azure",
  "C#",
  "PostgreSQL",
];

export default function AboutPage() {
  return (
    <main className="my-6 flex flex-col container mx-auto px-2rem md:w-[1100px]">
      <Hero
        name="Eysteinn Örn Jónsson"
        jobTitle="Tölvunarfræðingur"
        description="Ástríðan mín felst í vefþróun, leikjahönnun og stafrænum lausnum. Ég nýt þess að vinna með nýjustu tækni til að búa til notendavænar lausnir."
        githubUrl="https://github.com/eysteinn-orn"
        blueskyUrl="https://bsky.app/profile/eysteinn.bsky.social" // Replace with your Bluesky URL
        imageUrl="/notion-face.png"
      />
      <div className="space-y-6 container mx-auto px-2rem">
        <Marquee
          items={libraries}
        ></Marquee>
        <Card>
          <CardHeader>
            <CardTitle
              className="text-3xl font-heading text-foreground sm:text-4xl md:text-5xl"
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