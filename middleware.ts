// import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {}
//   const searchUser = req.cookies.get("user-storage")?.value;
//   const user = searchUser && JSON.parse(searchUser);
//   const userInfo = user && "user" in user ? user.user : user;

//   const { pathname } = req.nextUrl;

//   if (pathname === "/blog") return NextResponse.redirect(new URL("/", req.url));

//   const exactPaths = [
//     "/",
//     "/auth",
//     "/dashboard/profile",
//     "/dashboard/newslatter",
//     "/my-orders/:path*",
//     "/admin/users",
//     "/admin/panel",
//     "/admin/tracking",
//     "/admin/tracking/installations",
//     "/admin/blog",
//     "/coordinator/history",
//     "/coordinator/installations",
//     "/installer/history",
//     "/installer/installations",
//   ];

//   const basePaths = ["/my-orders"];

//   const isExactMatch = exactPaths.includes(pathname);

//   const isBaseMatch = basePaths.some((base) => pathname.startsWith(base));

//   // SOLO SI NO coincide ni exacto ni base, redirigimos
//   if (!isExactMatch && !isBaseMatch) {
//     return NextResponse.redirect(new URL("/not-found", req.url));
//   }

//   const pathAuth = ["/auth"];

//   const isPath = (paths: RegExp[]) => paths.some((path) => path.test(pathname));

//   const pathRestrictered = [
//     /^\/dashboard(\/.*)?$/,
//     /^\/admin(\/.*)?$/,
//     /^\/coordinator(\/.*)?$/,
//     /^\/installer(\/.*)?$/,
//     /^\/my-orders(\/.*)?$/,
//   ];
//   const pathUserRestrictered = [
//     /^\/admin(\/.*)?$/,
//     /^\/installer(\/.*)?$/,
//     /^\/coordinator(\/.*)?$/,
//   ];
//   const pathInstallerRestrictered = [
//     /^\/admin(\/.*)?$/,
//     /^\/my-orders(\/.*)?$/,
//     /^\/coordinator(\/.*)?$/,
//   ];
//   const pathCoordinatorRestrictered = [
//     /^\/admin(\/.*)?$/,
//     /^\/my-orders(\/.*)?$/,
//     /^\/installer(\/.*)?$/,
//   ];
//   const pathAdminRestrictered = [
//     /^\/installer(\/.*)?$/,
//     /^\/my-orders(\/.*)?$/,
//     /^\/coordinator(\/.*)?$/,
//   ];

//   if (!user && isPath(pathRestrictered))
//     return NextResponse.redirect(new URL("/auth", req.url));

//   if (user && user.token && pathAuth.some((path) => pathname.startsWith(path)))
//     return NextResponse.redirect(new URL("/", req.url));

//   if (userInfo) {
//     const isUser =
//       !userInfo.admin && !userInfo.installer && !userInfo.coordinator;
//     const isInstaller = !!userInfo.installer && !userInfo.admin;
//     const isCoordinator = !!userInfo.coordinator && !userInfo.admin;
//     const isAdmin = !!userInfo.admin;

//     if (isUser && isPath(pathUserRestrictered))
//       return NextResponse.redirect(new URL("/", req.url));

//     if (isInstaller && isPath(pathInstallerRestrictered))
//       return NextResponse.redirect(new URL("/", req.url));

//     if (isCoordinator && isPath(pathCoordinatorRestrictered))
//       return NextResponse.redirect(new URL("/", req.url));

//     if (isAdmin && isPath(pathAdminRestrictered))
//       return NextResponse.redirect(new URL("/", req.url));

//     if (pathname === "/dashboard/newslatter" && !isUser)
//       return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/admin/:path*",
//     "/coordinator/:path*",
//     "/installer/:path*",
//     "/auth",
//     "/my-orders/:path*",
//     "/blog/:path*",
//   ],
// };
