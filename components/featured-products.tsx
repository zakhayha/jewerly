"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Reveal } from "./reveal"

const products = [
  {
    name: "Happy Hearts",
    collection: "HAPPY HEARTS",
    materials: "Bracelet, Ethical Rose Gold, Diamonds, Mother of Pearl",
    price: "$6,370",
    images: ["/cards/1.webp", "/cards/1.1.webp", "/cards/1.2.webp"],
  },
  {
    name: "Ice Cube Pure",
    collection: "ICE CUBE PURE",
    materials: "Ring, Ethical White Gold, Diamond",
    price: "$3,890",
    images: ["/cards/2.webp", "/cards/2.1.webp", "/cards/2.2.webp"],
  },
  {
    name: "Ice Cube",
    collection: "ICE CUBE",
    materials: "Ring, Ethical Rose Gold, Diamonds",
    price: "$4,140",
    images: ["/cards/3.webp", "/cards/3.1.webp", "/cards/3.2.webp"],
  },
  {
    name: "Happy Hearts",
    collection: "HAPPY HEARTS",
    materials: "Bracelet, Ethical Rose Gold, Mother of Pearl",
    price: "$5,370",
    images: ["/cards/4.webp", "/cards/4.1.webp", "/cards/4.2.webp"],
  },
  {
    name: "Ice Cube Pure",
    collection: "ICE CUBE PURE",
    materials: "Ring, Ethical White Gold, Diamond",
    price: "$2,130",
    images: ["/cards/1.webp", "/cards/1.1.webp", "/cards/1.2.webp"],
  },
  {
    name: "Ice Cube",
    collection: "ICE CUBE",
    materials: "Ring, Ethical Rose Gold, Diamonds",
    price: "$8,900",
    images: ["/cards/2.webp", "/cards/2.1.webp", "/cards/2.2.webp"],
  },
]

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [liked, setLiked] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const totalImages = product.images.length

  const goToPrev = () => {
    setActiveImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <div
      className="group/card relative flex flex-col bg-[hsl(40_10%_93%)] h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist heart icon - top right */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center"
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-[18px] h-[18px] transition-all duration-300 ${
            liked
              ? "fill-foreground stroke-foreground"
              : "fill-none stroke-foreground/30 hover:stroke-foreground/60"
          }`}
          strokeWidth={1.5}
        />
      </button>

      {/* Product image area */}
      <a href="#" className="block relative">
        <div className="relative aspect-[3/4] w-full flex items-center justify-center p-10 md:p-12 overflow-hidden">
          <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover/card:scale-110">
            <Image
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={`${product.name} - View ${activeImage + 1}`}
              fill
              className="object-contain transition-opacity duration-300"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
            />
          </div>
        </div>

        {/* Per-card carousel arrows - appear on hover */}
        <button
          onClick={(e) => {
            e.preventDefault()
            goToPrev()
          }}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/60 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-foreground/60" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            goToNext()
          }}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/60 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-foreground/60" />
        </button>
      </a>

      {/* Per-card dot indicators - centered, Chopard style */}
      <div className="flex items-center justify-center gap-1.5 pt-2 pb-4">
        {Array.from({ length: totalImages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`block h-[2.5px] rounded-full transition-all duration-400 ${
              i === activeImage
                ? "w-7 bg-foreground/70"
                : "w-[5px] bg-foreground/15"
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>

      {/* Product info - inside the card bg */}
      <div className="px-5 pb-6 flex flex-col gap-1 mt-auto">
        <h3 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground leading-snug">
          {product.collection}
        </h3>
        <p className="text-[10.5px] tracking-[0.06em] uppercase text-muted-foreground leading-relaxed mt-0.5">
          {product.materials}
        </p>
        <p className="text-[13px] tracking-[0.1em] text-foreground/70 mt-2">
          {product.price}
        </p>
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedSnap, setSelectedSnap] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedSnap(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="collections" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <Reveal direction="up">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3">
              New Arrivals
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              Signature Pieces
            </h2>
          </div>
        </Reveal>

        {/* Chopard-style carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-5">
            {products.map((product, idx) => (
              <div
                key={`${product.name}-${idx}`}
                className="flex-none w-[80vw] sm:w-[45vw] lg:w-[calc(25%-15px)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom carousel pagination - LEFT aligned, Chopard style */}
        <div className="mt-10 flex items-center gap-1.5">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`block h-[3px] rounded-full transition-all duration-400 ${
                idx === selectedSnap
                  ? "w-10 bg-foreground/70"
                  : "w-[6px] bg-foreground/15"
              }`}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
