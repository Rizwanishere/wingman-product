import HeroSection from "@/components/hero-section";
import CaseStudiesSection from "@/components/case-studies-section";
import PartnersSection from "@/components/partners-section";
import CtaSection from "@/components/cta-section";
import ScrollableCardsSection from "@/components/scrollable-cards-section";
import FaqSection from "@/components/faq-section";
import LatestNewsSection from "@/components/latest-news-section";
import FeatureCardSection from "@/components/feature-card-section";
import ContactSection from "@/components/contact-section";
import LargeWideBanner from "@/components/large-wide-banner";

export default function Home() {
  return (
    <>
      {/* Hero Section - Landing Page */}
      <HeroSection />

      {/* Large Wide Banner */}
      <LargeWideBanner />

      {/* Left text with right scrollable cards */}
      <ScrollableCardsSection
        imageOnRight={true}
        title="Why Wingman?"
        subtitle="Discover how Wingman can transform your business"
      />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Services Section with FEATHER */}
      <ScrollableCardsSection
        imageOnRight={false}
        title="What is FEATHER?"
        subtitle="Feather is a ecosystem of services designed to deliver use cases in digital space that require data processing and content rendering at high speeds."
      />

      {/* Latest News Section */}
      <LatestNewsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Feature Card Section - Two wide cards with alternating layout */}
      <FeatureCardSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section - Experience the platform */}
      <CtaSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
