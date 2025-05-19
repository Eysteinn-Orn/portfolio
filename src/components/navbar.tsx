import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="z-20 flex justify-between gap-5 py-8 mb-12 bg-background-grid px-8 shadow-shadow rounded-base backdrop-blur-sm sticky top-0">
      <a href="mailto:eysi@live.com">
        <Button 
            className="cursor-pointer inline-flex items-center text-primary justify-center whitespace-nowrap rounded-base text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
            variant="neutral">
              <Send />
            Sendið mér skeyti
        </Button>
      </a>
      
        <nav className="flex items-center justify-end gap-8">

            <div className="text-nowrap p-2 px-4 flex items-center gap-8 bg-secondary-background text-foreground border-2 border-border rounded-base">
              <Link href="/about" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out">
              Um mig
              </Link>

              <Link href="/projects" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out">
              Verkefni
              </Link>

              <Link href="/experience" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out">
              Reynsla
              </Link>
            </div>
            <Button variant="neutral">
                <a href="/resume-eysteinn.pdf" download>
                    Ferilskrá
                </a>
            </Button>
        </nav>

    </div>
  );
}
