import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Props
) {
  const { id } = await params;

  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!article) {
    return NextResponse.json(
      { message: "Article not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}

export async function PUT(
  request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const article = await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        title: body.title,
        slug: body.slug,
        category: body.category,
        excerpt: body.excerpt,
        content: body.content,
        image: body.image,

        author:
          body.author?.trim() || "ExpressMaids",

        readTime:
          body.readTime?.trim() || "5 min read",

        featured: body.featured ?? false,

        status: body.status ?? "draft",

        publishedAt:
          body.status === "published"
            ? body.publishedAt
              ? new Date(body.publishedAt)
              : new Date()
            : null,
      },
    });

    return NextResponse.json(article);
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update article.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;

    await prisma.article.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete article.",
      },
      {
        status: 500,
      }
    );
  }
}