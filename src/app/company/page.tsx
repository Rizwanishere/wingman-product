"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";
import { fadeIn, fadeUp } from "@/lib/animation";
import { ChevronRight } from "lucide-react";

export default function CompanyPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Eric Olden",
      title: "Co-founder & CEO",
      bio: "Experienced identity leader with multiple successful exits in the identity space"
    },
    {
      name: "Heidi Kujawa",
      title: "Co-founder & CTO",
      bio: "Expert in identity architecture and enterprise-scale IAM solutions"
    },
    {
      name: "John Smith",
      title: "Chief Revenue Officer",
      bio: "25+ years in enterprise software sales and go-to-market leadership"
    },
    {
      name: "Sarah Johnson",
      title: "VP of Product",
      bio: "Former IAM architect with experience at Fortune 100 companies"
    }
  ];

  // Values data
  const values = [
    {
      title: "Customer-First Innovation",
      description: "We build solutions that solve real customer problems, not technology for technology's sake."
    },
    {
      title: "Vendor Agnosticism",
      description: "We believe in giving customers choice and flexibility to use the best tools for their needs."
    },
    {
      title: "Technical Excellence",
      description: "We're committed to building reliable, secure, and high-performance products."
    },
    {
      title: "Continuous Improvement",
      description: "We constantly seek to improve our products, processes, and ourselves."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection variants={fadeUp(0.2)}>
              <h1 className="hero-heading mb-6">
                About Strata
              </h1>
            </AnimatedSection>

            <AnimatedText delay={0.4} className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We're on a mission to simplify identity management and help organizations achieve secure, seamless access across their entire technology ecosystem.
            </AnimatedText>
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

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection variants={fadeIn(0.3)} className="md:w-1/2">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-video w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 225" className="w-full h-full">
                    <rect width="400" height="225" fill="#a99bcf" opacity="0.4" />
                    <text x="200" y="112" fontSize="20" fontWeight="bold" fill="#3a346c" textAnchor="middle">Company Image</text>
                  </svg>
                </div>
              </div>
            </AnimatedSection>

            <div className="md:w-1/2">
              <AnimatedHeading className="section-heading mb-6">
                Our Story
              </AnimatedHeading>

              <AnimatedText delay={0.2} className="text-gray-600 mb-4">
                Founded in 2019, Strata emerged from the recognition that enterprises were struggling with fragmented identity systems that created security gaps, administrative overhead, and poor user experiences.
              </AnimatedText>

              <AnimatedText delay={0.3} className="text-gray-600 mb-4">
                Our founders, veterans of the identity industry, saw that organizations needed a way to unify their existing identity infrastructure rather than replace it. This insight led to the development of the Maverics Identity Orchestration Platform.
              </AnimatedText>

              <AnimatedText delay={0.4} className="text-gray-600 mb-6">
                Today, Strata helps organizations of all sizes simplify their identity architectures, improve security, and enhance user experiences through our innovative identity fabric approach.
              </AnimatedText>

              <AnimatedSection variants={fadeUp(0.5)}>
                <Button
                  asChild
                  variant="outline"
                  className="border-strata-purple text-strata-purple hover:bg-strata-purple/10"
                >
                  <Link href="/careers">
                    Join our team
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-strata-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="section-heading mb-6">
              Our Leadership
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Led by experienced identity industry veterans with a passion for innovation and customer success.
            </AnimatedText>
          </div>

          <AnimatedStaggerContainer
            delay={0.3}
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <AnimatedStaggerItem key={index}>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-24 h-24 rounded-full bg-strata-lightPurple/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-strata-darkPurple">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-strata-darkPurple mb-1">{member.name}</h3>
                  <p className="text-strata-purple font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="section-heading mb-6">
              Our Values
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-4 max-w-2xl mx-auto">
              The principles that guide our decisions, actions, and interactions with customers, partners, and each other.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-strata-purple/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-strata-purple">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-strata-darkPurple mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investors and Recognitions Section */}
      <section className="py-20 bg-strata-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedHeading className="section-heading mb-6">
                Investors & Recognitions
              </AnimatedHeading>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[1, 2, 3, 4].map((index) => (
                <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                  <div className="bg-white h-24 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 100 40" className="w-full h-full p-4">
                      <text x="50" y="24" fontSize="12" fontWeight="bold" fill="#3a346c" textAnchor="middle">Investor {index}</text>
                    </svg>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mb-12">
              <AnimatedHeading className="text-2xl md:text-3xl font-bold text-strata-darkPurple mb-6">
                Industry Recognition
              </AnimatedHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Gartner Cool Vendor in Identity Access Management, 2022",
                "KuppingerCole Market Leader in Identity Orchestration, 2023",
                "Forrester Wave™ Strong Performer, Identity Management, 2023"
              ].map((award, index) => (
                <AnimatedSection key={index} delay={0.3 + (index * 0.1)}>
                  <div className="bg-white p-6 rounded-lg text-center h-full flex flex-col items-center justify-center">
                    <span className="text-strata-teal mb-2">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </span>
                    <p className="text-strata-darkPurple font-medium">{award}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-strata-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading className="section-heading mb-6">
              Join us on our mission
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to join our team, partner with us, or leverage our platform to solve your identity challenges, we'd love to connect with you.
            </AnimatedText>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedSection variants={fadeIn(0.3)}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    className="bg-strata-purple hover:bg-strata-darkPurple text-white flex items-center gap-2 w-full sm:w-auto"
                  >
                    <Link href="/demo">
                      Get a demo
                      <ChevronRight size={16} />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection variants={fadeIn(0.4)}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="border-strata-purple text-strata-purple hover:bg-strata-purple/10 flex items-center gap-2 w-full sm:w-auto"
                  >
                    <Link href="/careers">
                      View careers
                      <ChevronRight size={16} />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
