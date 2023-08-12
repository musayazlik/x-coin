import dbConnect from "@/libs/dbConnect";

import BreakAndIncom from "@/models/ForexBreakAndIncom";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        if (req.query.slug) {
          const breakAndIncom = await BreakAndIncom.findOne({
            slug: req.query.slug,
          }).populate("user", "name surname role image");

          if (!breakAndIncom) {
            sendErrorResponse(res, 404, "Not found");
            return;
          }

          sendSuccessResponse(res, breakAndIncom);
          return;
        }
        const breakAndIncom = await BreakAndIncom.find({})
          .populate("user", "name surname role image")
          .where("status")
          .equals(true);

        sendSuccessResponse(res, breakAndIncom);
      } catch (error) {
        sendErrorResponse(res, 400, error.message);
      }
      break;
    default:
      sendErrorResponse(res, 400, "Invalid request");
      break;
  }
}
