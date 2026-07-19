import { mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

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

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const extension = file.name.split(".").pop();

    const fileName = `${Date.now()}.${extension}`;

    const uploadPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "articles",
      fileName
    );

    // Automatically create the upload folder if it doesn't exist
    await mkdir(path.dirname(uploadPath), {
      recursive: true,
    });

    // Save the uploaded image
    await writeFile(uploadPath, buffer);

    return NextResponse.json({
      success: true,
      image: `/uploads/articles/${fileName}`,
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