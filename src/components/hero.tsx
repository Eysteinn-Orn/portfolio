import Image from 'next/image';
import { siGithub, siBluesky } from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

interface HeroProps {
  name: string;
  jobTitle: string;
  description: string;
  githubUrl: string;
  blueskyUrl: string;
  imageUrl: string; 
}

// Helper component to render SimpleIcon SVG
const SimpleIconDisplay = ({ icon, size = 28 }: { icon: SimpleIcon, size?: number }) => {
  return (
    <div
      style={{ width: size, height: size, fill: 'currentColor' }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

export default function Hero({ name, jobTitle, description, githubUrl, blueskyUrl, imageUrl }: HeroProps) {
  return (
    <section className="container mx-auto py-16 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Text Content - Order 2 on mobile (bottom), Order 1 on md+ (left) */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">{name}</h1>
          <h2 className="text-xl md:text-2xl text-main mb-8">{jobTitle}</h2>
          <p className="max-w-2xl mx-auto md:mx-0 mb-10 text-lg text-foreground/80">
            {description}
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground hover:text-main transition-colors">
              <SimpleIconDisplay icon={siGithub} />
            </a>
            <a href={blueskyUrl} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="text-foreground hover:text-main transition-colors">
              <SimpleIconDisplay icon={siBluesky} />
            </a>
          </div>
        </div>

        {/* Image - Order 1 on mobile (top), Order 2 on md+ (right) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start md:pl-8">
          <Image src={imageUrl} alt={name} className="rounded-full shadow-xl w-3/4 sm:w-2/3 md:w-full max-w-md object-cover" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
