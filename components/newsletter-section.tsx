"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./reveal"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-xl mx-auto text-center">
        <Reveal direction="up">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3">
            Stay Informed
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            Join the World of DidarGold
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10">
            Be the first to discover our latest creations, exclusive events, 
            and the stories behind our most extraordinary pieces.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <p className="font-serif text-xl text-foreground">Thank you</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Welcome to the world of DidarGold.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
