"use client";

import ArticleEditor from "@/components/admin/ArticleEditor";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  article: {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    image: string | null;
    author: string;
    readTime: string;
    featured: boolean;
    status: string;
  };
}

export default function EditForm({
  article,
}: Props) {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: article.title,
    slug: article.slug,
    category: article.category,
    excerpt: article.excerpt,
    content: article.content,
    image: article.image ?? "",
    author: article.author,
    readTime: article.readTime,
    featured: article.featured,
    status: article.status,
  });

  async function save() {
    setSaving(true);

    const res = await fetch(`/api/articles/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setSaving(false);

    if (!res.ok) {
      alert("Failed to update article.");
      return;
    }

    alert("Article updated successfully.");

    router.push("/admin/articles");
    router.refresh();
  }

    return (
    <div className="space-y-6 rounded-xl bg-white p-6 shadow">

      <div>

        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Slug
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Category
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Excerpt
        </label>

        <textarea
          rows={4}
          className="w-full rounded-lg border p-3"
          value={form.excerpt}
          onChange={(e) =>
            setForm({
              ...form,
              excerpt: e.target.value,
            })
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Featured Image
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={form.image}
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value,
            })
          }
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-medium">
            Author
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={form.author}
            onChange={(e) =>
              setForm({
                ...form,
                author: e.target.value,
              })
            }
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Read Time
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={form.readTime}
            onChange={(e) =>
              setForm({
                ...form,
                readTime: e.target.value,
              })
            }
          />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <select
          className="rounded-lg border p-3"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        >
          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>

        </select>

        <label className="flex items-center gap-3 rounded-lg border p-3">

          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              setForm({
                ...form,
                featured: e.target.checked,
              })
            }
          />

          Featured Article

        </label>

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Content
        </label>

        <ArticleEditor
          value={form.content}
          onChange={(value) =>
            setForm({
              ...form,
              content: value,
            })
          }
        />

      </div>

      <button
        type="button"
        onClick={save}
        disabled={saving}
        className="rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

    </div>
  );
}