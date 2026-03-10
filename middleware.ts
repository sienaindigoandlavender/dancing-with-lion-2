import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Redirect www to non-www (canonical is dancingwiththelions.com)
  if (hostname.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = hostname.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

  // Strip trailing slashes (except root /)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|api|llms|robots|sitemap).*)",
};
