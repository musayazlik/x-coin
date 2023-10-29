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

// Function to update user's password
const updatePosts = async (req, res, fields, files) => {
  const {
    title,
    description,
    slug,
    content,
    status,
    user,
    category,
    subCategory
  } = fields;
  let data = {
    title: title?.[0],
    description: description?.[0],
    slug: slug?.[0].trim().toLowerCase().replace(/ /g, "-"),
    content: content?.[0],
    category: category?.[0],
    subCategory: subCategory?.[0],
    status: status?.[0] === "true" ? true : false,
    user: user?.[0],
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
        status: status[0] === "true" ? true : false,
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

// Function to update user's profile information
/*const PostsAdd = async (req, res, fields) => {
  try {
    const {username, walletAddress, email} = fields;

    // Check if username, email, and walletAddress are already taken
    const isUsernameTaken = await User.exists({
      username: username,
      _id: {$ne: req.query.id},
    });
    const isEmailTaken = await User.exists({
      email: email,
      _id: {$ne: req.query.id},
    });
    const isWalletAddressTaken = await User.exists({
      walletAddress: walletAddress,
      _id: {$ne: req.query.id},
    });

    if (isUsernameTaken) {
      sendErrorResponse(res, 400, "Bu kullanıcı adı daha önce alınmış.");
    } else if (isEmailTaken) {
      sendErrorResponse(res, 400, "Bu e-posta adresi daha önce alınmış.");
    } else if (isWalletAddressTaken) {
      sendErrorResponse(res, 400, "Bu cüzdan adresi daha önce alınmış.");
    } else {
      const updatedUser = await User.findOneAndUpdate(
        {_id: req.query.id},
        {$set: fields},
        {new: true}
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
};*/

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
          if (req.query.category) {
            const breakAndIncomData = await Posts.find({
              category: req.query.category,
            }).populate("user").select("-password -walletAddress -email")

            console.log(Posts.populate("user", "name"))
            sendSuccessResponse(res, breakAndIncomData);
          } else if (req.query.id) {

            console.log("fgfdifgldfkggfjkldgjkl")

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
          } = fields;

          const imageName = `${slug[0]}-${Date.now()}`;

          console.log(files)
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
            status: status[0] === "true" ? true : false,
            user: user[0],
            category: category[0],
            subCategory: subCategory[0],
            image: imageUrl.secure_url,
          };

          const newPosts = await Posts.create(data);
          sendSuccessResponse(res, newPosts);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        updatePosts(req, res, fields, files);
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