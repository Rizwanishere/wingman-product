"use client";

import { motion } from "framer-motion";

const LargeWideBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-strata-darkBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-strata-blue/90 to-strata-darkBlue rounded-xl overflow-hidden shadow-xl"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/80 mb-8">
                After delivering a fraud aversion platform that prevented $26 Million of fraud in the first year of launch, our team realized the contribution we can make for digital identity space. There being a clear gap between identity management solution and fraud prevention with no product on market offering all-round support for, pre, post auth fraud prevention and multi factor authentication features. We decided to create Wingman (powered by Feather): Wingman is a AI powered distributed computing platform for identity safeguarding and fraud prevention. It is capable of processing with high speed, accuracy, reliability and exhibits tremendous adaptability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LargeWideBanner;
