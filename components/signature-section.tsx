"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function SignatureSection() {
  return (
    <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
      <Image
        src="/1.jpg"
        alt="DidarGold unique jewelry collection"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* Background "Unique" Text - Positioned to sit on top of background but behind content */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 select-none pointer-events-none w-full min-w-0 mix-blend-overlay opacity-50"
           style={{ maskImage: "linear-gradient(to left, transparent 50%, black 80%)", WebkitMaskImage: "linear-gradient(to left, transparent 50%, black 80%)" }}>
        <span className="font-script text-[18rem] lg:text-[38rem] text-white/10 leading-none whitespace-nowrap block ml-[-14rem] lg:ml-[-26rem]">
          Unique
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 pl-8 lg:pl-16 xl:pl-24">
        <Reveal direction="up" delay={0.15} duration={0.9}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-[0.8] tracking-wide uppercase">
            <span className="block">UNIQUE</span>
            <span className="block mt-[-0.1em]">JEWELRY</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.35}>
          <p className="mt-8 text-sm text-white/60 max-w-sm leading-relaxed">
            Customize your unique ring with graphic angles and pure lines that 
            combine to create the pure beauty of the collection.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.5}>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Discover the collection
          </a>
        </Reveal>
      </div>
    </section>
  )
}
