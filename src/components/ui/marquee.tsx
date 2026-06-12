import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "[--marquee-duration:60s]",
  normal: "[--marquee-duration:40s]",
  fast: "[--marquee-duration:25s]",
};

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        speedMap[speed],
        pauseOnHover && "[&:hover_.marquee-track]:animation-play-state-paused]",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track flex min-w-full shrink-0 items-center gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "marquee-track flex min-w-full shrink-0 items-center gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
