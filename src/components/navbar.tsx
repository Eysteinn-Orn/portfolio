import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="container z-20 flex justify-between gap-5 py-8 mx-auto">
      <a href="mailto:eysi@live.com">
        <Button 
            className="cursor-pointer inline-flex items-center text-primary justify-center whitespace-nowrap rounded-base text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
            variant="neutral">
            Contact Me!
        </Button>
      </a>
      
        <nav className="flex items-center justify-end gap-8">
        
            <Link href="/about" className="text-lg font-semibold hover:text-main">
            About
            </Link>

            <Link href="/projects" className="text-lg font-semibold hover:text-main">
            Projects
            </Link>

            <Link href="/experience" className="text-lg font-semibold hover:text-main">
            Experience
            </Link>
            
            <Button>
                <a href="/resume.pdf" download>
                    Resume
                </a>
            </Button>
        </nav>

    </div>
  );
}
