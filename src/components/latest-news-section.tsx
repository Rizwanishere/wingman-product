"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const LatestNewsSection = () => {
  // Explicitly type the ref as HTMLDivElement
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  // Track scroll position for indicator
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const percentage = maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * 100 : 0;
      setScrollPercentage(percentage);
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Synthetic Fraud Detection",
      date: "March 15, 2024",
      excerpt: "Synthetic identity fraud is a type of identity theft in which a criminal combines both real and fake personal information to create a new, fictious identity that can then be used for various identity-related schemes, such as credit card fraud, bank fraud, and more.",
      category: "Security Insights",
      imageUrl: "https://www.socure.com/_next/image?url=https%3A%2F%2Fmedia.socure.com%2Fapp%2Fuploads%2F2024%2F12%2FProducts_SigmaSyntheticFraud.webp&w=3840&q=75"
    },
    {
      id: 2,
      title: "Understanding Social Engineering",
      date: "February 28, 2024",
      excerpt: "Social engineering is a dangerous weapon many cybercriminals use to achieve their nefarious goals. It leverages psychological manipulation to deceive individuals into divulging confidential or personal information.",
      category: "Cyber Threats",
      imageUrl: "https://www.nclose.com/wp-content/uploads/istockphoto-621493344-170667a.jpg"
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
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
            Latest News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what's happening in the Identity and Security sector right now
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scrollable List */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            <div className="flex px-4 space-x-6" style={{ minWidth: "min-content" }}>
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0"
                  style={{ width: "300px" }}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium px-3 py-1 bg-strata-blue/10 text-strata-blue rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-strata-darkBlue mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.excerpt}
                    </p>
                    <Button variant="link" className="text-strata-blue p-0 h-auto font-medium flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator Bar */}
          <div className="relative h-1 bg-gray-200 rounded-full mt-2 mb-6">
            <div 
              className="absolute h-1 bg-strata-blue rounded-full transition-all duration-150 ease-out"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium px-3 py-1 bg-strata-blue/10 text-strata-blue rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-strata-darkBlue mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <Button variant="link" className="text-strata-blue p-0 h-auto font-medium flex items-center">
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
          <Button className="bg-strata-blue hover:bg-strata-darkBlue text-white">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
