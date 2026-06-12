"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface PoemAnimationProps {
  poemHTML: string;
  backgroundImageUrl: string;
  boyImageUrl?: string;
  className?: string;
  /** When true, hides the inner photo — use an external full-bleed background instead */
  textOnly?: boolean;
}

const BASE_WIDTH = 1000;
const BASE_HEIGHT = 562;

/**
 * Renders the 3D scrolling-text animation hero section.
 */
export function PoemAnimation({
  poemHTML,
  backgroundImageUrl,
  boyImageUrl,
  className,
  textOnly = false,
}: PoemAnimationProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function adjustContentSize() {
      if (!contentRef.current || !scalerRef.current) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const scaleX = viewportWidth / BASE_WIDTH;
      const scaleY = viewportHeight / BASE_HEIGHT;
      const scaleFactor = Math.max(scaleX, scaleY) * 1.05;

      contentRef.current.style.transform = `scale(${scaleFactor})`;
      scalerRef.current.style.width = `${BASE_WIDTH}px`;
      scalerRef.current.style.height = `${BASE_HEIGHT}px`;
    }

    adjustContentSize();
    window.addEventListener("resize", adjustContentSize);
    return () => window.removeEventListener("resize", adjustContentSize);
  }, []);

  const cubeFaces = (
    <>
      <div className="face top" />
      <div className="face bottom" />
      <div
        className="face left text"
        dangerouslySetInnerHTML={{ __html: poemHTML }}
      />
      <div
        className="face right text"
        dangerouslySetInnerHTML={{ __html: poemHTML }}
      />
      <div className="face front" />
      <div
        className="face back text"
        dangerouslySetInnerHTML={{ __html: poemHTML }}
      />
    </>
  );

  return (
    <header className={cn("hero-section", textOnly && "hero-section--text-only", className)}>
      <div className="hero-container">
        <div ref={scalerRef} className="hero-scaler">
          <div
            ref={contentRef}
            className="hero-content"
            style={{
              display: "block",
              width: `${BASE_WIDTH}px`,
              height: `${BASE_HEIGHT}px`,
            }}
          >
            <div className="container-full">
              <div className="animated hue" />
              {!textOnly && (
                <img
                  className="backgroundImage"
                  src={backgroundImageUrl}
                  alt=""
                  aria-hidden="true"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              {boyImageUrl ? (
                <img
                  className="boyImage"
                  src={boyImageUrl}
                  alt=""
                  aria-hidden="true"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}

              <div className="hero-cube-wrap">
                <div className="cube">{cubeFaces}</div>
              </div>

              <div className="container-reflect" aria-hidden="true">
                <div className="cube">{cubeFaces}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
