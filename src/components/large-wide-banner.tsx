"use client";

import { motion } from "framer-motion";

const LargeWideBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-strata-darkPurple">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-strata-purple/90 to-strata-darkPurple rounded-xl overflow-hidden shadow-xl"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionize Your Business with Wingman
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our comprehensive platform empowers businesses of all sizes to overcome challenges, identify opportunities, and achieve sustainable growth. Join thousands of satisfied customers who've transformed their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center w-full md:w-[calc(33%-1rem)]">
                  <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
                  <p className="text-white/80">Customer Satisfaction</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center w-full md:w-[calc(33%-1rem)]">
                  <h3 className="text-3xl font-bold text-white mb-2">5,000+</h3>
                  <p className="text-white/80">Businesses Served</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center w-full md:w-[calc(33%-1rem)]">
                  <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                  <p className="text-white/80">Expert Support</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LargeWideBanner;
