import Link from "next/link";
//import { articles } from "../data/articles";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "News",
  description:
    "Latest cleaning, hygiene, property and business news from ExpressMaids.",
};

export default async function NewsPage() {

const articles = await prisma.article.findMany({
  where: {
    status: "published",
  },
  orderBy: {
    createdAt: "desc",
  },
});

if (articles.length === 0) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-slate-500">
        No news articles available.
      </h1>
    </main>
  );
}

const latestNews = articles;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-r from-[#163A8A] via-[#2350B7] to-[#163A8A] text-white py-14">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex items-center justify-between mb-10">

  <Link
    href="/"
    className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition font-medium"
  >
    ← Back to Home
  </Link>

  <p className="uppercase tracking-[5px] text-xs text-blue-200 font-semibold">
    EXPRESSMAIDS NEWS
  </p>

</div>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            News & Insights
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Original news, cleaning insights, hygiene updates,
            property maintenance, business news and industry developments
            across South Africa.
          </p>

        </div>

      </section>

      
      

            {/* ================= LATEST NEWS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-12">

          <div>

            <h2 className="text-4xl font-bold text-[#183A8F]">
  Latest News
</h2>

<p className="mt-2 text-gray-600">
  Browse our latest cleaning, hygiene and business updates.
</p>

          </div>

          

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {latestNews.map((article) => (

            <Link
  key={article.slug}
  href={`/news/${article.slug}`}
  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <div
    className="h-40 bg-cover bg-center"
    style={{
      backgroundImage: `url(${article.image})`,
    }}
  />

  <div className="p-4">

    <div className="flex items-center justify-between mb-3">

      <span className="text-[11px] uppercase tracking-wide font-medium text-blue-600">
  {article.category}
</span>

      <span className="text-xs text-gray-400">
        {article.publishedAt?.toLocaleDateString()}
      </span>

    </div>

    <h3 className="text-xl font-semibold leading-7 line-clamp-2 group-hover:text-blue-700 transition">
      {article.title}
    </h3>

    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
      {article.excerpt}
    </p>

    <div className="mt-5 pt-4 border-t flex items-center justify-between">

      <span className="text-xs text-gray-500">
        {article.readTime}
      </span>

      <span className="text-red-600 text-sm font-semibold">
        Read →
      </span>

    </div>

  </div>
</Link>

          ))}

        </div>

      </section>


            {/* ================= FOOTER SPACING ================= */}

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} ExpressMaids News. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}