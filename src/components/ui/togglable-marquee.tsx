"use client";

import { useState } from "react";
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TogglableMarqueeProps {
  items: string[];
  title: string;
}

export default function TogglableMarquee({ items, title }: TogglableMarqueeProps) {
  const [showMarquee, setShowMarquee] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const animationDuration = 500; // Duration of fade-in/out animation in ms

  const handleClick = () => {
    if (isFadingIn || isFadingOut) {
      return;
    }

    if (showMarquee) {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowMarquee(false);
        setIsFadingOut(false);
      }, animationDuration);
    } else {
      setShowMarquee(true);
      setIsFadingIn(true);
      setTimeout(() => {
        setIsFadingIn(false);
      }, animationDuration);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button variant="neutral" onClick={handleClick}>
            {/* Simplified button text */}
            <h3 className="text-xl text-foreground">{title}</h3>
        </Button>
      </div>
      {(showMarquee || isFadingOut) && (
        <div className={cn({
          "animate-fade-in": isFadingIn,
          "animate-fade-out": isFadingOut,
        })}>
          <Marquee items={items} />
        </div>
      )}
    </div>
  );
}
