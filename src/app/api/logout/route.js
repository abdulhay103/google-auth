import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function GET(req) {
  cookies().delete("token");

  return NextResponse.json({
    status: true,
    msg: "Logout Success",
  });
}
