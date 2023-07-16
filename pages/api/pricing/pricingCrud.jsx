import User from "@/models/Users";
import Order from "@/models/Orders";
import dbConnect from "@/libs/dbConnect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  await dbConnect();

  const { method } = req;

  switch (method) {
    case "PATCH":
      try {
        const { userId, paymentMethod, amount, memberShipType } = req.body;

        await User.findOneAndUpdate(
          { _id: userId },
          {
            memberShipType: memberShipType,
          },
          { new: true }
        );

        await Order.create({
          user: userId,
          paymentMethod,
          amount,
          memberShipType,
        });

        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
