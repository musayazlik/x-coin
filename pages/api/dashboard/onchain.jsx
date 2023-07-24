import dbConnect from "@/libs/dbConnect";
import OnChain from "@/models/OnChain";
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
const updateOnChain = async (req, res, fields, files) => {
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
      folder: "on-chain-thumbnails",
      public_id: thumbnailName,
    });

    data = {
      ...data,
      thumbnail: thumbnailUrl.secure_url,
    };

    try {
      const onChainUpdated = await OnChain.findOneAndUpdate(
        { _id: fields.id[0] },
        { $set: data },
        { new: true }
      );

      if (!onChainUpdated) {
        sendErrorResponse(res, 404, "İçerik bulunamadı.");
      } else {
        sendSuccessResponse(res, onChainUpdated);
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

      const breakAndIncomUpdated = await OnChain.findOneAndUpdate(
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
      console.log(err);
    }

    switch (req.method) {
      case "GET":
        try {
          if (req.query.id) {
            const onChainData = await OnChain.findById({
              _id: req.query.id,
            });
            sendSuccessResponse(res, onChainData);
          } else {
            const onChainData = await OnChain.find({});
            sendSuccessResponse(res, onChainData);
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
              folder: "on-chain-thumbnails",
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

          const newOnChain = await OnChain.create(data);
          sendSuccessResponse(res, newOnChain);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        updateOnChain(req, res, fields, files);
        break;

      case "DELETE":
        try {
          const breakAndIncomDeleted = await OnChain.deleteOne({
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
