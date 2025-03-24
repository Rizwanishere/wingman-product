"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeIn, fadeLeft, fadeRight, fadeUp } from "@/lib/animation";

export default function PlatformPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection variants={fadeUp(0.2)}>
              <h1 className="hero-heading mb-6">
                Build your identity fabric and modernize identity for good
              </h1>
            </AnimatedSection>

            <AnimatedText delay={0.4} className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Use Identity Orchestration to deploy new services, manage distributed IAM projects, and modernize authentication and authorization across your hybrid ecosystem. All without rewriting apps, increasing tech debt, vendor lock-in, or disrupting the user experience.
            </AnimatedText>

            <AnimatedSection variants={fadeUp(0.6)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  asChild
                  className="bg-white text-strata-darkPurple hover:bg-white/90 text-base font-medium px-6 py-6 h-auto rounded-md"
                >
                  <Link href="/demo">
                    Get a demo
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-strata-purple blur-3xl"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-strata-teal blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
            <AnimatedSection variants={fadeRight(0.3)} className="md:w-1/2">
              <AnimatedHeading className="section-heading mb-6">
                The centralized, adaptive, and scalable solution you need
              </AnimatedHeading>

              <AnimatedText delay={0.4} className="text-gray-600 mb-6">
                Weave your apps and IDPs into a seamless identity fabric. Integrate existing services with apps through config, not code. And yes — the fabric supports every service and IAM architecture, enabling you to respond to new threats, vendors, and challenges.
              </AnimatedText>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  asChild
                  className="bg-strata-purple hover:bg-strata-darkPurple text-white"
                >
                  <Link href="/demo">Get started</Link>
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection variants={fadeLeft(0.4)} className="md:w-1/2">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-video w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 225" className="w-full h-full">
                    <rect width="400" height="225" fill="#a99bcf" opacity="0.4" />
                    <text x="200" y="112" fontSize="20" fontWeight="bold" fill="#3a346c" textAnchor="middle">Platform Diagram</text>
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-strata-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="section-heading mb-4">
              Why build an identity fabric?
            </AnimatedHeading>
          </div>

          <AnimatedStaggerContainer
            delay={0.3}
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Rapid onboarding & deployment",
                description: "Deploy Strata on-prem or in the cloud using platforms like Linux, Windows, Mac, AWS, Azure, and Docker containers. Get fast project wins with rapid application onboarding for SAML and OIDC apps."
              },
              {
                title: "Seamless integration",
                description: "Connect the cloud or on-prem identity services you use today and easily add the ones you want to use visually through the UI. Your custom fabric makes switching or adding new services effortless."
              },
              {
                title: "Enhanced security",
                description: "Use modern app security. Add multi-factor authentication (MFA) and passwordless to any app. Break away from decades-old protocols with known security exploits."
              },
              {
                title: "IDP continuity & resilience",
                description: "Don't lose access to mission-critical apps. Establish survivability and operational continuity with seamless app failover and failback — even during unexpected IDP downtimes."
              },
              {
                title: "Centralized policy management",
                description: "Always know what's going on. Manage and apply all of your authentication, authorization and access policies through a single control plane and easily track administrative changes."
              },
              {
                title: "Flexible modernization",
                description: "Make modernization easy. Move apps to the cloud (or back on prem) effortlessly without rewriting code, retire old IDPs and make paths to log-in consistent for any user type."
              }
            ].map((feature, index) => (
              <AnimatedStaggerItem key={index}>
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-sm h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-strata-darkPurple mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="section-heading mb-6">
              Engineered for enterprise scale with all the essential features
            </AnimatedHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Air gap architecture",
                description: "Secure by design with no runtime dependency on the Maverics cloud, bringing maximum security and independence for sensitive environments."
              },
              {
                title: "Natively hybrid multi-cloud",
                description: "Maverics distributed architecture works seamlessly on-premises and in the cloud, supporting hybrid and multi-cloud deployments for complex enterprises."
              },
              {
                title: "Global design",
                description: "Supports regional data regulations and global performance requirements, ensuring compliance by keeping sensitive data in-country/region."
              },
              {
                title: "Cloud scale performance",
                description: "Maverics scales horizontally and vertically even in the most demanding environments, so you get reliable, first-rate performance."
              },
              {
                title: "Simple self-serve experience",
                description: "Design, test, and deploy identity workflows across all your services with our intuitive UI, reducing the need for specialized expertise."
              },
              {
                title: "Standards-Based Design",
                description: "Do more with the team you already have — deploying Maverics needs no special unicorn-level expertise using industry standard protocols."
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                <motion.div
                  className="border border-gray-100 p-6 rounded-lg h-full flex flex-col"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-strata-darkPurple mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <AnimatedSection variants={fadeUp(0.5)}>
              <Button
                asChild
                className="bg-strata-purple hover:bg-strata-darkPurple text-white"
              >
                <Link href="/docs" className="inline-flex items-center">
                  Explore our docs
                  <ChevronRight className="ml-2" size={16} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-strata-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading className="section-heading mb-6">
              Ready to build your identity fabric?
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how Strata's Maverics Platform can help you integrate your identity infrastructure and simplify your IAM strategy.
            </AnimatedText>

            <AnimatedSection variants={fadeIn(0.4)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  asChild
                  className="bg-strata-purple hover:bg-strata-darkPurple text-white px-8 py-6 h-auto text-lg"
                >
                  <Link href="/demo">
                    Get a demo
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
