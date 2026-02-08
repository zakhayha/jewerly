"use client"

import React from "react"

import { useRef } from "react"
import {
  motion,
  useInView,
  type Variant,
} from "framer-motion"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: React.ReactNode
  direction?: RevealDirection
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

const getHiddenVariant = (direction: RevealDirection): Variant => {
  const distance = 60
  switch (direction) {
    case "up":
      return { opacity: 0, y: distance }
    case "down":
      return { opacity: 0, y: -distance }
    case "left":
      return { opacity: 0, x: distance }
    case "right":
      return { opacity: 0, x: -distance }
    case "none":
      return { opacity: 0 }
  }
}

const visibleVariant: Variant = {
  opacity: 1,
  x: 0,
  y: 0,
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: getHiddenVariant(direction),
        visible: visibleVariant,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  amount?: number
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  amount = 0.15,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  direction?: RevealDirection
}) {
  return (
    <motion.div
      variants={{
        hidden: getHiddenVariant(direction),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
