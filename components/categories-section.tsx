"use client"

import Image from "next/image"
import { Reveal, StaggerChildren, StaggerItem } from "./reveal"

const categories = [
  {
    name: "Rings",
    description: "Symbols of eternal elegance",
    image: "/explorer/rings.png",
  },
  {
    name: "Necklaces",
    description: "Luminous adornments",
    image: "/explorer/neckless.png",
  },
  {
    name: "Bracelets",
    description: "Delicate expressions of artistry",
    image: "/explorer/brace.png",
  },
  {
    name: "Earrings",
    description: "Captivating brilliance",
    image: "/explorer/earing.png",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3">
              Our Creations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              Explore by Category
            </h2>
          </div>
        </Reveal>

        {/* Categories grid */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          staggerDelay={0.15}
        >
          {categories.map((category) => (
            <StaggerItem key={category.name}>
              <a
                href="#"
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer block"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs tracking-wide text-white/60">
                    {category.description}
                  </p>
                  <div className="mt-4 h-px w-0 group-hover:w-full bg-white/40 transition-all duration-700" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
