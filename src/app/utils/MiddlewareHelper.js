import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTokenKit";

// User Authentication Check
export async function UserAuthCheck(req) {
  const reqHeaders = new Headers(req.headers);
  const token = !!req.cookies.get("token");
  const tokenData = req.cookies.get("token");
  const githubSession = !!req.cookies.get("next-auth.csrf-token");
  if (token === false && githubSession === false) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (token) {
    let payload = await VerifyToken(tokenData["value"]);
    let email = payload["email"];
    reqHeaders.set("email", email);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } else if (githubSession) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
