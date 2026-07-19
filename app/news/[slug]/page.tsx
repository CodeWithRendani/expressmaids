import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    select: {
      slug: true,
    },
  });

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: {
      slug,
    },
  });

  if (!article) {
    return {
      title: "Article Not Found | ExpressMaids",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,

    keywords: [
      article.category,
      "ExpressMaids",
      "Cleaning News",
      "South Africa",
    ],

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function NewsArticle({
  params,
}: Props) {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: {
      slug,
    },
  });

  if (!article) {
    notFound();
  }

  const relatedArticles =
    await prisma.article.findMany({
      where: {
        category: article.category,
        status: "published",
        NOT: {
          slug: article.slug,
        },
      },
      take: 3,
      orderBy: {
        publishedAt: "desc",
      },
    });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#163A8A] via-[#2350B7] to-[#163A8A] text-white py-6">

        <div className="max-w-4xl mx-auto px-6">

    </div>

  <Link
    href="/news"
    className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition font-medium mb-8"
  >
    ← Back to News
  </Link>

  <div className="text-center">

          <span className="bg-red-600 px-4 py-2 rounded-full text-sm">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mt-5">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap justify-center gap-5 text-blue-100 text-sm">

            <span>
              By {article.author}
            </span>

            <span>
              {article.publishedAt?.toLocaleDateString()}
            </span>

            <span>
              {article.readTime}
            </span>

          </div>

        </div>

      </section>

      {/* Featured Image */}

      <section className="max-w-4xl mx-auto px-6 mt-8">

        <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">

          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              width={1000}
              height={450}
              className="w-full h-56 md:h-72 object-cover rounded-2xl"
            />
          )}

        </div>

      </section>

            {/* Article */}

      <section className="max-w-4xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />

          <div className="mt-12 pt-8 border-t flex flex-wrap justify-between items-center gap-4">

            <span className="text-gray-500">
              Updated{" "}
              {article.updatedAt.toLocaleDateString()}
            </span>

          </div>

        </div>

      </section>

      {/* Related Articles */}

      {relatedArticles.length > 0 && (

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="border-t pt-16">

            <h2 className="text-4xl font-bold text-[#183A8F] mb-10">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {relatedArticles.map((related) => (

                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >

                  {related.image && (

                    <Image
                      src={related.image}
                      alt={related.title}
                      width={500}
                      height={300}
                      className="w-full h-52 object-cover"
                    />

                  )}

                  <div className="p-6">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {related.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold group-hover:text-blue-700">

                      {related.title}

                    </h3>

                    <p className="mt-4 text-gray-600 line-clamp-3">

                      {related.excerpt}

                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            headline: article.title,

            image: article.image
              ? [article.image]
              : [],

            datePublished:
              article.publishedAt,

            dateModified:
              article.updatedAt,

            author: {
              "@type": "Organization",
              name: article.author,
            },

            publisher: {
              "@type": "Organization",
              name: "ExpressMaids",
            },

            description:
              article.excerpt,
          }),
        }}
      />

    </main>

    
  );
  
}