"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag, User } from "lucide-react"
import { Logo } from "./logo"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "High Jewelry", href: "#collections" },
  { label: "Collections", href: "#categories" },
  { label: "Savoir-Faire", href: "#craftsmanship" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY < 100) {
            setIsVisible(true)
            setIsScrolled(false)
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up
            setIsVisible(true)
            setIsScrolled(true)
          } else if (currentScrollY > lastScrollY.current + 5) {
            // Scrolling down (with small threshold to prevent flicker)
            setIsVisible(false)
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 lg:px-12">
        {/* Left nav - Tiffany hover style */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative text-xs tracking-[0.2em] uppercase py-2 transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground/70 group-hover:text-foreground"
                  : "text-white/80 group-hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              {/* Tiffany-style underline that expands from center - matches text color via bg-current */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-current transition-all duration-400 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link href="/" className={`absolute left-1/2 -translate-x-1/2 flex items-center transition-all duration-500 ${isScrolled ? "mt-0" : "mt-4"}`}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`transition-all duration-500 ${
              isScrolled 
                ? "h-10 w-[150px] lg:h-12 lg:w-[180px] text-foreground" 
                : "h-14 w-[220px] lg:h-16 lg:w-[260px] text-white"
            }`}
          >
            <Logo className="w-full h-full" />
          </motion.div>
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          {[
            { icon: Search, label: "Search", showOnMobile: true },
            { icon: User, label: "Account", showOnMobile: false },
            { icon: ShoppingBag, label: "Shopping bag", showOnMobile: true },
          ].map((item) => (
            <button
              key={item.label}
              aria-label={item.label}
              className={`${!item.showOnMobile ? "hidden sm:block" : ""} transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
