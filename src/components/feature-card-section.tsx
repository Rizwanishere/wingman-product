"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCardSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple mb-4">
            Why Choose Wingman
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make Wingman the preferred choice for businesses worldwide.
          </p>
        </motion.div>

        {/* First Card - Image on Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-200 h-full min-h-[300px] animate-pulse flex items-center justify-center order-2 md:order-1">
              <p className="text-gray-500">Image placeholder</p>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-strata-darkPurple mb-4">
                Comprehensive Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Our platform offers end-to-end solutions for businesses of all sizes. From advanced analytics and process automation to customer experience tools and strategic consulting, we provide everything you need to optimize operations and drive growth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">Integrated platform for all business needs</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">Customizable solutions for your specific challenges</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">Seamless integration with existing systems</p>
                </li>
              </ul>
              <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white self-start">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Second Card - Image on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-strata-darkPurple mb-4">
                Expert Support & Guidance
              </h3>
              <p className="text-gray-600 mb-6">
                Our team of industry experts is dedicated to your success. We provide personalized support, strategic guidance, and comprehensive training to ensure you get the most out of our platform and achieve your business goals.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">24/7 dedicated support team</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">Regular training and educational resources</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
                  </div>
                  <p className="text-gray-700">Strategic consultation for optimal results</p>
                </li>
              </ul>
              <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white self-start">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-200 h-full min-h-[300px] animate-pulse flex items-center justify-center">
              <p className="text-gray-500">Image placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCardSection;
