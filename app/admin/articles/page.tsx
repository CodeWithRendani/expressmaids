import DeleteArticleButton from "@/components/admin/DeleteArticleButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Articles
        </h1>

        <Link
          href="/admin/articles/new"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          New Article
        </Link>
      </div>

      <div className="rounded-xl bg-white shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-t">
                <td className="p-4">
                  {article.title}
                </td>

                <td className="p-4">
                  {article.category}
                </td>

                <td className="p-4 capitalize">
  {article.status}
</td>

<td className="p-4">
  <div className="flex justify-end gap-2">
    <Link
  href={`/admin/articles/${article.id}/edit`}
  className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
>
  Edit
</Link>

    <DeleteArticleButton id={article.id} />
  </div>
</td>
              </tr>
            ))}

            {articles.length === 0 && (
              <tr>
                <td colSpan={4} className="p-10 text-center text-slate-500">
                  No articles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}