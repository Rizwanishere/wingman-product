"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="bg-wingman-darkBlue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <svg viewBox="0 0 120 24" className="w-32 h-8">
                <text x="0" y="20" fontSize="22" fontWeight="bold" fill="white">Wingman</text>
              </svg>
            </div>
            <p className="text-white/70 mb-6">
              An AI powered distributed computing platform for Identity safeguarding and Fraud prevention.
            </p>
            <div className="flex space-x-4">
              <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <Facebook size={20} />
              </span>
              <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <Twitter size={20} />
              </span>
              <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <Instagram size={20} />
              </span>
              <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <Linkedin size={20} />
              </span>
              <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <Youtube size={20} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about-us')}
                  className="text-white/70 hover:text-white transition-colors text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-wingman')}
                  className="text-white/70 hover:text-white transition-colors text-left w-full"
                >
                  Why Wingman
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-left w-full"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partners')}
                  className="text-white/70 hover:text-white transition-colors text-left w-full"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </span>
              </li>
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  FAQs
                </span>
              </li>
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Support
                </span>
              </li>
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="text-wingman-blue" size={18} />
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  support@wingmanproduct.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-wingman-blue" size={18} />
                <span className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  demo@wingmanproduct.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {year} Wingman. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

