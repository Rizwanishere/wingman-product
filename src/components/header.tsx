"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();
  const router = useRouter();

  // Add news items data
  const newsItems = [
    {
      id: 1,
      title: "Synthetic Fraud Detection",
      date: "March 15, 2024",
      category: "Security Insights",
      imageUrl: "https://www.socure.com/_next/image?url=https%3A%2F%2Fmedia.socure.com%2Fapp%2Fuploads%2F2024%2F12%2FProducts_SigmaSyntheticFraud.webp&w=3840&q=75"
    },
    {
      id: 2,
      title: "Understanding Social Engineering",
      date: "February 28, 2024",
      category: "Cyber Threats",
      imageUrl: "https://www.nclose.com/wp-content/uploads/istockphoto-621493344-170667a.jpg"
    }
  ];

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

  const scrollToSection = async (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (pathname === '/contact') {
      // If on contact page, navigate to home page and then scroll
      await router.push('/');
      
      // Wait for the navigation and DOM update to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const offsetPosition = element.offsetTop - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 500); // Increased timeout to ensure page load
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const offsetPosition = element.offsetTop - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
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
                  <Link
                    href="/contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact Us
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
                  
                  {/* Navigation Items */}
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
                    <Link
                      href="/contact"
                      className="py-3 font-medium text-strata-darkBlue block border-b pb-2 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>

                    {/* Latest News Section */}
                    <div className="py-4">
                      <h3 className="text-lg font-semibold text-strata-darkBlue mb-4">Latest News</h3>
                      <div className="overflow-x-auto">
                        <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                          {newsItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex-none w-[280px] bg-white rounded-xl shadow-md overflow-hidden"
                              style={{ scrollSnapAlign: 'start' }}
                            >
                              <div className="relative h-36">
                                <Image
                                  src={item.imageUrl}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-xs font-medium px-2 py-1 bg-strata-blue/10 text-strata-blue rounded-full">
                                    {item.category}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {item.date}
                                  </span>
                                </div>
                                <h4 className="text-sm font-semibold text-strata-darkBlue">
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href="/contact">
                        <Button 
                          className="bg-strata-blue hover:bg-strata-darkBlue text-white w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Book a Demo
                        </Button>
                      </Link>
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
