import Image from "next/image";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
}

export function BrandLogo({
  variant = "nav",
  className,
  priority = false,
}: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <Image
        src={SITE.logoUrl}
        alt={`${SITE.name} logo`}
        width={1024}
        height={577}
        className={cn("h-16 w-auto object-contain object-left sm:h-20", className)}
        sizes="(max-width: 640px) 200px, 280px"
      />
    );
  }

  return (
    <Image
      src={SITE.logoUrl}
      alt={SITE.name}
      width={1024}
      height={577}
      priority={priority}
      className={cn(
        "h-10 w-auto object-contain object-left sm:h-11",
        className
      )}
      sizes="(max-width: 640px) 140px, 160px"
    />
  );
}
