"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function LegacySection() {
  return (
    <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
      <Image
        src="/2.jpg"
        alt="DidarGold emotions jewelry collection"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />

      {/* Background "Emotions" Text - Positioned to sit on top of background but behind content */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-0 select-none pointer-events-none w-full min-w-0 mix-blend-overlay opacity-50"
           style={{ maskImage: "linear-gradient(to right, transparent 50%, black 80%)", WebkitMaskImage: "linear-gradient(to right, transparent 50%, black 80%)" }}>
        <span className="font-script text-[18rem] lg:text-[38rem] text-white/10 leading-none whitespace-nowrap block mr-[-14rem] lg:mr-[-26rem] text-right">
          Emotions
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-end justify-center h-full text-right px-6 pr-8 lg:pr-16 xl:pr-24">
        <Reveal direction="none" duration={1}>
          <p className="font-script text-3xl md:text-5xl text-white/90 mb-[-0.5rem] lg:mb-[-1rem] mr-4 lg:mr-8 z-20 relative lowercase">
            share your
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.15} duration={0.9}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-widest leading-none uppercase">
            EMOTIONS
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.35}>
          <p className="mt-6 text-sm text-white/60 max-w-sm leading-relaxed">
            Colorful gemstones from aquamarine, amethyst, tourmaline to diamonds 
            come together in white gold on this luxury ring.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.5}>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Customize it
          </a>
        </Reveal>
      </div>
    </section>
  )
}
