"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";

interface FeatureCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  index?: number;
}

const FeatureCard = ({ title, description, linkText, linkHref, index = 0 }: FeatureCardProps) => {
  return (
    <AnimatedStaggerItem>
      <motion.div
        className="flex flex-col p-6 h-full bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <h3 className="text-xl font-semibold text-wingman-darkBlue mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {linkText && linkHref && (
          <motion.div
            className="mt-auto"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={linkHref}
              className="text-wingman-blue hover:text-wingman-darkBlue font-medium inline-flex items-center"
            >
              {linkText}
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                  delay: index * 0.2
                }}
              >
                <ChevronRight size={16} className="ml-1" />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </AnimatedStaggerItem>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Unify Single Sign-On",
      description: "Manage complex multi-IDP environments with identity software that won't box you in.",
      linkText: "Learn more",
      linkHref: "/features/single-sign-on",
    },
    {
      title: "Modernize identity for apps and portals",
      description: "Even those still stuck on legacy authentication—meet compliance without rewriting everything.",
      linkText: "Learn more",
      linkHref: "/features/modernize-identity",
    },
    {
      title: "Rationalize IDPs",
      description: "Lighten your IAM environment and cut back on maintenance and infrastructure costs so you can keep pace with growth.",
      linkText: "Learn more",
      linkHref: "/features/rationalize-idps",
    },
    {
      title: "Strengthen IAM resilience",
      description: "Because you need redundancy so the lights stay on—even when your primary IDP goes dark.",
      linkText: "Learn more",
      linkHref: "/features/iam-resilience",
    },
  ];

  return (
    <section className="py-20 bg-wingman-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading className="section-heading mb-6">
            IAM is a mess. We make it work.
          </AnimatedHeading>

          <AnimatedText delay={0.2} className="text-lg text-gray-600">
            Identity shouldn't be a roadblock. Here's how to unify, secure, and future-proof your IAM.
          </AnimatedText>
        </div>

        <AnimatedStaggerContainer
          delay={0.3}
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkHref={feature.linkHref}
              index={index}
            />
          ))}
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;




