import {withAuth} from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({req, res, token}) {
      if (req?.nextUrl?.pathname.startsWith("/dashboard")) {
        const isTokenValid = token?.exp && Date.now() < token.exp * 1000;
        const isAdmin = token?.role === "admin";

        if (!isAdmin && !isTokenValid) {
          return false;
        }
        return !!token && isAdmin;
      } else {
        const isTokenValid = token?.exp && Date.now() < token.exp * 1000;

        if (!isTokenValid) {
          return false;
        }

        return !!token;
      }
    },
  },
});

export const config = {
  matcher: [
    "/feed/:path*",
    "/account/:path*",
    "/education/:path*",
    "/analytics/:path*",
    "/tools/:path*",
    "/pricing/:path*",
    "/profile",
    "/dashboard",
    "/dashboard/:path*",
    "/question-answer",
    "/question-answer/:path*",
  ],
};
