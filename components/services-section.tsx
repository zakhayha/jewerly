"use client"

import { Gift, Truck, Phone, Sparkles } from "lucide-react"
import { Reveal, StaggerChildren, StaggerItem } from "./reveal"

const services = [
  {
    icon: Gift,
    title: "Complimentary Gift Packaging",
    description: "Each creation arrives in our signature ivory and gold case",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description: "Insured shipping to over 80 countries with tracking",
  },
  {
    icon: Phone,
    title: "Personal Advisor",
    description: "Our experts are available to guide your selection",
  },
  {
    icon: Sparkles,
    title: "Lifetime Care",
    description: "Complimentary cleaning and maintenance for every piece",
  },
]

export function ServicesSection() {
  return (
    <section id="maison" className="py-24 lg:py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3">
              At Your Service
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
              The DidarGold Experience
            </h2>
          </div>
        </Reveal>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          staggerDelay={0.12}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-border group-hover:border-accent transition-colors duration-300 mb-5">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
