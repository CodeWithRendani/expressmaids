"use client";

import { useRouter } from "next/navigation";

export default function DeleteArticleButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  async function removeArticle() {
    const ok = confirm(
      "Delete this article?"
    );

    if (!ok) return;

    const res = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={removeArticle}
      className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
}