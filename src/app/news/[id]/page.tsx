import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "@/data/news-items";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function NewsPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params;
  const newsItem = newsItems.find(study => study.id === parseInt(id));

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#latest-news"
            className="inline-flex items-center text-wingman-blue hover:text-wingman-darkBlue mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to News
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={newsItem.imageUrl}
                alt={newsItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-wingman-blue/10 text-wingman-blue text-sm font-medium">
                    {newsItem.category}
                  </span>
                  <span className="text-gray-500">
                    {newsItem.date}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-wingman-darkBlue mb-4">
                  {newsItem.title}
                </h1>
              </div>

              <div className="prose prose-lg max-w-none">
                {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
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
