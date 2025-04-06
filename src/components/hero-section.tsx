"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-gradient-to-r from-wingman-lightGray to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Will show first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl shadow-2xl overflow-hidden order-first lg:order-last"
          >
            <Image
              src="https://www.reuters.com/resizer/v2/SL2P2E7RJNGXVEG7EF42ID72JQ.png?auth=54e3ba27aee5af0abef4d5f67fa397276201993aed0d1a8ee311b0c87628b6cf&width=1098&quality=80"
              alt="Cybersecurity Hero Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wingman-darkBlue leading-tight">
                World's-Leading<br />
                Cybersecurity
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              An AI powered distributed computing platform for Identity safeguarding and Fraud prevention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button
                  className="bg-wingman-blue hover:bg-wingman-darkBlue text-white px-8 py-6 rounded-lg text-lg"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-wingman-blue text-wingman-blue hover:bg-wingman-blue/10 px-8 py-6 rounded-lg text-lg"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-wingman-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-wingman-lightBlue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;




