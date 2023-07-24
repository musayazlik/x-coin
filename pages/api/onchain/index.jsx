import dbConnect from "@/libs/dbConnect";
import OnChain from "@/models/OnChain";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const onChain = await OnChain.find({})
          .populate("user", "name surname role image")
          .where("status")
          .equals(true);

        sendSuccessResponse(res, onChain);
      } catch (error) {
        sendErrorResponse(res, 400, error.message);
      }
      break;
    default:
      sendErrorResponse(res, 400, "Invalid request");
      break;
  }
}
