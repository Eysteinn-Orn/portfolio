"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, Menu } from "lucide-react"; // Import Menu icon
import { useState } from "react"; // Import useState
import { cn } from "@/lib/utils"; // Assuming you have a cn utility from shadcn/ui

// TODO@Eysteinn-Orn: Fix the navbar on mobile devices
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="z-20 flex flex-wrap md:flex-nowrap justify-between items-center gap-5 py-5 mb-6 sm:py-8 sm:mb-12 bg-secondary-background px-4 sm:px-8 shadow-shadow rounded-base sticky top-0">
      <a href="mailto:eysi@live.com" className="flex-shrink-0">
        <Button
          className="cursor-pointer inline-flex items-center text-primary justify-center whitespace-nowrap rounded-base text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
          variant="neutral"
        >
          <Send className="h-6 w-6"/> {/* Keep icon, conditionally show text */}
          <span className="inline">Sendið mér skeyti</span>
        </Button>
      </a>

      {/* Hamburger Menu Button - Visible only on small screens */}
      <div className="md:hidden">
        <Button onClick={toggleMobileMenu} variant="neutral" size="icon" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Navigation Links - Hidden on small screens, shown in mobile menu or on larger screens */}
      <nav
        className={cn(
          "w-full md:w-auto md:flex items-center justify-end gap-4 md:gap-8", // Base classes for medium and up
          {
            // Classes for mobile menu when open
            "absolute top-full right-0 w-1/2 rounded-base p-4 flex flex-col items-stretch gap-4": isMobileMenuOpen,
            // Hidden on mobile by default if not open
            "hidden": !isMobileMenuOpen,
          }
        )}
      >
        <div className={cn(
          "font-semibold text-sm flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-8 md:bg-secondary-background md:text-foreground md:border-2 md:shadow-shadow md:border-border md:rounded-base md:h-10 md:px-4 md:py-2",
          {
            "bg-secondary-background text-foreground border-2 shadow-shadow border-border rounded-base p-4 w-full": isMobileMenuOpen, // Styling for items within open mobile menu
            "md:text-nowrap": !isMobileMenuOpen // Apply text-nowrap only on desktop
          }
        )}>
          <Link href="/about" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out py-2 md:py-0 text-center md:text-left" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            Um mig
          </Link>
          <Link href="/projects" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out py-2 md:py-0 text-center md:text-left" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            Verkefni
          </Link>
          <Link href="/experience" className="text-foreground/90 hover:text-main transition-colors duration-150 ease-in-out py-2 md:py-0 text-center md:text-left" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            Reynsla
          </Link>
        </div>
        <Button className="cursor-pointer w-full md:w-auto" variant="neutral" asChild>
          <a href="/resume-eysteinn.pdf" download onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            Ferilskrá
          </a>
        </Button>
      </nav>
    </div>
  );
}
