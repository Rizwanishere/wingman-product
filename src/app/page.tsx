import HeroSection from "@/components/hero-section";
import FeaturedCard from "@/components/featured-card";
import FeaturesSection from "@/components/features-section";
import TestimonialSection from "@/components/testimonial-section";
import UseCasesSection from "@/components/use-cases-section";
import ClientsSection from "@/components/clients-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FeaturedCard
            title="Your Must-Read on Identity Orchestration"
            rating="4.5"
            description="You'll walk away with a clear idea of how orchestration makes the identity fabric possible, why you need a custom fabric to reach Zero Trust Goals, and how the Maverics Identity Platform can help you get started. (Plus a lot of other great things.)"
            ctaText="Get report"
            ctaLink="/whitepaper"
            currentIndex={1}
            totalSlides={3}
          />
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
