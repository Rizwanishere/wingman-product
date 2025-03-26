"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What are some effective fraud prevention measures?",
      answer: "Strong authentication: Use multi-factor authentication (MFA) to verify identity. Regular security updates: Keep software and systems up-to-date with the latest security patches. Employee training: Educate employees about fraud prevention and awareness. Data encryption: Protect sensitive data with encryption. Access controls: Limit access to sensitive information. Fraud monitoring tools: Use software to detect suspicious activity. Regular reviews: Conduct periodic reviews of security policies and procedures."
    },
    {
      id: 2,
      question: "Must-Haves for a Digital Fraud Prevention Platform?",
      answer: "A robust digital fraud prevention platform should incorporate several key features to effectively identify and mitigate fraudulent activities. Core Features: Real-time monitoring: The platform should continuously monitor transactions and user behavior for signs of fraud. Machine learning: Utilize advanced algorithms to learn from past fraud patterns and adapt to emerging threats. Behavioral analytics: Analyze user behavior to identify anomalies that may indicate fraudulent activity. Device fingerprinting: Track device characteristics to detect fraudulent devices or compromised accounts. Risk scoring: Assign a risk score to each transaction based on various factors, such as IP address, device, and user behavior. Rule-based detection: Implement customizable rules to detect specific types of fraud. Advanced Capabilities: Bot detection: Identify and block malicious bots that attempt to automate fraudulent activities. Account takeover prevention: Detect and prevent unauthorized access to accounts. Social engineering prevention: Protect against phishing attacks and other social engineering tactics. Mobile fraud prevention: Address specific challenges related to mobile fraud, such as click fraud and app fraud. Integration with existing systems: Seamlessly integrate with other security tools and platforms. Scalability: The platform should be able to handle increasing transaction volumes and evolving fraud threats."
    },
    {
      id: 3,
      question: "I have an IAM solution, why do I need Fraud Prevention Platform?",
      answer: "While both Identity and Access Management (IAM) solutions and fraud prevention platforms play crucial roles in securing digital environments, they serve distinct purposes. IAM Solutions Primary Function: Ensuring the right individuals have access to the right resources at the right time. Key Features: Authentication: Verifying the identity of users (e.g., through passwords, biometrics). Authorization: Granting or denying access to specific resources based on user roles and permissions. Provisioning: Creating, updating, and deleting user accounts. Single Sign-On (SSO): Allowing users to log in to multiple applications with a single set of credentials. Focus: Primarily concerned with preventing unauthorized access. Fraud Prevention Platforms Primary Function: Detecting and preventing fraudulent activities. Key Features: Behavioral Analytics: Analyzing user behavior patterns to identify anomalies indicative of fraud. Device Fingerprinting: Identifying devices and their unique characteristics to detect fraudulent activity. Risk Scoring: Assessing the likelihood of fraud based on various factors. Real-time Monitoring: Continuously monitoring transactions and user interactions for suspicious activity. Fraud Rules: Defining rules and criteria to flag potential fraudulent transactions. Focus: Specifically designed to combat fraudulent activities, such as identity theft, credit card fraud, and account takeover. In Summary: IAM Solutions focus on ensuring the security of access to systems and data. Fraud Prevention Platforms focus on detecting and preventing fraudulent activities. While both are essential components of a comprehensive security strategy, they work together to provide a robust defense against various threats. IAM solutions establish the foundation for secure access, while fraud prevention platforms help protect against malicious actors."
    },
    {
      id: 4,
      question: "Common Fraud in Digital space?",
      answer: "Common Digital Frauds in the Identity Space: The identity space is a prime target for fraudsters due to the valuable personal information it contains. Here are some common digital frauds: Identity Theft: Phishing: Tricking individuals into revealing personal information through deceptive emails, texts, or websites. Social Engineering: Manipulating individuals into divulging sensitive information. Data Breaches: Unauthorized access to databases containing personal information. Account Takeover: Credential Stuffing: Using stolen credentials to gain access to accounts. SIM Swapping: Transferring a mobile phone number to a fraudulent SIM card to intercept authentication codes. Synthetic Identity Fraud: Creating fictitious identities using a combination of real and fake information to commit fraud. Credential Fraud: Buying and selling stolen credentials on the dark web. Click Fraud: Generating fraudulent clicks on advertisements to inflate ad costs. Bot Attacks: Using automated bots to create fake accounts, manipulate reviews, and engage in other fraudulent activities. Deepfakes: Creating realistic but fake media (e.g., videos, audio) to deceive individuals or organizations. Spoofing: Disguising the origin of a communication to deceive recipients. Social Media Impersonation: Creating fake profiles to impersonate individuals or organizations. Credential Harvesting: Collecting login credentials through various methods, such as phishing or malware. Addressing these threats requires a combination of strong security measures, user education, and advanced fraud detection technologies."
    },
    {
      id: 5,
      question: "What is a Fraud Prevention?",
      answer: "Fraud prevention is the process of implementing measures to identify and stop fraudulent activities before they occur. It involves identifying potential risks, implementing security controls, and monitoring for suspicious behavior."
    },
    {
      id: 6,
      question: "What is AI?",
      answer: "Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent agents, which are systems that can reason, learn, and act autonomously. In simpler terms, AI is the development of computer systems that can perform tasks that typically require human intelligence, such as: Learning: Acquiring new knowledge and skills. Reasoning: Applying logic and making decisions. Problem-solving: Finding solutions to complex problems. Perception: Understanding the world through senses (like vision and hearing). Language understanding: Communicating and interacting with humans. Examples of AI in action include: Virtual assistants: Like Siri, Alexa, and Google Assistant. Self-driving cars: Vehicles that can navigate and operate without human intervention. Recommendation systems: Suggesting products or content based on user preferences. Medical diagnosis: Assisting doctors in diagnosing diseases. Natural language processing: Enabling computers to understand and respond to human language. AI has the potential to revolutionize various industries and improve our lives in countless ways, but it also raises important ethical and societal questions."
    },
    {
      id: 7,
      question: "What is Distributed Computing?",
      answer: "Distributed Computing is a model where multiple computers work together to solve a problem. Instead of relying on a single powerful machine, tasks are divided and assigned to different computers across a network. This allows for: Scalability: Handling larger workloads by adding more computers. Fault tolerance: The system can continue to function even if some computers fail. Improved performance: By distributing tasks, computations can be performed faster. Resource sharing: Sharing hardware and software resources among multiple computers. Common distributed computing architectures include: Cluster computing: A group of computers connected by a network, working together on a single task. Grid computing: A large-scale distributed system where resources are shared across multiple organizations. Cloud computing: A model where computing resources are delivered over the internet on demand. Examples of distributed computing in action: Rendering 3D graphics: Breaking down the rendering process into smaller tasks and distributing them across multiple computers. Scientific simulations: Simulating complex phenomena like climate change or particle physics using distributed computing clusters. Bitcoin mining: A distributed network of computers working together to verify Bitcoin transactions. Distributed databases: Storing and managing large datasets across multiple computers. Distributed computing has become increasingly important in today's world, as it enables us to tackle complex problems and process large amounts of data efficiently."
    },
    {
      id: 8,
      question: "What is an Entity Graph Model?",
      answer: "An entity graph model is a visual representation of the relationships between entities or objects in a system. It's a graphical technique used to depict how different entities are connected and how data flows between them. Key components of an entity graph model: Nodes: Represent entities or objects. Edges: Represent the relationships between entities. These can be one-to-one, one-to-many, or many-to-many. Attributes: Describe the properties of each entity. Common types of entity graph models: Entity-Relationship (ER) Diagrams: A widely used model that focuses on entities and their relationships. Class Diagrams: Used in object-oriented analysis and design, focusing on classes and their attributes, operations,and relationships. UML (Unified Modeling Language) Diagrams: A comprehensive set of modeling techniques that includes entity graph models like class diagrams, component diagrams, and deployment diagrams. Benefits of using entity graph models: Visual Understanding: Provides a clear and intuitive representation of complex data structures. Communication Tool: Helps in communicating system design and data relationships to stakeholders. Analysis and Design: Aids in identifying entities, attributes, and relationships during the analysis and design phases. Data Modeling: Serves as a foundation for database design and development."
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
            Don't hesitate to ask, we are here for you
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform, services, and technology
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
