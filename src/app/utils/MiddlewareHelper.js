import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTokenKit";

export async function CheckAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    console.log(payload["email"]);

    const reqHeaders = new Headers(req.headers);
    reqHeaders.set("email", payload["email"]);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
