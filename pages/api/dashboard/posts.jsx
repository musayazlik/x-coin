import dbConnect from "@/libs/dbConnect";
import Posts from "@/models/Posts";
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

// Update posts
const updatePosts = async (req, res, fields, files) => {
  const {
    title,
    description,
    slug,
    content,
    status,
    user,

    category,
    subCategory,
    iframeText
  } = fields;
  let data = {
    title: title?.[0],
    description: description?.[0],
    slug: slug?.[0].trim().toLowerCase().replace(/ /g, "-"),
    content: content?.[0],
    category: category?.[0],
    subCategory: subCategory?.[0],
    status: status?.[0] === "true",
    user: user?.[0],
    iframeText: iframeText?.[0],
  };

  if (files.image || files.image !== undefined) {
    const imageName = `${fields.slug}-${Date.now()}`;
    const imagePath = files.image?.[0].filepath;
    const imageUrl = await cloudinary.v2.uploader.upload(imagePath, {
      folder: "posts",
      public_id: imageName,
    });

    data = {
      ...data,
      image: imageUrl.secure_url,
    };

    try {
      const postsUpdated = await Posts.findOneAndUpdate(
        {_id: fields.id[0]},
        {$set: data},
        {new: true}
      );

      if (!postsUpdated) {
        sendErrorResponse(res, 404, "İçerik bulunamadı.");
      } else {
        sendSuccessResponse(res, postsUpdated);
      }
    } catch (error) {
      sendErrorResponse(res, 400, error.message);
    }
  } else {
    try {
      const {title, description, slug, content, status, user} = fields;
      const data = {
        title: title[0],
        description: description[0],
        slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
        content: content[0],
        status: status[0] === "true",
        user: user[0],
      };

      const postsUpdated = await Posts.findOneAndUpdate(
        {_id: fields.id[0]},
        {$set: data},
        {new: true}
      );

      if (!postsUpdated) {
        sendErrorResponse(res, 404, "İçerik bulunamadı.");
      } else {
        sendSuccessResponse(res, postsUpdated);
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

  await form.parse(req, async (err, fields, files) => {
    if (err) {
      sendErrorResponse(res, 400, err.message);
    }

    switch (req.method) {
      case "GET":
        try {
          if (req.query.category) {
            const breakAndIncomData = await Posts.find({
              category: req.query.category,
            }).populate("user").select("-password -walletAddress -email")

            sendSuccessResponse(res, breakAndIncomData);
          } else if (req.query.id) {

            const breakAndIncomData = await Posts.findById(req.query.id).populate("user", "-password -walletAddress -email ")
            sendSuccessResponse(res, breakAndIncomData);
          } else {
            const breakAndIncomData = await Posts.find({}).populate("user", "-password -walletAddress -email ")
            sendSuccessResponse(res, breakAndIncomData);
          }
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "POST":
        try {
          const {
            title,
            description,
            slug,
            content,
            status,
            user,

            category,
            subCategory,
            iframeText,
          } = fields;

          const imageName = `${slug[0]}-${Date.now()}`;


          const imagePath = files.image[0].filepath;


          const imageUrl = await cloudinary.v2.uploader.upload(
            imagePath,
            {
              folder: "posts",
              public_id: imageName,
            }
          );
          const data = {
            title: title[0],
            description: description[0],
            slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
            content: content[0],
            status: status[0] === "true",
            user: user[0],
            category: category[0],
            subCategory: subCategory[0],
            image: imageUrl.secure_url,
            iframeText: iframeText[0],
          };

          const newPosts = await Posts.create(data);
          sendSuccessResponse(res, newPosts);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        await updatePosts(req, res, fields, files);
        break;

      case "DELETE":
        try {
          const breakAndIncomDeleted = await Posts.deleteOne({
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