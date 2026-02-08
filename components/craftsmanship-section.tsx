"use client"

import Image from "next/image"
import { Reveal, StaggerChildren, StaggerItem } from "./reveal"

const stats = [
  { value: "1892", label: "Founded in Paris" },
  { value: "130+", label: "Years of Excellence" },
  { value: "47", label: "Master Artisans" },
  { value: "100%", label: "Ethically Sourced" },
]

export function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal direction="left" duration={0.9}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/master/craftsmanship.jpg"
                alt="Master jeweler at work in the DidarGold atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xs tracking-[0.3em] uppercase gold-text mb-4">
                Savoir-Faire
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide leading-tight mb-6">
                The Art of
                <br />
                <span className="italic">Exceptional</span>
                <br />
                Craftsmanship
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.35}>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md mb-6">
                For over a century, Maison DidarGold has upheld the finest traditions 
                of Parisian haute joaillerie. Each piece is born from the hands of 
                our master artisans, who dedicate hundreds of hours to transform the 
                rarest gems into timeless works of art.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md mb-10">
                From the initial sketch to the final polish, every creation embodies 
                our relentless pursuit of perfection and our deep reverence for the 
                extraordinary beauty of nature{"'"}s treasures.
              </p>
            </Reveal>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 gap-8" staggerDelay={0.12}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div>
                    <p className="font-serif text-3xl md:text-4xl gold-text">
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
