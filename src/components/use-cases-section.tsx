"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface UseCaseCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

const UseCaseCard = ({
  title,
  description,
  imageSrc,
  imageAlt = "Use case illustration",
  ctaText,
  ctaLink,
}: UseCaseCardProps) => {
  return (
    <Card className="flex flex-col h-full border border-gray-200 overflow-hidden">
      {imageSrc && (
        <div className="w-full h-52 relative">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-label={imageAlt}
          />
        </div>
      )}
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold text-strata-darkBlue mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="text-strata-blue border-strata-blue hover:bg-strata-blue/10 w-full"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const UseCasesSection = () => {
  // Temporary placeholder for images
  const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2E5OWJjZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI2cHgiIGZpbGw9IiMzYTM0NmMiPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==";

  const useCases = [
    {
      title: "Orchestrate with identity software",
      description: "Create a custom identity fabric by integrating your IAM architecture. From there, the choice is yours – replace outdated providers, consolidate IDPs, add MFA plus so much more.",
      imageSrc: placeholderImage,
      ctaText: "Explore product",
      ctaLink: "/identity-orchestration",
    },
    {
      title: "Protect access to mission-critical apps",
      description: "Make sure mission-critical apps are available even when your IDP is not – set up seamless failover and failback to any alternative cloud IDP or on-prem Active Directory so you're not caught off-guard.",
      imageSrc: placeholderImage,
      ctaText: "Explore product",
      ctaLink: "/identity-continuity",
    },
  ];

  return (
    <section className="py-20 bg-strata-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6">How will you use your identity fabric?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              imageSrc={useCase.imageSrc}
              ctaText={useCase.ctaText}
              ctaLink={useCase.ctaLink}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-strata-blue hover:bg-strata-darkBlue text-white px-6"
          >
            <Link href="/demo">Get a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
