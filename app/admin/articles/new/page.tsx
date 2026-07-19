"use client";

import ArticleEditor from "@/components/admin/ArticleEditor";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function NewArticlePage() {
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  content: "",
  image: "",

  author: "ExpressMaids",
  readTime: "5 min read",

  featured: false,
  status: "published",
});

  function update(
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function uploadImage(file: File) {
    setUploading(true);

    const data = new FormData();
    data.append("image", file);

    const res = await fetch("/api/upload/article-image", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    setUploading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    setForm((prev) => ({
      ...prev,
      image: result.image,
    }));
  }

  async function submit(e: React.FormEvent) {
  e.preventDefault();

  if (
    !form.title.trim() ||
    !form.slug.trim() ||
    !form.category.trim() ||
    !form.image.trim() ||
    !form.excerpt.trim() ||
    !form.content.trim()
  ) {
    alert("Please fill in all fields before publishing.");
    return;
  }

  setLoading(true);

  const res = await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const result = await res.json();

  setLoading(false);

  if (!result.success) {
    alert(result.message);
    return;
  }

  router.push("/admin/articles");
  router.refresh();
}

  return (
    <div className="max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">
        Create Article
      </h1>

      <form
        onSubmit={submit}
        className="rounded-xl bg-white p-6 shadow space-y-6"
      >
        <input
          name="title"
          required
          placeholder="Article title"
          className="w-full rounded-lg border p-3"
          value={form.title}
          onChange={update}
        />

        <input
          name="slug"
          required
          placeholder="Slug"
          className="w-full rounded-lg border p-3"
          value={form.slug}
          onChange={update}
        />

        <input
          name="category"
          required
          placeholder="Category"
          className="w-full rounded-lg border p-3"
          value={form.category}
          onChange={update}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <input
    name="author"
    placeholder="Author"
    className="w-full rounded-lg border p-3"
    value={form.author}
    onChange={update}
  />

  <input
    name="readTime"
    placeholder="Read Time"
    className="w-full rounded-lg border p-3"
    value={form.readTime}
    onChange={update}
  />

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <select
    className="w-full rounded-lg border p-3"
    value={form.status}
    onChange={(e) =>
      setForm({
        ...form,
        status: e.target.value,
      })
    }
  >
    <option value="draft">Draft</option>
    <option value="published">Published</option>
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
            Featured Image
          </label>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex h-56 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50"
          >
            {form.image ? (
              <Image
                src={form.image}
                alt="Preview"
                width={600}
                height={300}
                className="h-full w-full rounded-xl object-cover"
              />
            ) : (
              <div className="text-center">
                <p className="font-semibold">
                  Click to upload image
                </p>

                <p className="text-sm text-slate-500">
                  JPG, PNG or WEBP
                </p>

                {uploading && (
                  <p className="mt-2 text-blue-600">
                    Uploading...
                  </p>
                )}
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                uploadImage(file);
              }
            }}
          />
        </div>

        <textarea
          rows={3}
          name="excerpt"
          placeholder="Short excerpt..."
          className="w-full resize-none rounded-lg border p-3"
          value={form.excerpt}
          onChange={update}
        />

        <div>
  <label className="mb-2 block font-medium">
    Article Content
  </label>

  <ArticleEditor
    value={form.content}
    onChange={(content) =>
      setForm((prev) => ({
        ...prev,
        content,
      }))
    }
  />
</div>

        <div className="flex justify-end">
          <button
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            {loading ? "Publishing..." : "Publish Article"}
          </button>
        </div>
      </form>
    </div>
  );
}