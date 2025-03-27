"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience lightning – fast response times and exceptional reliability for a secure and protected online journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-strata-darkBlue mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-strata-blue focus:border-strata-blue outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-strata-blue focus:border-strata-blue outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-strata-blue focus:border-strata-blue outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-strata-blue focus:border-strata-blue outline-none transition-colors"
                ></textarea>
              </div>
              <Button className="bg-strata-blue hover:bg-strata-darkBlue text-white w-full py-6">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold text-strata-darkBlue mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-strata-blue/10 rounded-full p-3 text-strata-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-strata-darkBlue">Email</h4>
                    <a href="mailto:support@wingmanproduct.com" className="text-gray-600 hover:text-strata-blue">
                      support@wingmanproduct.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-strata-blue/10 rounded-full p-3 text-strata-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-strata-darkBlue">Demo</h4>
                    <a href="mailto:demo@wingmanproduct.com" className="text-gray-600 hover:text-strata-blue">
                      demo@wingmanproduct.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-strata-blue rounded-xl shadow-md p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6">Our cybersecurity experts are available to help you with any questions or security concerns.</p>
              <Button variant="outline" className="border-white bg-white text-strata-darkBlue hover:text-white w-full">
                Chat With Support
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
