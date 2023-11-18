import {getServerSession} from "next-auth/next";
import {authOptions} from "../pages/api/auth/[...nextauth]";

const isAuth = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(403).json({message: "Forbidden"});
  }

  return session;

};

export default isAuth;
