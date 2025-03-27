"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ScrollableCardsSectionProps {
  imageOnRight: boolean;
  title: string;
  subtitle: string;
}

const ScrollableCardsSection = ({ imageOnRight, title, subtitle }: ScrollableCardsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsData = {
    solutions: [
      {
        id: 1,
        title: "BOT Aversion",
        description: "Protection from DDoS, Scraping, Brute Force, Vulnerability Scanning, Fake Account creation."
      },
      {
        id: 2,
        title: "Identity Protection",
        description: "Safety From 3rd Party Fraud By Detecting Phishing, Smishing, Social Engineering By Ensuring Strong Multi Factor Authentication Methods."
      },
      {
        id: 3,
        title: "Insider Threat Protection",
        description: "Zero Trust Policy by keeping Customer as the center of focus."
      },
      {
        id: 4,
        title: "Realtime Activity Monitoring",
        description: "Customer and related entities can be tracked and monitored in real time."
      },
      {
        id: 5,
        title: "Enhanced Access Control",
        description: "Intent based access control enabling smart decision to step when required during the session. Capabilities to revoke OAuth tokens and real time blocking across channels."
      }
    ],
    services: [
      {
        id: 1,
        title: "Dynamic Orchestration",
        description: "Custom orchestrator based on Dog"
      },
      {
        id: 2,
        title: "Notification Capabilities",
        description: "Realtime Notification using SMS and Push"
      },
      {
        id: 3,
        title: "Stream Analytics",
        description: "Data Streaming and Analytics in realtime"
      },
      {
        id: 4,
        title: "DLT Data Sharing",
        description: "Data Sharing using a distributed ledger"
      },
      {
        id: 5,
        title: "AI Enabled",
        description: "Easy Integration with trained models through kafka"
      }
    ]
  };

  const getCardsBasedOnTitle = () => {
    if (title === "Our Solutions") {
      return cardsData.solutions;
    } else if (title === "What is FEATHER?") {
      return cardsData.services;
    }
    return cardsData.solutions; // Default fallback
  };

  const cards = getCardsBasedOnTitle();

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
        <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue">{title}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-lg text-gray-600 mb-8">
          {title === "Our Solutions" 
            ? "Our security systems utilize Distributed computing, Artificial Intelligence, and Distributed ledger technology to identify and neutralize threats in real-time."
            : "Feather is a ecosystem of services designed to deliver use cases in digital space that require data processing and content rendering at high speeds. It delivers you a niche tech stack putting Distributed computing and AI at your fingertips. Wingman utilizes it's framework's strength to stand up entity graphs in real time and it's patented approach of using interrupt driven orchestration that utilizes gaming theory's observability pattern for data routing."
          }
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="space-y-4">
          {title === "Our Solutions" ? (
            <>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                </div>
                <p className="text-gray-700">Real-time threat detection and prevention</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                </div>
                <p className="text-gray-700">AI-powered adaptive security measures</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                </div>
                <p className="text-gray-700">Comprehensive fraud prevention and detection</p>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                </div>
                <p className="text-gray-700">Data flow uses Direct Acyclic Graph for networking</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-strata-blue/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-strata-blue"></div>
                </div>
                <p className="text-gray-700">Tie services together using gossip protocol</p>
              </li>
            </>
          )}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4"
      >
        <Button className="bg-strata-blue hover:bg-strata-darkBlue text-white">
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
                <div className="relative h-52">
                  <Image
                    src={
                      title === "Our Solutions" ? (
                        card.id === 1
                          ? "https://blog.ipleaders.in/wp-content/uploads/2020/08/Lock-HERO-1.jpg"
                          : card.id === 2
                          ? "https://cynode.com/media/mhanfz0w/managed-detection-and-response-for-identity-protection-487x324.png"
                          : card.id === 3
                          ? "https://cdn.letterdrop.co/images/2023/9/28/nextdlp/orq6z6kt40.jpeg"
                          : card.id === 4
                          ? "https://ranksparrow.com/wp-content/uploads/2023/09/img-HardwareSoftware-Resale.jpg"
                          : "https://logicalnetworksolution.com/wp-content/uploads/2024/05/8-1280x698.png"
                      ) : (
                        card.id === 1
                          ? "https://swimlane.com/wp-content/uploads/MastheadWhatisOrchestration.png"
                          : card.id === 2
                          ? "https://pushninja.com/images/blog/push-notification-ab-testing.png?v=1685617526940065535"
                          : card.id === 3
                          ? "https://www.softwareag.com/content/dam/softwareag/global/image/blog/streamsets/thumbnails/streamsets-07.jpg"
                          : card.id === 4
                          ? "https://zebpay.com/in/wp-content/uploads/2022/09/198-Distributed-Ledger-Technology.jpg"
                          : "https://www.gravitee.io/hubfs/Kafka-2.png"
                      )
                    }
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-strata-darkBlue mb-2">{card.title}</h3>
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
                activeIndex === index ? "bg-strata-blue" : "bg-gray-300"
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
