import Hero from "@/components/hero";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero
        name="Your Name" // Replace with actual name
        jobTitle="Your Job Title" // Replace with actual job title
        description="A brief description about yourself." // Replace with actual description
        githubUrl="https://github.com/yourusername" // Replace with your GitHub URL
        blueskyUrl="https://bsky.app/profile/yourusername.bsky.social" // Replace with your Bluesky URL
        imageUrl="/notion-face.png" // Replace with the path to your image
      />
      <h1 className="text-3xl font-bold">About Me</h1>
    </main>
  );
}