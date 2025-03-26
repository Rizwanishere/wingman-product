"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-gradient-to-r from-strata-lightGray to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-strata-darkPurple leading-tight">
                World's-Leading<br/>
                Cybersecurity
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Experience lightning - fast response times and exceptional reliability for a secure and protected online journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white px-8 py-6 rounded-lg text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-strata-purple text-strata-purple hover:bg-strata-purple/10 px-8 py-6 rounded-lg text-lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px] rounded-xl shadow-2xl overflow-hidden"
          >
            <Image 
              src="https://www.reuters.com/resizer/v2/SL2P2E7RJNGXVEG7EF42ID72JQ.png?auth=54e3ba27aee5af0abef4d5f67fa397276201993aed0d1a8ee311b0c87628b6cf&width=1098&quality=80"
              alt="Cybersecurity Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-strata-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-strata-lightPurple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
