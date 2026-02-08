import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { LegacySection } from "@/components/legacy-section"
import { CategoriesSection } from "@/components/categories-section"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { SignatureSection } from "@/components/signature-section"
import { ServicesSection } from "@/components/services-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <LegacySection />
      <CategoriesSection />
      <CraftsmanshipSection />
      <SignatureSection />
      <ServicesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
