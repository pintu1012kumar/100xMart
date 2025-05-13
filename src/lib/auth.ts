// src/lib/auth.ts
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    const decoded = jwt.verify(token, SECRET);
    if (typeof decoded === "string") {
      return null;
    }
    return decoded as JwtPayload;
  } catch {
    return null;
  }
}