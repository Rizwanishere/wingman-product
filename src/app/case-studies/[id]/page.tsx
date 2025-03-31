import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }));
}

export default async function CaseStudyPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params;
  const caseStudy = caseStudies.find(study => study.id === parseInt(id));

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-strata-blue hover:text-strata-darkBlue mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-strata-blue/10 text-strata-blue text-sm font-medium mb-4">
                  {caseStudy.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-strata-darkBlue mb-4">
                  {caseStudy.title}
                </h1>
              </div>

              <div className="prose prose-lg max-w-none">
                {caseStudy.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
