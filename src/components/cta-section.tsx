"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-strata-blue to-strata-darkBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience the platform
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              See how our intelligent, distributed cybersecurity platform harnesses the power of data and AI to protect your organization now and in the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    className="bg-white text-strata-darkBlue hover:bg-white/90 w-full sm:w-auto text-lg px-8 py-6 h-auto"
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="bg-white text-strata-darkBlue hover:bg-white/90 w-full sm:w-auto text-lg px-8 py-6 h-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
