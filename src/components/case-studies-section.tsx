"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
            FRAUD PREVENTION CASE STUDIES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how our fraud prevention solutions protect businesses and customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
            >
              <Link href={`/case-studies/${study.id}`} className="flex flex-col h-full">
                <div className="relative h-48">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm font-medium text-strata-blue mb-2">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-semibold text-strata-darkBlue mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {study.description}
                  </p>
                  <Button variant="link" className="text-strata-blue p-0 h-auto font-medium flex items-center justify-start">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
