import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const reqHeaders = headers();
  const userEmail = reqHeaders.get("email");

  return NextResponse.json({
    userEmail: userEmail,
  });
}
