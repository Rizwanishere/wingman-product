"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Business Consulting",
      description: "Strategic guidance to help your business overcome challenges and achieve sustainable growth."
    },
    {
      id: 2,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights to drive better business decisions."
    },
    {
      id: 3,
      title: "Process Automation",
      description: "Streamline operations and reduce costs with intelligent automation solutions."
    },
    {
      id: 4,
      title: "Customer Experience",
      description: "Enhance customer satisfaction with tailored experiences that drive loyalty and retention."
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Leverage technology to revolutionize your business model and operations."
    },
    {
      id: 6,
      title: "Security Solutions",
      description: "Protect your business with enterprise-grade security solutions and best practices."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-strata-lightGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                <p className="text-gray-500">Image placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Button variant="link" className="text-strata-purple p-0 h-auto font-medium flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
