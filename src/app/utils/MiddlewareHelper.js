import { NextResponse } from "next/server";
import { VerifyToken } from "./jwTokenKit";

export async function CheckAuth(req) {
  try {
    const reqHeaders = new Headers(req.headers);
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    reqHeaders.set("email", payload["email"]);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
