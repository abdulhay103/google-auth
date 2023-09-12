import { TokenCookie } from "@/app/utils/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req) {
  const JsonBody = await req.json();
  let email = JsonBody["email"];
  let password = JsonBody["password"];

  if (email && password) {
    let tokenCookie = await TokenCookie(email);
    return NextResponse.json(
      {
        status: true,
        msg: "Login Success",
      },
      {
        headers: tokenCookie,
      }
    );
  } else {
    return NextResponse.json(
      {
        msg: "Login Fail",
      },
      { status: 401 }
    );
  }
}
