import { NextResponse } from "next/server";

export async function POST(req) {
  const JsonBody = await req.json();
  let email = JsonBody["email"];
  let password = JsonBody["password"];

  if (email && password) {
    return NextResponse.json({
      status: true,
      msg: "Login Success",
    });
  } else {
    return NextResponse.json({
      msg: "Login Fail",
    });
  }
}
