"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
  title: string;
  /** valor do atributo sizes do next/image */
  sizes: string;
  /** numero do projeto, mostrado no canto da moldura */
  number?: string;
  priority?: boolean;
}

export default function ProjectCarousel({
  images,
  title,
  sizes,
  number,
  priority = false,
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const baseId = useId();
  const total = images.length;
  const hasMany = total > 1;

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + total) % total),
    [total],
  );

  return (
    <div className="group/carousel">
      <div
        role={hasMany ? "group" : undefined}
        aria-roledescription={hasMany ? "carrossel" : undefined}
        aria-label={hasMany ? `Telas do projeto ${title}` : undefined}
        tabIndex={hasMany ? 0 : undefined}
        onKeyDown={(e) => {
          if (!hasMany) return;
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
        }}
        className="relative aspect-[2/1] rounded-sm overflow-hidden border border-border bg-surface transition-colors duration-700 group-hover/carousel:border-accent/40 focus-visible:outline-none focus-visible:border-accent/60"
      >
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${title} — ${image.caption}`}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            aria-hidden={i !== index}
            className={`object-cover object-top transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none border-l border-t border-white/20 group-hover/carousel:border-accent/60 transition-colors duration-500" />
        <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none border-r border-b border-white/20 group-hover/carousel:border-accent/60 transition-colors duration-500" />

        {number && (
          <div className="absolute bottom-4 left-4 pointer-events-none font-mono text-xs text-white/50 tracking-[0.3em]">
            {number}
          </div>
        )}

        {hasMany && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Tela anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-sm border border-white/15 bg-background/70 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:text-accent opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 max-sm:opacity-100"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima tela"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-sm border border-white/15 bg-background/70 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:text-accent opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 max-sm:opacity-100"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-background/70 backdrop-blur-sm">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para a tela ${i + 1} de ${total}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-foreground/40 hover:bg-foreground/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p
        id={`${baseId}-caption`}
        aria-live="polite"
        className="mt-3 font-mono text-xs text-muted tracking-wide"
      >
        {hasMany && (
          <span className="text-accent/70">
            {index + 1}/{total}{" "}
          </span>
        )}
        {images[index].caption}
      </p>
    </div>
  );
}
