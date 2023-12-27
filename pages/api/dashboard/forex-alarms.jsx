import dbConnect from "@/libs/dbConnect";
import BreakAndIncom from "@/models/ForexBreakAndIncom";
import cloudinary from "cloudinary";
import formidable from "formidable";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";
import notAdmin from "@/helpers/notAdmin";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Function to update user's password
const updateBreakAndIncom = async (req, res, fields, files) => {
  const { title, description, slug, content, status, user } = fields;
  let data = {
    title: title[0],
    description: description[0],
    slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
    content: content[0],
    status: status[0] === "true" ? true : false,
    user: user[0],
  };

  if (files.thumbnail || files.thumbnail !== undefined) {
    const thumbnailName = `${fields.slug}-${Date.now()}`;
    const thumbnailPath = files.thumbnail[0].filepath;
    const thumbnailUrl = await cloudinary.v2.uploader.upload(thumbnailPath, {
      folder: "alarms-thumbnails",
      public_id: thumbnailName,
    });

    data = {
      ...data,
      thumbnail: thumbnailUrl.secure_url,
    };

    try {
      const breakAndIncomUpdated = await BreakAndIncom.findOneAndUpdate(
        { _id: fields.id[0] },
        { $set: data },
        { new: true }
      );

      if (!breakAndIncomUpdated) {
        sendErrorResponse(res, 404, "İçerik bulunamadı.");
      } else {
        sendSuccessResponse(res, breakAndIncomUpdated);
      }
    } catch (error) {
      sendErrorResponse(res, 400, error.message);
    }
  } else {
    try {
      const { title, description, slug, content, status, user } = fields;
      const data = {
        title: title[0],
        description: description[0],
        slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
        content: content[0],
        status: status[0] === "true" ? true : false,
        user: user[0],
      };

      const breakAndIncomUpdated = await BreakAndIncom.findOneAndUpdate(
        { _id: fields.id[0] },
        { $set: data },
        { new: true }
      );

      if (!breakAndIncomUpdated) {
        sendErrorResponse(res, 404, "İçerik bulunamadı.");
      } else {
        sendSuccessResponse(res, breakAndIncomUpdated);
      }
    } catch (error) {
      sendErrorResponse(res, 400, error.message);
    }
  }
};

// Function to update user's profile information
const BreakAndIncomAdd = async (req, res, fields) => {
  try {
    const { username, walletAddress, email } = fields;

    // Check if username, email, and walletAddress are already taken
    const isUsernameTaken = await User.exists({
      username: username,
      _id: { $ne: req.query.id },
    });
    const isEmailTaken = await User.exists({
      email: email,
      _id: { $ne: req.query.id },
    });
    const isWalletAddressTaken = await User.exists({
      walletAddress: walletAddress,
      _id: { $ne: req.query.id },
    });

    if (isUsernameTaken) {
      sendErrorResponse(res, 400, "Bu kullanıcı adı daha önce alınmış.");
    } else if (isEmailTaken) {
      sendErrorResponse(res, 400, "Bu e-posta adresi daha önce alınmış.");
    } else if (isWalletAddressTaken) {
      sendErrorResponse(res, 400, "Bu cüzdan adresi daha önce alınmış.");
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.query.id },
        { $set: fields },
        { new: true }
      );

      if (!updatedUser) {
        sendErrorResponse(res, 404, "User not found");
      } else {
        sendSuccessResponse(res, updatedUser);
      }
    }
  } catch (error) {
    sendErrorResponse(res, 400, error.message);
  }
};

export default async function handler(req, res) {
  await notAdmin(req, res);
  await dbConnect();

  const form = formidable({
    multiples: true,
    keepExtensions: true,
    maxFileSize: 20 * 1024 * 1024, // 20 MB
    encoding: "utf-8",
    hash: "sha1",
  });

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      sendErrorResponse(res, 400, err.message);
    }

    switch (req.method) {
      case "GET":
        try {
          if (req.query.id) {
            const breakAndIncomData = await BreakAndIncom.findById({
              _id: req.query.id,
            });
            sendSuccessResponse(res, breakAndIncomData);
          } else {
            const breakAndIncomData = await BreakAndIncom.find({});
            sendSuccessResponse(res, breakAndIncomData);
          }
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "POST":
        try {
          const { title, description, slug, content, status, user } = fields;
          const thumbnailName = `${slug}-${Date.now()}`;
          const thumbnailPath = files.thumbnail[0].filepath;
          const thumbnailUrl = await cloudinary.v2.uploader.upload(
            thumbnailPath,
            {
              folder: "alarms-thumbnails",
              public_id: thumbnailName,
            }
          );
          const data = {
            title: title[0],
            description: description[0],
            slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
            content: content[0],
            status: status[0] === "true" ? true : false,
            user: user[0],
            thumbnail: thumbnailUrl.secure_url,
          };

          const newBreakAndIncom = await BreakAndIncom.create(data);
          sendSuccessResponse(res, newBreakAndIncom);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        updateBreakAndIncom(req, res, fields, files);
        break;

      case "DELETE":
        try {
          const breakAndIncomDeleted = await BreakAndIncom.deleteOne({
            _id: req.query.id,
          });

          if (!breakAndIncomDeleted) {
            sendErrorResponse(res, 400, "İçerik silinemedi.");
          } else {
            sendSuccessResponse(res, {});
          }
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      default:
        sendErrorResponse(res, 400, "Invalid request");
        break;
    }
  });
}
