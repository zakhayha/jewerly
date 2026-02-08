"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero video background with zoom-in effect */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <video
          src="/hero/PC.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Luxury jewelry hero video"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left pl-6 lg:pl-12 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6"
        >
          Haute Joaillerie — Paris, Since 1892
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-wide text-balance max-w-4xl"
        >
          Where Diamonds
          <br />
          <span className="italic">Meet Dreams</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 text-sm md:text-base text-white/70 max-w-lg leading-relaxed"
        >
          Each creation is a testament to the art of the extraordinary,
          handcrafted by our master jewelers in the heart of Paris.
        </motion.p>
        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
        >
          Discover the Collection
        </motion.a>
      </div>
    </section>
  )
}
