"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { articlesItems } from "@/data/articles-items";

const LatestArticlesSection = () => {
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
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section id="latest-articles" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-wingman-darkBlue mb-4">
            Latest Articles
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
              {articlesItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0"
                  style={{ width: "300px" }}
                >
                  <Link href={`/articles/${item.id}`} className="flex flex-col h-full">
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
                        <span className="text-sm font-medium px-3 py-1 bg-wingman-blue/10 text-wingman-blue rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-wingman-darkBlue mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.excerpt}
                      </p>
                      <Button variant="link" className="text-wingman-blue p-0 h-auto font-medium flex items-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator Bar */}
          <div className="relative h-1 bg-gray-200 rounded-full mt-2 mb-6">
            <div 
              className="absolute h-1 bg-wingman-blue rounded-full transition-all duration-150 ease-out"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {articlesItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <Link href={`/articles/${item.id}`} className="flex flex-col h-full">
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
                    <span className="text-sm font-medium px-3 py-1 bg-wingman-blue/10 text-wingman-blue rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-wingman-darkBlue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="text-wingman-blue p-0 h-auto font-medium flex items-center">
                    Read More
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

export default LatestArticlesSection;




