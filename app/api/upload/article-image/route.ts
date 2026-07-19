import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No image selected.",
        },
        {
          status: 400,
        }
      );
    }

    const extension = file.name.split(".").pop() || "jpg";

    const fileName = `articles/${Date.now()}.${extension}`;

    const blob = await put(fileName, file, {
      access: "public",
    });

    return NextResponse.json({
      success: true,
      image: blob.url,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Image upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}