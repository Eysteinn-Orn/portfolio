import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="z-20 flex justify-between gap-5 py-8 bg-background-grid px-8 shadow-shadow rounded-base backdrop-blur-sm sticky top-0">
      <a href="mailto:eysi@live.com">
        <Button 
            className="cursor-pointer inline-flex items-center text-primary justify-center whitespace-nowrap rounded-base text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
            variant="neutral">
              <Send />
            Contact
        </Button>
      </a>
      
        <nav className="flex items-center justify-end gap-8">
        
            <Link href="/about" className="text-lg font-semibold text-white hover:text-main" style={{ textShadow: `1px 1px 2px var(--border)` }}>
            About
            </Link>

            <Link href="/projects" className="text-lg font-semibold text-white hover:text-main" style={{ textShadow: `1px 1px 2px var(--border)` }}>
            Projects
            </Link>

            <Link href="/experience" className="text-lg font-semibold text-white hover:text-main" style={{ textShadow: `1px 1px 2px var(--border)` }}>
            Experience
            </Link>
            
            <Button variant="neutral">
                <a href="/resume.pdf" download>
                    Resume
                </a>
            </Button>
        </nav>

    </div>
  );
}
