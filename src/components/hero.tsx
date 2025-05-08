import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you might want to style links as buttons

interface HeroProps {
  name: string;
  jobTitle: string;
  description: string;
  githubUrl: string;
  blueskyUrl: string;
}

export default function Hero({ name, jobTitle, description, githubUrl, blueskyUrl }: HeroProps) {
  return (
    <section className="container mx-auto py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
      <h2 className="text-xl md:text-2xl text-main mb-8">{jobTitle}</h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg text-foreground/80">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild variant="neutral">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
        <Button asChild variant="neutral">
          <Link href={blueskyUrl} target="_blank" rel="noopener noreferrer">
            Bluesky
          </Link>
        </Button>
      </div>
    </section>
  );
}

// Example usage (you would typically use this in a page component):
/*
<Hero
  name="Your Name"
  jobTitle="Your Job Title / Role"
  description="A brief and engaging description of about 20 words, highlighting key skills or what you do."
  githubUrl="https://github.com/yourusername"
  blueskyUrl="https://bsky.app/profile/yourusername.bsky.social"
/>
*/
