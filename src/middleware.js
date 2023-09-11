import { CheckAuth } from "./app/utils/MiddlewareHelper";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    await CheckAuth(req);
    console.log("go");
  }
}
