import { NextResponse } from "next/server";

export async function POST(req, res) {
  const resJson = await req.json();
  let user = resJson["user"];
  let email = resJson["email"];
  let password = resJson["password"];
  if (user && email && password) {
    return NextResponse.json({
      status: true,
      msg: "Registration Success",
    });
  } else {
    return NextResponse.json({
      status: false,
      msg: "Registration Fail",
    });
  }
}
