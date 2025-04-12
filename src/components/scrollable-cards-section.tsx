"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
      },
      {
        id: 6,
        title: "Seamless Integration",
        description: "Proxy-based integration with attribute extractor in payload request and response."
      },
      {
        id: 7,
        title: "AI Enabled",
        description: "Use of AI for dynamic content generation, anomaly detection, and intelligent flow orchestration."
      },
      {
        id: 8,
        title: "Device Profiling",
        description: "Creation of unique fingerprint based on device or browser attributes."
      },
      {
        id: 9,
        title: "Geo-location Monitoring",
        description: "Detect customer location and ISP based on Geo, VPN, and TOR data."
      }
      

    ]
  };

  const getCardsBasedOnTitle = () => {
    return cardsData.solutions;
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
        <h2 className="text-3xl md:text-4xl font-bold text-wingman-darkBlue">{title}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-lg text-gray-600 mb-8">
          <span className="text-wingman-blue">Wingman</span> is a suite of identity and fraud prevention tools for both digital and non-digital channels. It integrates seamlessly into your ecosystem, offering insights through silent monitoring or acting as a proactive security layer across pre and post-authentication stages.
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
            <div className="h-6 w-6 flex-shrink-0 rounded-full bg-wingman-blue/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
            </div>
            <p className="text-gray-700"><span className="text-wingman-blue">Flexible:</span> Map business rules to any payload attribute and edit responses in real time..</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex-shrink-0 rounded-full bg-wingman-blue/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
            </div>
            <p className="text-gray-700"><span className="text-wingman-blue">Highly Scalable:</span> Handles high data loads using distributed computing and Kubernetes..</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex-shrink-0 rounded-full bg-wingman-blue/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-wingman-blue"></div>
            </div>
            <p className="text-gray-700"><span className="text-wingman-blue">AI Powered:</span> Uses ML and Gen AI for behavior modeling and dynamic orchestration..</p>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-6"
      >
        <Button className="bg-wingman-blue hover:bg-wingman-darkBlue text-white" asChild>
          <Link href="/contact">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  );

  const cardsContent = (
    <div className="relative pt-10">
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
                      title === "Why Wingman?" ? (
                        card.id === 1
                          ? "https://blog.ipleaders.in/wp-content/uploads/2020/08/Lock-HERO-1.jpg"
                          : card.id === 2
                          ? "https://cynode.com/media/mhanfz0w/managed-detection-and-response-for-identity-protection-487x324.png"
                          : card.id === 3
                          ? "https://cdn.letterdrop.co/images/2023/9/28/nextdlp/orq6z6kt40.jpeg"
                          : card.id === 4
                          ? "https://ranksparrow.com/wp-content/uploads/2023/09/img-HardwareSoftware-Resale.jpg"
                          : card.id === 6
                          ? "https://eu-images.contentstack.com/v3/assets/blt2db30e0332fda6df/bltfcc2ce12227fd6d1/67473ea2e6cc872b5d701c74/cybersecurity.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
                          : card.id === 7
                          ? "https://img.freepik.com/premium-vector/abstract-circuit-connection-modern-system-ai-system-artificial-intelligence-mechanism-blue-digital_36402-1059.jpg"
                          : card.id === 8
                          ? "https://www.securitymagazine.com/ext/resources/Issues/2019/September/SEC0919-Mobile-Feat-slide1_900px.jpg?height=635&t=1567784812&width=1200"
                          : card.id === 9
                          ? "https://t3.ftcdn.net/jpg/10/38/09/06/360_F_1038090621_JX9vA5AjwcdTQ5qD1GUvtEWgG6jRKPVY.jpg"
                          : card.id === 10
                          ? "https://media.licdn.com/dms/image/D5612AQHymOIQ9SRZKA/article-cover_image-shrink_720_1280/0/1702283459648?e=2147483647&v=beta&t=7iFcv5By9TnyjGogKFEYgz50iYF-bctfn0w1B2dQH6Q"
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
                  <h3 className="text-xl font-semibold text-wingman-darkBlue mb-2">{card.title}</h3>
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
                activeIndex === index ? "bg-wingman-blue" : "bg-gray-300"
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




