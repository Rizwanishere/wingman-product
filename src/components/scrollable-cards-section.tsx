"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollableCardsSectionProps {
  imageOnRight: boolean;
  title: string;
  subtitle: string;
}

const ScrollableCardsSection = ({ imageOnRight, title, subtitle }: ScrollableCardsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Innovative Solutions",
      description: "Our cutting-edge platform provides innovative solutions to transform your business operations."
    },
    {
      id: 2,
      title: "Expert Support",
      description: "Get dedicated support from our team of industry experts available 24/7."
    },
    {
      id: 3,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our advanced analytics and reporting tools."
    },
    {
      id: 4,
      title: "Seamless Integration",
      description: "Easily integrate with your existing systems and workflows for a seamless experience."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const textContent = (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple">{title}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-lg text-gray-600 mb-8">
          {subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
              <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
            </div>
            <p className="text-gray-700">Comprehensive business solutions tailored to your needs</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
              <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
            </div>
            <p className="text-gray-700">Scalable platform that grows with your business</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-strata-purple/20 flex items-center justify-center mt-1">
              <div className="h-3 w-3 rounded-full bg-strata-purple"></div>
            </div>
            <p className="text-gray-700">Industry-leading security and compliance standards</p>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4"
      >
        <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white">
          Learn More
        </Button>
      </motion.div>
    </div>
  );

  const cardsContent = (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-full p-1"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="h-52 bg-gray-200 animate-pulse flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-strata-darkPurple mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeIndex === index ? "bg-strata-purple" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imageOnRight ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {textContent}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {cardsContent}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {cardsContent}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {textContent}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollableCardsSection;
