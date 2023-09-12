import { CheckAuth } from "./app/utils/MiddlewareHelper";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckAuth(req);
  }
}
