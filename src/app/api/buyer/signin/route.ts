import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const user = await prisma.buyerUser.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken({ id: user.id, email: user.email });
    const response = NextResponse.json(
      {
        message: "Sign in successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        phoneNumber: user.phoneNumber,
        },
        token,  
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60, 
    });

    return response;

  } catch (error) {
    console.error("Signin Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}