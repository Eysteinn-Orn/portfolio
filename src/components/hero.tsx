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
    <section className="mx-auto flex flex-col gap-10 md:w-[1100px]">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:justify-between">
        {/* Text Content - Order 2 on mobile (bottom), Order 1 on md+ (left) */}
        <div className="w-full mb-12 md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{name}</h1>
          <h2 className="text-lg md:text-2xl text-main mb-8">{jobTitle}</h2>
          <p className="max-w-2xl mx-auto md:mx-0 mb-10 text-foreground/80">
            {description}
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-overlay hover:text-main transition-colors">
              <SimpleIconDisplay icon={siGithub} size={26} />
            </a>
            <a href={blueskyUrl} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="text-overlay hover:text-main transition-colors">
              <SimpleIconDisplay icon={siBluesky} size={26} />
            </a>
          </div>
        </div>

        {/* Image - Order 1 on mobile (top), Order 2 on md+ (right) */}
        <div className="relative order-1 md:order-last mx-auto -mt-8">
          <div className="flex items-center justify-center">
            <Image src={imageUrl} alt={name} className="bg-primary rounded-full" width={280} height={280} />
          </div>
        </div>
      </div>
    </section>
  );
}
