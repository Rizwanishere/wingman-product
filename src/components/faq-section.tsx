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
      answer: (
        <ul className="mt-2 list-disc pl-4 space-y-2 marker:text-strata-blue">
          <li><span className="font-bold text-strata-blue">Strong authentication:</span> Use multi-factor authentication (MFA) to verify identity.</li>
          <li><span className="font-bold text-strata-blue">Regular security updates:</span> Keep software and systems up-to-date with the latest security patches.</li>
          <li><span className="font-bold text-strata-blue">Employee training:</span> Educate employees about fraud prevention and awareness.</li>
          <li><span className="font-bold text-strata-blue">Data encryption:</span> Protect sensitive data with encryption.</li>
          <li><span className="font-bold text-strata-blue">Access controls:</span> Limit access to sensitive information.</li>
          <li><span className="font-bold text-strata-blue">Fraud monitoring tools:</span> Use software to detect suspicious activity.</li>
          <li><span className="font-bold text-strata-blue">Regular reviews:</span> Conduct periodic reviews of security policies and procedures.</li>
        </ul>
      )
    },
    {
      id: 2,
      question: "Must-Haves for a Digital Fraud Prevention Platform?",
      answer: (
        <div className="mt-2 space-y-4">
          <p>A robust digital fraud prevention platform should incorporate several key features to effectively identify and mitigate fraudulent activities. Here are some essential components:</p>
          
          <div>
            <h4 className="font-bold text-strata-darkBlue mb-2">Core Features:</h4>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Real-time monitoring:</span> The platform should continuously monitor transactions and user behavior for signs of fraud.</li>
              <li><span className="font-bold text-strata-blue">Machine learning:</span> Utilize advanced algorithms to learn from past fraud patterns and adapt to emerging threats.</li>
              <li><span className="font-bold text-strata-blue">Behavioral analytics:</span> Analyze user behavior to identify anomalies that may indicate fraudulent activity.</li>
              <li><span className="font-bold text-strata-blue">Device fingerprinting:</span> Track device characteristics to detect fraudulent devices or compromised accounts.</li>
              <li><span className="font-bold text-strata-blue">Risk scoring:</span> Assign a risk score to each transaction based on various factors, such as IP address, device, and user behavior.</li>
              <li><span className="font-bold text-strata-blue">Rule-based detection:</span> Implement customizable rules to detect specific types of fraud.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-strata-darkBlue mb-2">Advanced Capabilities:</h4>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Bot detection:</span> Identify and block malicious bots that attempt to automate fraudulent activities.</li>
              <li><span className="font-bold text-strata-blue">Account takeover prevention:</span> Detect and prevent unauthorized access to accounts.</li>
              <li><span className="font-bold text-strata-blue">Social engineering prevention:</span> Protect against phishing attacks and other social engineering tactics.</li>
              <li><span className="font-bold text-strata-blue">Mobile fraud prevention:</span> Address specific challenges related to mobile fraud, such as click fraud and app fraud.</li>
              <li><span className="font-bold text-strata-blue">Integration with existing systems:</span> Seamlessly integrate with other security tools and platforms.</li>
              <li><span className="font-bold text-strata-blue">Scalability:</span> The platform should be able to handle increasing transaction volumes and evolving fraud threats.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "I have an IAM solution, why do I need Fraud Prevention Platform?",
      answer: (
        <div className="mt-2 space-y-4">
          <p>While both Identity and Access Management (IAM) solutions and fraud prevention platforms play crucial roles in securing digital environments, they serve distinct purposes.</p>

          <div>
            <h4 className="font-bold text-strata-darkBlue mb-2">IAM Solutions</h4>
            <p className="mb-2"><span className="font-bold text-strata-blue">Primary Function:</span> Ensuring the right individuals have access to the right resources at the right time.</p>
            <p className="mb-2 font-bold text-strata-darkBlue">Key Features:</p>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue mb-2">
              <li><span className="font-bold text-strata-blue">Authentication:</span> Verifying the identity of users (e.g., through passwords, biometrics).</li>
              <li><span className="font-bold text-strata-blue">Authorization:</span> Granting or denying access to specific resources based on user roles and permissions.</li>
              <li><span className="font-bold text-strata-blue">Provisioning:</span> Creating, updating, and deleting user accounts.</li>
              <li><span className="font-bold text-strata-blue">Single Sign-On (SSO):</span> Allowing users to log in to multiple applications with a single set of credentials.</li>
            </ul>
            <p><span className="font-bold text-strata-blue">Focus:</span> Primarily concerned with preventing unauthorized access.</p>
          </div>

          <div>
            <h4 className="font-bold text-strata-darkBlue mb-2">Fraud Prevention Platforms</h4>
            <p className="mb-2"><span className="font-bold text-strata-blue">Primary Function:</span> Detecting and preventing fraudulent activities.</p>
            <p className="mb-2 font-bold text-strata-darkBlue">Key Features:</p>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue mb-2">
              <li><span className="font-bold text-strata-blue">Behavioral Analytics:</span> Analyzing user behavior patterns to identify anomalies indicative of fraud.</li>
              <li><span className="font-bold text-strata-blue">Device Fingerprinting:</span> Identifying devices and their unique characteristics to detect fraudulent activity.</li>
              <li><span className="font-bold text-strata-blue">Risk Scoring:</span> Assessing the likelihood of fraud based on various factors.</li>
              <li><span className="font-bold text-strata-blue">Real-time Monitoring:</span> Continuously monitoring transactions and user interactions for suspicious activity.</li>
              <li><span className="font-bold text-strata-blue">Fraud Rules:</span> Defining rules and criteria to flag potential fraudulent transactions.</li>
            </ul>
            <p><span className="font-bold text-strata-blue">Focus:</span> Specifically designed to combat fraudulent activities, such as identity theft, credit card fraud, and account takeover.</p>
          </div>

          <div>
            <h4 className="font-bold text-strata-darkBlue mb-2">In Summary:</h4>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li>IAM Solutions focus on ensuring the security of access to systems and data.</li>
              <li>Fraud Prevention Platforms focus on detecting and preventing fraudulent activities.</li>
            </ul>
            <p className="mt-2">While both are essential components of a comprehensive security strategy, they work together to provide a robust defense against various threats. IAM solutions establish the foundation for secure access, while fraud prevention platforms help protect against malicious actors.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      question: "Common Fraud in Digital space?",
      answer: (
        <div className="mt-2 space-y-4">
          <p className="mb-4">The identity space is a prime target for fraudsters due to the valuable personal information it contains. Here are some common digital frauds:</p>

          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Identity Theft:</h5>
              <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
                <li><span className="font-bold text-strata-blue">Phishing:</span> Tricking individuals into revealing personal information through deceptive emails, texts, or websites.</li>
                <li><span className="font-bold text-strata-blue">Social Engineering:</span> Manipulating individuals into divulging sensitive information.</li>
                <li><span className="font-bold text-strata-blue">Data Breaches:</span> Unauthorized access to databases containing personal information.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Account Takeover:</h5>
              <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
                <li><span className="font-bold text-strata-blue">Credential Stuffing:</span> Using stolen credentials to gain access to accounts.</li>
                <li><span className="font-bold text-strata-blue">SIM Swapping:</span> Transferring a mobile phone number to a fraudulent SIM card to intercept authentication codes.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Synthetic Identity Fraud:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Creating fictitious identities using a combination of real and fake information to commit fraud.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Credential Fraud:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Buying and selling stolen credentials on the dark web.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Click Fraud:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Generating fraudulent clicks on advertisements to inflate ad costs.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Bot Attacks:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Using automated bots to create fake accounts, manipulate reviews, and engage in other fraudulent activities.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Deepfakes:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Creating realistic but fake media (e.g., videos, audio) to deceive individuals or organizations.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Spoofing:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Disguising the origin of a communication to deceive recipients.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Social Media Impersonation:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Creating fake profiles to impersonate individuals or organizations.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-strata-darkBlue mb-2">Credential Harvesting:</h5>
              <ul className="list-disc pl-4 marker:text-strata-blue">
                <li>Collecting login credentials through various methods, such as phishing or malware.</li>
              </ul>
            </div>
          </div>

          <p className="mt-4">Addressing these threats requires a combination of strong security measures, user education, and advanced fraud detection technologies.</p>
        </div>
      )
    },
    {
      id: 5,
      question: "What is a Fraud Prevention?",
      answer: "Fraud prevention is the process of implementing measures to identify and stop fraudulent activities before they occur. It involves identifying potential risks, implementing security controls, and monitoring for suspicious behavior."
    },
    {
      id: 6,
      question: "What is AI?",
      answer: (
        <div className="mt-2 space-y-4">
          <p>Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent agents, which are systems that can reason, learn, and act autonomously. In simpler terms, AI is the development of computer systems that can perform tasks that typically require human intelligence, such as:</p>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Core Capabilities:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Learning:</span> Acquiring new knowledge and skills.</li>
              <li><span className="font-bold text-strata-blue">Reasoning:</span> Applying logic and making decisions.</li>
              <li><span className="font-bold text-strata-blue">Problem-solving:</span> Finding solutions to complex problems.</li>
              <li><span className="font-bold text-strata-blue">Perception:</span> Understanding the world through senses (like vision and hearing).</li>
              <li><span className="font-bold text-strata-blue">Language understanding:</span> Communicating and interacting with humans.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Examples of AI in Action:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Virtual assistants:</span> Like Siri, Alexa, and Google Assistant.</li>
              <li><span className="font-bold text-strata-blue">Self-driving cars:</span> Vehicles that can navigate and operate without human intervention.</li>
              <li><span className="font-bold text-strata-blue">Recommendation systems:</span> Suggesting products or content based on user preferences.</li>
              <li><span className="font-bold text-strata-blue">Medical diagnosis:</span> Assisting doctors in diagnosing diseases.</li>
              <li><span className="font-bold text-strata-blue">Natural language processing:</span> Enabling computers to understand and respond to human language.</li>
            </ul>
          </div>

          <p>AI has the potential to revolutionize various industries and improve our lives in countless ways, but it also raises important ethical and societal questions.</p>
        </div>
      )
    },
    {
      id: 7,
      question: "What is Distributed Computing?",
      answer: (
        <div className="mt-2 space-y-4">
          <p>Distributed Computing is a model where multiple computers work together to solve a problem. Instead of relying on a single powerful machine, tasks are divided and assigned to different computers across a network. This allows for:</p>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Key Benefits:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Scalability:</span> Handling larger workloads by adding more computers.</li>
              <li><span className="font-bold text-strata-blue">Fault tolerance:</span> The system can continue to function even if some computers fail.</li>
              <li><span className="font-bold text-strata-blue">Improved performance:</span> By distributing tasks, computations can be performed faster.</li>
              <li><span className="font-bold text-strata-blue">Resource sharing:</span> Sharing hardware and software resources among multiple computers.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Common Distributed Computing Architectures:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Cluster computing:</span> A group of computers connected by a network, working together on a single task.</li>
              <li><span className="font-bold text-strata-blue">Grid computing:</span> A large-scale distributed system where resources are shared across multiple organizations.</li>
              <li><span className="font-bold text-strata-blue">Cloud computing:</span> A model where computing resources are delivered over the internet on demand.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Examples of Distributed Computing in Action:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Rendering 3D graphics:</span> Breaking down the rendering process into smaller tasks and distributing them across multiple computers.</li>
              <li><span className="font-bold text-strata-blue">Scientific simulations:</span> Simulating complex phenomena like climate change or particle physics using distributed computing clusters.</li>
              <li><span className="font-bold text-strata-blue">Bitcoin mining:</span> A distributed network of computers working together to verify Bitcoin transactions.</li>
              <li><span className="font-bold text-strata-blue">Distributed databases:</span> Storing and managing large datasets across multiple computers.</li>
            </ul>
          </div>

          <p>Distributed computing has become increasingly important in today's world, as it enables us to tackle complex problems and process large amounts of data efficiently.</p>
        </div>
      )
    },
    {
      id: 8,
      question: "What is an Entity Graph Model?",
      answer: (
        <div className="mt-2 space-y-4">
          <p>An entity graph model is a visual representation of the relationships between entities or objects in a system. It's a graphical technique used to depict how different entities are connected and how data flows between them.</p>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Key Components:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Nodes:</span> Represent entities or objects.</li>
              <li><span className="font-bold text-strata-blue">Edges:</span> Represent the relationships between entities. These can be one-to-one, one-to-many, or many-to-many.</li>
              <li><span className="font-bold text-strata-blue">Attributes:</span> Describe the properties of each entity.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Common Types of Entity Graph Models:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Entity-Relationship (ER) Diagrams:</span> A widely used model that focuses on entities and their relationships.</li>
              <li><span className="font-bold text-strata-blue">Class Diagrams:</span> Used in object-oriented analysis and design, focusing on classes and their attributes, operations, and relationships.</li>
              <li><span className="font-bold text-strata-blue">UML (Unified Modeling Language) Diagrams:</span> A comprehensive set of modeling techniques that includes entity graph models like class diagrams, component diagrams, and deployment diagrams.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-strata-darkBlue mb-2">Benefits of Using Entity Graph Models:</h5>
            <ul className="list-disc pl-4 space-y-2 marker:text-strata-blue">
              <li><span className="font-bold text-strata-blue">Visual Understanding:</span> Provides a clear and intuitive representation of complex data structures.</li>
              <li><span className="font-bold text-strata-blue">Communication Tool:</span> Helps in communicating system design and data relationships to stakeholders.</li>
              <li><span className="font-bold text-strata-blue">Analysis and Design:</span> Aids in identifying entities, attributes, and relationships during the analysis and design phases.</li>
              <li><span className="font-bold text-strata-blue">Data Modeling:</span> Serves as a foundation for database design and development.</li>
            </ul>
          </div>
        </div>
      )
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
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
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
                  activeIndex === index ? "border-strata-blue" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg font-semibold text-strata-darkBlue">
                    {faq.question}
                  </h3>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                    activeIndex === index ? "bg-strata-blue text-white" : "bg-gray-100 text-gray-600"
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
                        <div className="text-gray-600">{faq.answer}</div>
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
