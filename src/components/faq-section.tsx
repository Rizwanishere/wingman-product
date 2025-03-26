"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is Wingman and how can it help my business?",
      answer: "Wingman is a comprehensive business platform designed to help businesses of all sizes streamline operations, gain valuable insights, and drive growth. Our solutions include business analytics, process automation, customer experience tools, and strategic consulting services tailored to your specific needs."
    },
    {
      id: 2,
      question: "How does your pricing structure work?",
      answer: "We offer flexible pricing plans to accommodate businesses of all sizes. Our pricing is based on the specific solutions you need, the size of your organization, and your expected usage. We provide transparent pricing with no hidden fees, and our team can help you select the right plan for your business. Contact us for a custom quote."
    },
    {
      id: 3,
      question: "Do you offer a free trial for your services?",
      answer: "Yes, we offer a 14-day free trial for most of our solutions. During the trial period, you'll have access to all features and functionality, allowing you to fully evaluate how Wingman can benefit your business. Our team will also provide onboarding support to help you make the most of the trial period."
    },
    {
      id: 4,
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the specific solutions you're adopting and the complexity of your business needs. A basic implementation can be completed in as little as 2-4 weeks, while more complex enterprise deployments may take 2-3 months. Our experienced implementation team works closely with you to ensure a smooth and efficient process."
    },
    {
      id: 5,
      question: "What kind of support is available after implementation?",
      answer: "We provide comprehensive support options for all our clients. This includes 24/7 technical support, regular maintenance and updates, dedicated account management, and access to our knowledge base and training resources. We're committed to your long-term success and continuous improvement."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform, services, and how we can help your business succeed.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`border rounded-lg overflow-hidden transition-colors ${
                  activeIndex === index ? "border-strata-purple" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg font-semibold text-strata-darkPurple">
                    {faq.question}
                  </h3>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                    activeIndex === index ? "bg-strata-purple text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-gray-100">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
