"use client";

import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";

const ClientsSection = () => {
  // Real client/partner logos data
  const logoPlaceholders = [
    { id: 1, name: "Microsoft", logo: "M" },
    { id: 2, name: "Okta", logo: "O" },
    { id: 3, name: "Ping Identity", logo: "P" },
    { id: 4, name: "Amazon", logo: "A" },
    { id: 5, name: "IBM", logo: "I" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedHeading className="section-heading mb-2">
            We like everyone.
          </AnimatedHeading>
          <AnimatedText delay={0.1} className="text-xl text-strata-blue font-medium">
            Our identity software is truly vendor-agnostic.
          </AnimatedText>
        </div>

        <AnimatedSection delay={0.3} className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't get locked-in. Connect every service to every app through your custom identity fabric and switch vendors when it makes sense.
            The <span className="text-strata-blue font-medium">typical identity service turnover</span> is at least five to eight years. A fabric turns that
            cycle down to 1-3 years. Build yours to stay flexible through business change.
          </motion.p>
        </AnimatedSection>

        <AnimatedStaggerContainer
          delay={0.5}
          staggerDelay={0.1}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {logoPlaceholders.map((logo) => (
            <AnimatedStaggerItem key={logo.id}>
              <motion.div
                className="w-28 h-16 relative"
                whileHover={{
                  scale: 1.1,
                  rotate: [-1, 1, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <svg viewBox="0 0 112 64" className="w-full h-full bg-gray-100 rounded-md p-4 transition-colors duration-300 hover:bg-gray-200">
                  <text x="56" y="36" fontSize="16" fontWeight="bold" fill="#3a346c" textAnchor="middle">{logo.name}</text>
                </svg>
              </motion.div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
};

export default ClientsSection;
