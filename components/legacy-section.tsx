"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function LegacySection() {
  return (
    <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
      <Image
        src="/1.jpg"
        alt="DidarGold legacy jewelry collection"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 pl-8 lg:pl-16 xl:pl-24">
        <Reveal direction="none" duration={1}>
          <p className="text-xs tracking-[0.4em] uppercase text-white/60 mb-6">
            The Maison
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.15} duration={0.9}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight max-w-2xl">
            A Legacy of
            <br />
            <span className="italic">Timeless Beauty</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.35}>
          <p className="mt-6 text-sm text-white/60 max-w-md leading-relaxed">
            From the ateliers of Place Vendome to the world&apos;s most prestigious
            salons, DidarGold has adorned generations with the extraordinary.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.5}>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Discover Our Story
          </a>
        </Reveal>
      </div>
    </section>
  )
}
