import { UserAuthCheck } from "./app/utils/MiddlewareHelper";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await UserAuthCheck(req);
  }
}
