"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Tendrils.io",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGGISe_zVicOA/company-logo_200_200/company-logo_200_200/0/1630606845887/tendrilsio_logo?e=2147483647&v=beta&t=Ai9qfV0dOCVCxelMD229xT2TEB8lWJJ3oEMU_3kIG4g"
    },
    {
      id: 2,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://assets.upstox.com/content/assets/images/cms/202451/Amazon%20logo.png"
    },
    
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
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
          <p>Interested in becoming a partner? <button onClick={scrollToContact} className="text-strata-blue font-medium hover:underline">Contact us today</button></p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
