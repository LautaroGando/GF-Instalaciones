import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  /* const searchUser = req.cookies.get("user-storage")?.value;

  const user = searchUser && JSON.parse(searchUser);

  const pathAuth = ["/auth"];

  const pathRestrictered = [
    /^\/dashboard(\/.*)?$/,
    /^\/admin(\/.*)?$/,
    /^\/installer(\/.*)?$/,
  ];

  if (
    user &&
    user.token &&
    pathAuth.some((path) => req.nextUrl.pathname.startsWith(path))
  )
    return NextResponse.redirect(new URL("/", req.url));

  if (!user && pathRestrictered.some((path) => path.test(req.nextUrl.pathname)))
    return NextResponse.redirect(new URL("/auth", req.url));

  return NextResponse.next(); */
};

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/installer", "/auth"],
};
