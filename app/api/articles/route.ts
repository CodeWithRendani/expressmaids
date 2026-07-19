import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        image: body.image ?? "",
        category: body.category,

        featured: body.featured ?? false,

        status: body.status ?? "draft",

        author: body.author?.trim() || "ExpressMaids",

        readTime: body.readTime?.trim() || "5 min read",

        publishedAt:
          (body.status ?? "draft") === "published"
            ? new Date()
            : null,
      },
    });

    return NextResponse.json({
      success: true,
      article,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create article.",
      },
      {
        status: 500,
      }
    );
  }
}