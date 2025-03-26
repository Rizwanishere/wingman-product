"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
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
            What is FEATHER?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feather is a ecosystem of services designed to deliver use cases in digital space that require data processing and content rendering at high speeds. It delivers you a niche tech stack putting Distributed computing and AI at your fingertips. Wingman utilizes it's framework's strength to stand up entity graphs in real time and it's patented approach of using interrupt driven orchestration that utilizes gaming theory's observability pattern for data routing.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Data flow uses Direct Acyclic Graph for networking and tie services together using gossip protocol.
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
          className="text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple mb-4">
            PLATFORM CAPABILITIES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our advanced platform can give life to many more use cases, giving life to your dreams in a blink.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">eCommerce</h3>
              <p className="text-gray-600">Capable of being used as a flow engine to drive an eCommerce experience and user journey.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">Log Governance</h3>
              <p className="text-gray-600">Constant analysis and sifting though stream of logs coming in from various sources</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">IAM</h3>
              <p className="text-gray-600">Identity fraud prevention and MFA bundled in one elegant solution powered by AI.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">IOT</h3>
              <p className="text-gray-600">High data ingestion, processing and persistence capabilities in real time from millions of endpoints</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
