"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-3xl md:text-4xl font-bold text-wingman-darkBlue mb-4">
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
            {/* Image - Will show first on mobile */}
            <div className="relative h-full min-h-[300px] order-first md:order-1">
              <Image
                src="https://platform3solutions.com/wp-content/uploads/2024/02/IT-Modernization-the-new-IT-stack-has-arrived.webp"
                alt="Integration and stack modernization"
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-last md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-wingman-darkBlue mb-4">
                Integration and stack modernization
              </h3>
              <p className="text-gray-600 mb-6">
                Our Integration and stack modernization services gets the essentials for businesses seeking to optimize their technology infrastructure and improve operational efficiency. These services involve connecting disparate systems and applications within an organization's technology stack, ensuring seamless data flow and communication. Additionally, we can help modernize legacy systems by migrating them to newer, more scalable technologies, enhancing performance, security, and compatibility with modern business needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Seamless system integration</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Legacy system modernization</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Improved operational efficiency</p>
                </li>
              </ul>
              <Button 
                className="bg-wingman-blue hover:bg-wingman-darkBlue text-white self-start"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-last md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-wingman-darkBlue mb-4">
                Wingman Product Services
              </h3>
              <p className="text-gray-600 mb-8">
                Integration and support services are crucial for ensuring that Wingman seamlessly integrates with existing systems and infrastructure within your organization. These services involve configuring, customizing, and helping test your venture to ensure compatibility and optimal performance. Additionally, we can provide ongoing support, troubleshooting, and maintenance to address any issues that may arise during product usage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Custom configuration and integration</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Ongoing technical support</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-wingman-blue/20 flex items-center justify-center mt-1">
                    <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
                  </div>
                  <p className="text-gray-700">Enhanced operational efficiency</p>
                </li>
              </ul>
              <Button 
                className="bg-wingman-blue hover:bg-wingman-darkBlue text-white self-start"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Image - Will show first on mobile */}
            <div className="relative h-full min-h-[300px] order-first md:order-2">
              <Image
                src="https://www.montrealinternational.com/app/uploads/2019/03/cybersecurity-montreal-1.jpg"
                alt="Wingman Product Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCardSection;

