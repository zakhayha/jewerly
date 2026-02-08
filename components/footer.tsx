"use client"

import Link from "next/link"
import { Reveal, StaggerChildren, StaggerItem } from "./reveal"
import { Logo } from "./logo"

const footerLinks = {
  Collections: ["High Jewelry", "Rings", "Necklaces", "Bracelets", "Earrings", "Watches"],
  "The Maison": ["Our Story", "Savoir-Faire", "Artisans", "Sustainability", "Press"],
  Services: ["Boutiques", "Book an Appointment", "Gift Cards", "Care & Repair", "FAQs"],
  "Legal": ["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top section */}
        <StaggerChildren
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16"
          staggerDelay={0.08}
        >
          {/* Brand */}
          <StaggerItem className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 w-44 h-11 text-white">
              <Logo className="w-full h-full" />
            </Link>
            <p className="text-xs leading-relaxed text-background/50 max-w-xs">
              Maison DidarGold, Place Vendome, Paris. 
              Haute Joaillerie since 1892.
            </p>
          </StaggerItem>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <StaggerItem key={title}>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-background/40 mb-4">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8" />

        {/* Bottom section */}
        <Reveal direction="none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.15em] text-background/30">
              &copy; 2026 DIDARGOLD. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Instagram", "Pinterest", "Facebook"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-[10px] tracking-[0.15em] uppercase text-background/30 hover:text-background/60 transition-colors"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
