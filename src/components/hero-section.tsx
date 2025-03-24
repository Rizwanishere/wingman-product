"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeDown, fadeIn, fadeUp } from "@/lib/animation";
import { AnimatedSection, AnimatedText } from "./ui/animated-section";

const HeroSection = () => {
  return (
    <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <AnimatedSection variants={fadeDown(0.2)}>
            <h1 className="hero-heading mb-6">
              Identity software built to end fragmentation and unify access
            </h1>
          </AnimatedSection>

          <AnimatedText
            delay={0.4}
            className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Strata brings single sign-on to multi-IDP environments. Unify access, modernize apps still using legacy authentication, rationalize IDPs, and build resilience for the long haul.
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

        {/* Client logos */}
        <AnimatedSection
          variants={fadeIn(0.8)}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="w-24 h-12 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 100 50" className="w-full h-full opacity-80">
                <text x="5" y="30" fontSize="16" fontWeight="bold" fill="#ffffff">CLIENT {index}</text>
              </svg>
            </motion.div>
          ))}
        </AnimatedSection>
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
  );
};

export default HeroSection;
