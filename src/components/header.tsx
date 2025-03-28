"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  // Handle scroll event to add background to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12 sm:w-48 sm:h-12">
              <Image
                src="/wingmanLogo.png"
                alt="Wingman Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* About Us */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('about-us')}
                    className={navigationMenuTriggerStyle()}
                  >
                    About Us
                  </button>
                </NavigationMenuItem>

                {/* Why Wingman */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('why-wingman')}
                    className={navigationMenuTriggerStyle()}
                  >
                    Why Wingman
                  </button>
                </NavigationMenuItem>

                {/* Feather */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('feather')}
                    className={navigationMenuTriggerStyle()}
                  >
                    Feather
                  </button>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={navigationMenuTriggerStyle()}
                  >
                    Services
                  </button>
                </NavigationMenuItem>

                {/* Partners */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('partners')}
                    className={navigationMenuTriggerStyle()}
                  >
                    Partners
                  </button>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-strata-blue hover:bg-strata-darkBlue text-white"
                onClick={() => scrollToSection('book-demo')}
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-strata-darkBlue p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Moved outside header */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            {/* Modal */}
            <motion.div
              className="lg:hidden fixed right-0 top-0 h-full w-full z-[95] bg-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-end mb-6">
                    <button
                      onClick={toggleMenu}
                      className="text-strata-darkBlue p-2"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {/* Mobile menu items */}
                    <button
                      onClick={() => scrollToSection('about-us')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => scrollToSection('why-wingman')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      Why Wingman
                    </button>
                    <button
                      onClick={() => scrollToSection('feather')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      Feather
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection('partners')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      Partners
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                    >
                      Contact Us
                    </button>

                    <div className="pt-4">
                      <Button 
                        className="bg-strata-blue hover:bg-strata-darkBlue text-white w-full"
                        onClick={() => scrollToSection('book-demo')}
                      >
                        Book a Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
