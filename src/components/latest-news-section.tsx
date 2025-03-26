"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestNewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Wingman Launches New Enterprise Solution",
      date: "March 15, 2024",
      excerpt: "Our latest enterprise solution provides advanced security features and enhanced customization options...",
      category: "Product Update"
    },
    {
      id: 2,
      title: "Expanding Our Global Reach",
      date: "February 28, 2024",
      excerpt: "We're excited to announce our expansion into new markets with dedicated regional support teams...",
      category: "Company News"
    },
    {
      id: 3,
      title: "The Future of Business Analytics",
      date: "February 10, 2024",
      excerpt: "Discover how advanced analytics are transforming business decision-making processes...",
      category: "Industry Insights"
    }
  ];

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
            Latest News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, product updates, and industry insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                <p className="text-gray-500">Image placeholder</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium px-3 py-1 bg-strata-purple/10 text-strata-purple rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <Button variant="link" className="text-strata-purple p-0 h-auto font-medium flex items-center">
                  Read More
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
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
