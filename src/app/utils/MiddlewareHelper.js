import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTokenKit";

export async function CheckAuth(req) {
  try {
    const reqHeaders = new Headers(req.headers);
    let token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    let payload = await VerifyToken(token["value"]);
    let email = payload["email"];
    console.log(email);
    reqHeaders.set("email", email);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
