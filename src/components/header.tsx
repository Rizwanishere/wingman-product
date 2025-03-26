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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-20">
          <div className="relative w-28 h-8 sm:w-32 sm:h-8">
            <svg viewBox="0 0 100 20" className="w-full h-full">
              <text x="0" y="16" fontSize="18" fontWeight="bold" fill="#3a346c">Wingman</text>
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* About Us */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Why Wingman */}
              <NavigationMenuItem>
                <Link href="/why-wingman" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Why Wingman
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Feather */}
              <NavigationMenuItem>
                <Link href="/feather" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Feather
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Roadmap */}
              <NavigationMenuItem>
                <Link href="/roadmap" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Roadmap
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Partners */}
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Partners
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
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
            <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white">
              Book a Demo
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-20">
          <button
            onClick={toggleMenu}
            className="text-strata-darkPurple p-2"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-10 bg-white pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {/* Mobile menu items */}
                <Link href="/about" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  About Us
                </Link>
                <Link href="/why-wingman" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Why Wingman
                </Link>
                <Link href="/feather" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Feather
                </Link>
                <Link href="/roadmap" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Roadmap
                </Link>
                <Link href="/services" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Services
                </Link>
                <Link href="/partners" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Partners
                </Link>
                <Link href="/contact" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Contact Us
                </Link>

                <div className="pt-4">
                  <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white w-full">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
