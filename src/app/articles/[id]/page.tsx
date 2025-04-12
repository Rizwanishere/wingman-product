import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesItems, ArticlesItems } from "@/data/articles-items";

export function generateStaticParams() {
  return articlesItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function ArticlesPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const articleItem = articlesItems.find((study) => study.id === parseInt(id));

  if (!articleItem) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#latest-articles"
            className="inline-flex items-center text-wingman-blue hover:text-wingman-darkBlue mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={articleItem.imageUrl}
                alt={articleItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-wingman-blue/10 text-wingman-blue text-sm font-medium">
                    {articleItem.category}
                  </span>
                  <span className="text-gray-500">{articleItem.date}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-wingman-darkBlue mb-4">
                  {articleItem.title}
                </h1>
              </div>

              <div className="prose prose-lg max-w-none">
                {articleItem.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="mb-6 text-wingman-darkBlue font-bold text-2xl"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="mb-6 text-gray-600 leading-relaxed whitespace-pre-wrap"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="mb-6 list-disc pl-6 marker:text-wingman-darkBlue"
                      >
                        {block.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-600 leading-relaxed mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
