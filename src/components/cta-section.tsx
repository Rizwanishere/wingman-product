"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";
import { fadeIn, fadeLeft, fadeRight } from "@/lib/animation";

const CtaSection = () => {
  return (
    <section className="py-20 bg-strata-lightGray">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex-1">
              <AnimatedSection variants={fadeRight(0.2)} className="max-w-xl">
                <AnimatedHeading className="section-heading mb-6">
                  Finally, secure <em>all</em> your apps with your strategic identity services.
                </AnimatedHeading>

                <AnimatedText delay={0.4} className="text-gray-600 mb-8">
                  Build your identity fabric with Strata so you can accomplish your goals in identity security: leverage your investments, complete your migration, integrate decades of identity architecture, break vendor lock-in, and use the services that work for your organization. Full stop.
                </AnimatedText>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    className="bg-strata-purple hover:bg-strata-darkPurple text-white px-6"
                  >
                    <Link href="/demo">Get a demo</Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Image */}
            <AnimatedSection
              variants={fadeLeft(0.3)}
              className="md:w-2/5 relative h-64 md:h-auto bg-gray-100"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="p-10"
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <rect width="200" height="200" fill="#a9a9be" opacity="0.2" rx="10" />
                    <text x="100" y="100" fontSize="16" fontWeight="bold" fill="#3a346c" textAnchor="middle">Image Placeholder</text>
                  </svg>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </motion.div>

        {/* Client Logos */}
        <AnimatedStaggerContainer
          delay={0.6}
          staggerDelay={0.1}
          className="mt-20 text-center"
        >
          <AnimatedText delay={0.2} className="mb-8 text-xl font-semibold text-strata-darkPurple">
            Trusted by leading organizations
          </AnimatedText>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((index) => (
              <AnimatedStaggerItem key={index}>
                <motion.div
                  className="w-28 h-12 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg viewBox="0 0 112 48" className="w-full h-full opacity-60">
                    <text x="56" y="28" fontSize="12" fontWeight="bold" fill="#3a346c" textAnchor="middle">Partner {index}</text>
                  </svg>
                </motion.div>
              </AnimatedStaggerItem>
            ))}
          </div>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
};

export default CtaSection;
