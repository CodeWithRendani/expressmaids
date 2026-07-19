import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditArticlePage({ params }: Props) {
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
    <div className="max-w-5xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Article
      </h1>

      <form className="space-y-6 rounded-xl bg-white p-8 shadow">
        <input
          defaultValue={article.title}
          className="w-full rounded-lg border p-3"
        />

        <input
          defaultValue={article.slug}
          className="w-full rounded-lg border p-3"
        />

        <input
          defaultValue={article.category}
          className="w-full rounded-lg border p-3"
        />

        <textarea
          rows={4}
          defaultValue={article.excerpt}
          className="w-full rounded-lg border p-3"
        />

        <textarea
          rows={12}
          defaultValue={article.content}
          className="w-full rounded-lg border p-3"
        />

        <button
          className="rounded-lg bg-green-600 px-8 py-3 text-white"
        >
          Update Article
        </button>
      </form>
    </div>
  );
}