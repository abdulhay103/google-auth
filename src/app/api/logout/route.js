import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function GET(req) {
  try {
    cookies().delete("token");
    cookies().delete("next-auth.csrf-token");

    return NextResponse.json({
      status: true,
      msg: "Logout Success",
    });
  } catch (error) {
    console.log(error.toString());
  }
}
