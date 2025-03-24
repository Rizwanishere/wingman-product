"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-strata-darkPurple text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and CTA Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="inline-block">
                <div className="relative w-32 h-8">
                  <svg viewBox="0 0 100 20" className="w-full h-full">
                    <text x="0" y="16" fontSize="18" fontWeight="bold" fill="#ffffff">STRATA</text>
                  </svg>
                </div>
              </Link>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ready to make identity consistent?</h3>
                <p className="text-strata-lightPurple mb-4">
                  Use Identity Orchestration to integrate, automate, and secure identity and apps across hybrid and multi-cloud environments
                </p>
                <Link href="/demo" className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-strata-purple hover:bg-opacity-90 text-white font-medium">
                  Get a demo
                </Link>
              </div>

              <Link href="https://security-trust.strata.io/" className="text-strata-lightPurple hover:text-white transition-colors">
                View our security portal
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/maverics-platform" className="text-strata-lightPurple hover:text-white transition-colors">
                  Maverics Platform
                </Link>
              </li>
              <li>
                <Link href="/identity-orchestration" className="text-strata-lightPurple hover:text-white transition-colors">
                  Identity Orchestration
                </Link>
              </li>
              <li>
                <Link href="/identity-continuity" className="text-strata-lightPurple hover:text-white transition-colors">
                  Identity Continuity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recipes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/recipes" className="text-strata-lightPurple hover:text-white transition-colors">
                  Recipes Overview
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/report" className="text-strata-lightPurple hover:text-white transition-colors">
                  State of Multi-cloud Identity 2025 Report
                </Link>
              </li>
              <li>
                <Link href="/playbook" className="text-strata-lightPurple hover:text-white transition-colors">
                  The identity fabric playbook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-strata-lightPurple hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-strata-lightPurple hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-strata-lightPurple hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/customers" className="text-strata-lightPurple hover:text-white transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-strata-lightPurple hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12">
          <Separator className="bg-strata-lightPurple opacity-30 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-strata-lightPurple">
              © {new Date().getFullYear()} Strata Identity, Inc. All rights reserved.
            </div>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-strata-lightPurple hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-strata-lightPurple hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-strata-lightPurple hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
