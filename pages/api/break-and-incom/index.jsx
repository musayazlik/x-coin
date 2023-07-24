import dbConnect from "@/libs/dbConnect";

import BreakAndIncom from "@/models/BreakAndIncom";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const breakAndIncom = await BreakAndIncom.find({})
          .populate("user", "name surname role image")
          .where("status")
          .equals(true);

        console.log(breakAndIncom);
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
