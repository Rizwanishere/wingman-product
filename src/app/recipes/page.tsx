"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem, AnimatedText } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { fadeIn, fadeUp } from "@/lib/animation";

interface RecipeCardProps {
  title: string;
  description: string;
  categories: string[];
  link: string;
}

const RecipeCard = ({ title, description, categories, link }: RecipeCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardContent className="pt-6 flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-strata-lightPurple/30 text-strata-darkPurple font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            asChild
            variant="outline"
            className="w-full border-strata-purple text-strata-purple hover:bg-strata-purple/10"
          >
            <Link href={link} className="flex items-center justify-center gap-2">
              View recipe
              <ArrowRight size={16} />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function RecipesPage() {
  // Sample recipe data
  const recipes = [
    {
      title: "Move from SiteMinder to Azure AD",
      description: "SiteMinder's end of service is coming. Use this recipe to replace it with Azure AD without refactoring applications.",
      categories: ["Migration", "CA SiteMinder", "Entra ID"],
      link: "/recipes/move-from-siteminder-to-azure-ad"
    },
    {
      title: "PingOne Failover Protection",
      description: "Effortlessly switch to a backup IDP during a PingOne outage, ensuring your critical apps remain online.",
      categories: ["Identity Continuity", "Modern IDP", "PingOne"],
      link: "/recipes/pingone-failover"
    },
    {
      title: "Simplify Multi-IDP App Access",
      description: "Let any user log into a shared app with their group IDP without disrupting the login experience or losing control.",
      categories: ["Identity Continuity", "Modern Authentication", "Multiple IDPs"],
      link: "/recipes/simplify-multi-idp-app-access"
    },
    {
      title: "Okta to Entra ID Migration",
      description: "Seamlessly transition applications from Okta to Microsoft Entra ID (Azure AD) without disrupting user experience.",
      categories: ["Migration", "Okta", "Entra ID"],
      link: "/recipes/okta-to-entra-id-migration"
    },
    {
      title: "Add MFA to Legacy Applications",
      description: "Strengthen security on older apps by adding modern MFA without changing application code.",
      categories: ["Security", "Modern Authentication", "Legacy Apps"],
      link: "/recipes/add-mfa-to-legacy-apps"
    },
    {
      title: "IDP Consolidation Framework",
      description: "Reduce technology sprawl by unifying multiple identity providers while maintaining continuous access.",
      categories: ["Identity Fabric", "Multiple IDPs", "Consolidation"],
      link: "/recipes/idp-consolidation"
    }
  ];

  // Category filters
  const categories = [
    "All Recipes",
    "Migration",
    "Identity Continuity",
    "Modern Authentication",
    "Security"
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection variants={fadeUp(0.2)}>
              <h1 className="hero-heading mb-6">
                Orchestration Recipes
              </h1>
            </AnimatedSection>

            <AnimatedText delay={0.4} className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Pre-built, ready-to-deploy solutions for your most complex identity challenges. Browse our recipe library to find the right solution for your needs.
            </AnimatedText>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-strata-purple blur-3xl"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-strata-teal blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-strata-darkPurple">Filter by:</span>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-strata-purple hover:bg-strata-darkPurple" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-strata-lightGray">
        <div className="container mx-auto px-4">
          <AnimatedStaggerContainer
            delay={0.2}
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {recipes.map((recipe, index) => (
              <AnimatedStaggerItem key={index}>
                <RecipeCard
                  title={recipe.title}
                  description={recipe.description}
                  categories={recipe.categories}
                  link={recipe.link}
                />
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <AnimatedHeading className="section-heading mb-6">
              Not finding what you need?
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-8">
              Browse our cookbooks for collections of recipes or request a custom solution from our team.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <AnimatedSection variants={fadeIn(0.3)}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">Orchestration Cookbooks</h3>
                  <p className="text-gray-600 mb-4">Complete solution collections for enterprise-scale challenges.</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-strata-purple hover:bg-strata-darkPurple">
                    <Link href="/cookbooks">View cookbooks</Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection variants={fadeIn(0.4)}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-strata-darkPurple mb-3">Request Custom Recipe</h3>
                  <p className="text-gray-600 mb-4">Let our experts create a tailored solution for your specific needs.</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="outline" className="w-full border-strata-purple text-strata-purple hover:bg-strata-purple/10">
                    <Link href="/contact">Contact us</Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-strata-lightPurple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading className="section-heading mb-6">
              Ready to deploy your first recipe?
            </AnimatedHeading>

            <AnimatedText delay={0.2} className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with a free demo to see how easy it is to implement orchestration recipes in your environment.
            </AnimatedText>

            <AnimatedSection variants={fadeUp(0.4)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  asChild
                  className="bg-strata-purple hover:bg-strata-darkPurple text-white px-8 py-6 h-auto text-lg"
                >
                  <Link href="/demo" className="flex items-center gap-2">
                    Schedule a demo
                    <ChevronRight size={20} />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
