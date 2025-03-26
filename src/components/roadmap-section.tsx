"use client";

import { motion } from "framer-motion";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      id: 1,
      phase: "ID - I",
      title: "Initial Development",
      description: "Starting the foundation of Wingman platform.",
      features: [
        "MVP development",
        "Basic testing",
        "Market analysis",
      ]
    },
    {
      id: 2,
      phase: "ID - II",
      title: "Platform Enhancement",
      description: "Strengthening the core capabilities of the platform.",
      features: [
        "System scalability",
        "Fault tolerance",
        "UXP integration",
      ]
    },
    {
      id: 3,
      phase: "ID - III",
      title: "Mobile & Analytics",
      description: "Expanding platform capabilities to mobile and advanced analytics.",
      features: [
        "Mobile support",
        "Analytics",
      ]
    },
    {
      id: 4,
      phase: "Milestone - I",
      title: "First Release",
      description: "Initial platform launch for select users.",
      features: [
        "Beta testing",
        "Soft launch",
      ]
    },
    {
      id: 5,
      phase: "Post ID - I",
      title: "Communication Enhancement",
      description: "Adding notification capabilities to the platform.",
      features: [
        "Notification service",
      ]
    },
    {
      id: 6,
      phase: "Post ID - II",
      title: "AI Integration",
      description: "Integrating advanced AI capabilities.",
      features: [
        "AI",
        "Content generation",
      ]
    },
    {
      id: 7,
      phase: "Milestone - II",
      title: "SAAS Launch",
      description: "Public launch of the platform as a SaaS offering.",
      features: [
        "Beta testing",
        "SAAS launch",
      ]
    },
    {
      id: 8,
      phase: "Milestone - III",
      title: "Commercial Growth",
      description: "Expanding market presence and commercial operations.",
      features: [
        "Marketing & Sales",
      ]
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkPurple mb-4">
            Product Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive development strategy for Wingman, showing major milestones and implementation phases.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-strata-purple/30 transform -translate-x-1/2"></div>

          <div className="relative">
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className="relative mb-16 last:mb-0"
              >
                {/* Phase label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-2 mb-4 bg-strata-purple text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  {item.phase}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  {/* Content placement based on even/odd */}
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="md:text-right md:pr-12"
                      >
                        <h3 className="text-2xl font-bold text-strata-darkPurple mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          {item.features.map((feature, i) => (
                            <li key={i} className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="md:pl-12"
                      >
                        <div className="bg-strata-lightGray h-60 rounded-xl shadow-md flex items-center justify-center p-6">
                          <div className="w-24 h-24 text-strata-purple">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                              <path d="M2 17l10 5 10-5"></path>
                              <path d="M2 12l10 5 10-5"></path>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="md:pr-12"
                      >
                        <div className="bg-strata-lightGray h-60 rounded-xl shadow-md flex items-center justify-center p-6">
                          <div className="w-24 h-24 text-strata-purple">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="md:pl-12"
                      >
                        <h3 className="text-2xl font-bold text-strata-darkPurple mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
