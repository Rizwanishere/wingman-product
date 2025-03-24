"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface FeaturedCardProps {
  title: string;
  rating?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  altText?: string;
  currentIndex?: number;
  totalSlides?: number;
}

const FeaturedCard = ({
  title,
  rating,
  description,
  ctaText,
  ctaLink,
  imageUrl,
  altText = "Featured image",
  currentIndex = 1,
  totalSlides = 3
}: FeaturedCardProps) => {
  return (
    <Card className="border-none shadow-lg overflow-hidden bg-gray-100 rounded-lg">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-10 flex-1">
            <h3 className="sub-heading mb-4">
              {title}
              {rating && (
                <span className="ml-2 text-strata-purple">(Rated {rating} ⭐)</span>
              )}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Button
              asChild
              variant="outline"
              className="text-strata-purple border-strata-purple hover:bg-strata-purple/10"
            >
              <Link href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ChevronRight size={16} />
              </Link>
            </Button>

            {/* Pagination dots */}
            {totalSlides > 1 && (
              <div className="flex items-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index + 1 === currentIndex
                        ? "bg-strata-purple"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {imageUrl && (
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
                aria-label={altText}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
