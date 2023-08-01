import dbConnect from "@/libs/dbConnect";
import OnChain from "@/models/OnChain";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        if (req.query.slug) {
          const onChain = await OnChain.findOne({
            slug: req.query.slug,
          }).populate("user", "name surname role image");

          if (!onChain) {
            sendErrorResponse(res, 404, "Not found");
            return;
          }

          sendSuccessResponse(res, onChain);
          return;
        }
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
