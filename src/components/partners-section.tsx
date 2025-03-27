"use client";

import { motion } from "framer-motion";

const PartnersSection = () => {
  // Create an array of 6 partners
  const partners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`
  }));

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
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            On this tech innovation journey to be a global leader in cutting-edge technology solutions. Here are some organizations that support our cause.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-300 animate-pulse w-full h-12 rounded flex items-center justify-center">
                <p className="text-gray-500 text-sm">{partner.name} Logo</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 text-gray-600"
        >
          <p>Interested in becoming a partner? <a href="/contact" className="text-strata-blue font-medium">Contact us today</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
