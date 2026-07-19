import { prisma } from "@/lib/prisma";

export async function GET() {
  const siteUrl = "https://www.expressmaids.co.za";

  const articles = await prisma.article.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      publishedAt: "desc",
    },
    select: {
      slug: true,
      title: true,
      publishedAt: true,
    },
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

${articles
  .map(
    (article) => `
<url>
  <loc>${siteUrl}/news/${article.slug}</loc>

  <news:news>

    <news:publication>

      <news:name>ExpressMaids News</news:name>

      <news:language>en</news:language>

    </news:publication>

    <news:publication_date>${article.publishedAt?.toISOString()}</news:publication_date>

    <news:title><![CDATA[${article.title}]]></news:title>

  </news:news>

</url>`
  )
  .join("")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}