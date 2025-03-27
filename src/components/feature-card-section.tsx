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
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
            What Services we offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of services designed to enhance your security and digital transformation
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
              <h3 className="text-2xl md:text-3xl font-bold text-strata-darkBlue mb-4">
                Integration and stack modernization
              </h3>
              <p className="text-gray-600 mb-6">
                Our Integration and stack modernization services gets the essentials for businesses seeking to optimize their technology infrastructure and improve operational efficiency. These services involve connecting disparate systems and applications within an organization's technology stack, ensuring seamless data flow and communication. Additionally, we can help modernize legacy systems by migrating them to newer, more scalable technologies, enhancing performance, security, and compatibility with modern business needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Seamless system integration</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Legacy system modernization</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Improved operational efficiency</p>
                </li>
              </ul>
              <Button className="bg-strata-blue hover:bg-strata-darkBlue text-white self-start">
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
              <h3 className="text-2xl md:text-3xl font-bold text-strata-darkBlue mb-4">
                Wingman Product Services
              </h3>
              <p className="text-gray-600 mb-6">
                Integration and support services are crucial for ensuring that Wingman or Feather seamlessly integrate with existing systems and infrastructure within your organization. These services involve configuring, customizing, and helping test your venture to ensure compatibility and optimal performance. Additionally, we can provide ongoing support, troubleshooting, and maintenance to address any issues that may arise during product usage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Custom configuration and integration</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Ongoing technical support</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                  </div>
                  <p className="text-gray-700">Enhanced operational efficiency</p>
                </li>
              </ul>
              <Button className="bg-strata-blue hover:bg-strata-darkBlue text-white self-start">
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
