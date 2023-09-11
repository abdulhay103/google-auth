import { cookie } from "next/headers";
import { NextResponse } from "next/server";
export function GET(req) {
  cookie().delete("token");

  return NextResponse.json({
    status: true,
    msg: "Logout Success",
  });
}
