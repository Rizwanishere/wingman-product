"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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
              <text x="0" y="16" fontSize="18" fontWeight="bold" fill="#3a346c">STRATA</text>
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Platform Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-strata-darkPurple">Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                    <div className="grid grid-cols-1 gap-3">
                      <h3 className="font-semibold text-strata-darkPurple">Platform</h3>
                      <Link href="/platform" className="group flex h-auto w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                        <div>
                          <h4 className="font-medium text-strata-darkPurple">Maverics Platform</h4>
                          <p className="text-sm text-gray-600">The foundation for integrating multi-vendor identity, bridging silos, and unifying access</p>
                        </div>
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <h3 className="font-semibold text-strata-darkPurple">Products</h3>
                      <Link href="/identity-orchestration" className="group flex h-auto w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                        <div>
                          <h4 className="font-medium text-strata-darkPurple">Identity Orchestration</h4>
                          <p className="text-sm text-gray-600">Seamlessly unify authentication and authorization across all web apps</p>
                        </div>
                      </Link>
                      <Link href="/identity-continuity" className="group flex h-auto w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                        <div>
                          <h4 className="font-medium text-strata-darkPurple">Identity Continuity</h4>
                          <p className="text-sm text-gray-600">Build resilience with run-time failover between IDPs to maintain access to critical apps</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other menu items remain the same */}
              {/* ... existing code ... <other navigation menu items> */}
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
              Get a demo
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
                {/* Platform Submenu */}
                <div className="border-b pb-2">
                  <button
                    onClick={() => toggleMobileSubmenu('platform')}
                    className="w-full flex justify-between items-center py-3 font-medium text-strata-darkPurple"
                  >
                    <span>Platform</span>
                    <span className="transition-transform duration-200">
                      {mobileSubmenu === 'platform' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === 'platform' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 my-2 flex flex-col space-y-3 pb-2">
                          <Link href="/platform" className="block py-2 text-gray-600">Maverics Platform</Link>
                          <Link href="/identity-orchestration" className="block py-2 text-gray-600">Identity Orchestration</Link>
                          <Link href="/identity-continuity" className="block py-2 text-gray-600">Identity Continuity</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Recipes Submenu */}
                <div className="border-b pb-2">
                  <button
                    onClick={() => toggleMobileSubmenu('recipes')}
                    className="w-full flex justify-between items-center py-3 font-medium text-strata-darkPurple"
                  >
                    <span>Recipes</span>
                    <span className="transition-transform duration-200">
                      {mobileSubmenu === 'recipes' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === 'recipes' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 my-2 flex flex-col space-y-3 pb-2">
                          <Link href="/recipes" className="block py-2 text-gray-600">Orchestration Recipes</Link>
                          <Link href="/cookbooks" className="block py-2 text-gray-600">Orchestration Cookbooks</Link>
                          <Link href="/what-are-identity-orchestration-recipes" className="block py-2 text-gray-600">What are Orchestration Recipes?</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company Submenu */}
                <div className="border-b pb-2">
                  <button
                    onClick={() => toggleMobileSubmenu('company')}
                    className="w-full flex justify-between items-center py-3 font-medium text-strata-darkPurple"
                  >
                    <span>Company</span>
                    <span className="transition-transform duration-200">
                      {mobileSubmenu === 'company' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === 'company' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 my-2 flex flex-col space-y-3 pb-2">
                          <Link href="/company" className="block py-2 text-gray-600">About</Link>
                          <Link href="/partners" className="block py-2 text-gray-600">Partners</Link>
                          <Link href="/careers" className="block py-2 text-gray-600">Careers</Link>
                          <Link href="/media-kit" className="block py-2 text-gray-600">Media Kit</Link>
                          <Link href="/news" className="block py-2 text-gray-600">In the news</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources Submenu */}
                <div className="border-b pb-2">
                  <button
                    onClick={() => toggleMobileSubmenu('resources')}
                    className="w-full flex justify-between items-center py-3 font-medium text-strata-darkPurple"
                  >
                    <span>Resources</span>
                    <span className="transition-transform duration-200">
                      {mobileSubmenu === 'resources' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === 'resources' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 my-2 flex flex-col space-y-3 pb-2">
                          <Link href="/resources" className="block py-2 text-gray-600">Resource Center</Link>
                          <Link href="/whitepapers" className="block py-2 text-gray-600">Whitepapers</Link>
                          <Link href="/blog" className="block py-2 text-gray-600">Blog</Link>
                          <Link href="/glossary" className="block py-2 text-gray-600">Glossary</Link>
                          <Link href="/docs" className="block py-2 text-gray-600">Docs</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/customers" className="py-3 font-medium text-strata-darkPurple block border-b pb-2">
                  Customers
                </Link>

                <div className="pt-4">
                  <Button className="bg-strata-purple hover:bg-strata-darkPurple text-white w-full">
                    Get a demo
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
