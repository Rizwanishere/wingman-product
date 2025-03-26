"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Tech Innovations Inc.",
      category: "Technology",
      description: "How a leading tech company increased productivity by 45% with Wingman solutions.",
    },
    {
      id: 2,
      title: "Global Finance Group",
      category: "Finance",
      description: "Streamlining operations and reducing costs by 30% for a multinational financial institution.",
    },
    {
      id: 3,
      title: "HealthCare Partners",
      category: "Healthcare",
      description: "Improving patient care and operational efficiency across a network of hospitals.",
    },
    {
      id: 4,
      title: "Retail Solutions Co.",
      category: "Retail",
      description: "Transforming customer experience and boosting sales for a retail chain.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how businesses across various industries have transformed their operations with Wingman solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                <p className="text-gray-500">Image placeholder</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-medium text-strata-purple mb-2">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {study.description}
                </p>
                <Button variant="link" className="text-strata-purple p-0 h-auto font-medium flex items-center justify-start">
                  Read Case Study
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
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
