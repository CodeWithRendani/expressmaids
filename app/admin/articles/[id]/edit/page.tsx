import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditForm from "./EditForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditArticlePage({
  params,
}: Props) {
  const { id } = await params;

  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Article
        </h1>

        <p className="text-slate-500">
          Update your article.
        </p>

      </div>

      <EditForm
        article={{
          id: article.id,
          title: article.title,
          slug: article.slug,
          category: article.category,
          excerpt: article.excerpt,
          content: article.content,
          image: article.image,
          author: article.author,
          readTime: article.readTime,
          featured: article.featured,
          status: article.status,
        }}
      />

    </div>
  );
}