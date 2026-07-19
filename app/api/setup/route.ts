import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const existingAdmin = await prisma.admin.findUnique({
      where: {
        email: "admin@expressmaids.co.za",
      },
    });

    if (existingAdmin) {
      return NextResponse.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await prisma.admin.create({
      data: {
        name: "Administrator",
        email: "admin@expressmaids.co.za",
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin account created successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create admin account",
      },
      {
        status: 500,
      }
    );
  }
}