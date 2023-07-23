import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized({ req, res, token }) {
      if (
        req?.nextUrl?.pathname === "/dashboard" ||
        req?.nextUrl?.pathname === "/dashboard/:path*"
      ) {
        const isTokenValid = token?.exp && Date.now() < token.exp * 1000;
        const isAdmin = token?.role === "admin";

        console.log(token);
        if (!isAdmin && !isTokenValid) {
          console.log(req.url);
          return false;
        }
        return !!token && isAdmin;
      } else {
        const isTokenValid = token?.exp && Date.now() < token.exp * 1000;

        if (!isTokenValid) {
          return false;
        }

        console.log(token);
        return !!token;
      }
    },
  },
});

export const config = {
  matcher: [
    "/account/:path*",
    "/",
    "/pricing/:path*",
    "/profile",
    "/dashboard",
    "/dashboard/:path*",
  ],
};
