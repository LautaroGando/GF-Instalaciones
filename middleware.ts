import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const searchUser = req.cookies.get("user-storage")?.value;
  const user = searchUser && JSON.parse(searchUser);
  const userInfo = user && "user" in user ? user.user : user;

  const { pathname } = req.nextUrl;

  if (pathname === "/blog") return NextResponse.redirect(new URL("/", req.url));

  const isPath = (paths: RegExp[]) => paths.some((path) => path.test(pathname));

  const authPaths = ["/auth"];

  const pathByRole = {
    user: [/^\/my-orders(\/.*)?$/],
    shared: [/^\/dashboard(\/.*)?$/, /^\/dashboard\/newslatter$/],
    installer: [/^\/installer(\/.*)?$/],
    coordinator: [/^\/coordinator(\/.*)?$/],
    admin: [/^\/admin(\/.*)?$/],
  };

  const allRestrictedPaths = [
    ...pathByRole.user,
    ...pathByRole.shared,
    ...pathByRole.installer,
    ...pathByRole.coordinator,
    ...pathByRole.admin,
  ];

  const isRestricted = isPath(allRestrictedPaths);

  if (!user && isRestricted) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (user && user.token && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (userInfo) {
    const roles = {
      user: !userInfo.installer && !userInfo.coordinator && !userInfo.admin,
      installer: !!userInfo.installer,
      coordinator: !!userInfo.coordinator,
      admin: !!userInfo.admin,
    };

    const hasAccess =
      isPath(pathByRole.shared) ||
      Object.entries(roles).some(
        ([role, hasRole]) =>
          hasRole && isPath(pathByRole[role as keyof typeof pathByRole])
      );

    if (!hasAccess && isRestricted) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/coordinator/:path*",
    "/installer/:path*",
    "/auth",
    "/my-orders/:path*",
    "/blog/:path*",
  ],
};
