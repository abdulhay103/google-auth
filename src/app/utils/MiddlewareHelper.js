import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTokenKit";

// User Authentication Check
export async function UserAuthCheck(req) {
  try {
    const reqHeaders = new Headers(req.headers);
    const token = req.cookies.get("token");
    const githubSession = req.cookies.get("next-auth.csrf-token");
    if (!token || !githubSession) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (token) {
      let payload = await VerifyToken(token["value"]);
      let email = payload["email"];
      console.log(email);
      reqHeaders.set("email", email);
      return NextResponse.next({ request: { headers: reqHeaders } });
    } else if (githubSession) {
      return NextResponse.next();
    }
  } catch (error) {
    console.log(error.toString());
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
