export function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("Dashboard Middleware");
  }
}
