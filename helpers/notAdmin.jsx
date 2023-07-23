import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const notAdmin = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const isAdmin = session?.user?.role === "admin";

  if (!isAdmin) {
    res.status(403).json({ message: "Forbidden" });
  }
};

export default notAdmin;
