import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/auth"; 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password,phoneNumber } = body;

    if (!name || !email || !password || !phoneNumber) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await prisma.buyerUser.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.buyerUser.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phoneNumber,
      },
    });

    const token = generateToken({ id: user.id, email: user.email });
    return NextResponse.json(
      {
        message: "User created successfully",
        token, 
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}