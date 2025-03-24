"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeIn } from "@/lib/animation";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  companyName?: string;
  colorScheme?: "purple" | "teal";
}

const Testimonial = ({
  quote,
  author,
  role,
  companyName,
  colorScheme = "purple"
}: TestimonialProps) => {
  const bgColor = colorScheme === "purple"
    ? "bg-strata-purple"
    : "bg-strata-teal";

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Card className={`border-none shadow-md ${bgColor} text-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg`}>
        <CardContent className="p-8 sm:p-10">
          <motion.blockquote
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              "{quote}"
            </p>
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-semibold">{author}</p>
            {role && <p className="text-white/80 text-sm">{role}</p>}
            {companyName && <p className="text-white/80 text-sm">{companyName}</p>}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection
          variants={fadeIn(0.1)}
          className="max-w-4xl mx-auto"
        >
          <Testimonial
            quote="An identity fabric is an evolution of an organization's IAM infrastructure that is architected to enable identity-first security. Without identity as the fabric, zero-trust is an aspiration."
            author="Gartner"
            colorScheme="purple"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialSection;
