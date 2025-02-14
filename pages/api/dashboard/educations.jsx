import dbConnect from "@/libs/dbConnect";
import cloudinary from "cloudinary";
import formidable from "formidable";
import sendErrorResponse from "@/helpers/sendErrorResponse";
import sendSuccessResponse from "@/helpers/sendSuccessResponse";
import notAdmin from "@/helpers/notAdmin";
import Educations from "@models/Educations";
import getVideoDuration from 'get-video-duration';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Update posts
const updateEducations = async (req, res, fields, files) => {
  const {
    title,
    description,
    slug,
    content,
    status,
    instructor,
    user,
    price,
    category,

  } = fields;
  let data = {
    title: title?.[0],
    description: description?.[0],
    slug: slug?.[0].trim().toLowerCase().replace(/ /g, "-"),
    content: content?.[0],
    price: price?.[0],
    category: category?.[0],
    instructor: instructor?.[0],
    status: status?.[0] === "true",
    user: user?.[0],
  };

  let imageData = {
    name: "",
    path: "",
    url: ""
  }

  let videoData = {
    name: "",
    path: "",
    url: ""
  }

  let instructorImageData = {
    name: "",
    path: "",
    url: ""
  }

  if (files.instructorImage || files.instructorImage !== undefined) {
    instructorImageData.name = `${fields.slug}-${Date.now()}`;
    instructorImageData.path = files.instructorImage?.[0].filepath;
    instructorImageData.url = await cloudinary.v2.uploader.upload(instructorImageData.path, {
      folder: "posts",
      public_id: instructorImageData.name,
      resource_type: "image",
      quality_analysis: true,
      quality: "auto:low",
    });

    data = {
      ...data,
      instructorImage: instructorImageData.url.secure_url,
    }
  }


  if (files.image || files.image !== undefined) {
    imageData.name = `${fields.slug}-${Date.now()}`;
    imageData.path = files.image?.[0].filepath;
    imageData.url = await cloudinary.v2.uploader.upload(imageData.path, {
      folder: "posts",
      public_id: imageData.name,
      resource_type: "image",
      quality_analysis: true,
      quality: "auto:low",
    });

    data = {
      ...data,
      image: imageData.url.secure_url,
    }
  }

  if (files.video || files.video !== undefined) {
    videoData.name = `${fields.slug}-${Date.now()}`;
    videoData.path = files.video?.[0].filepath;
    videoData.url = await cloudinary.v2.uploader.upload(videoData.path, {
      folder: "posts",
      public_id: videoData.name,
      resource_type: "video",
      quality_analysis: true,
      quality: "auto:low",
    });

    data = {
      ...data,
      video: videoData.url.secure_url,
    }
  }


  try {
    const educationsUpdated = await Educations.findOneAndUpdate(
      {_id: fields.id[0]},
      {$set: data},
      {new: true}
    );

    if (!educationsUpdated) {
      sendErrorResponse(res, 404, "İçerik bulunamadı.");
    } else {
      sendSuccessResponse(res, educationsUpdated);
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
    maxFileSize: 40 * 1024 * 1024, // 40 MB
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
          if (req.query.id) {
            const educations = await Educations.findById(req.query.id);
            sendSuccessResponse(res, educations);
          } else {
            const educations = await Educations.find({}).sort({
              createdAt: "desc",
            });
            sendSuccessResponse(res, educations);
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
            instructor,
            user,
            price,
            category,
          } = fields;

          const imageName = `${slug[0]}-${Date.now()}`;
          const videoName = `${slug[0]}-${Date.now()}`;
          const instructorImageName = `${slug[0]}-${Date.now()}`;


          const imagePath = files.image[0].filepath;
          const videoPath = files.video[0].filepath;
          const videoDuration = Math.round(await getVideoDuration(videoPath));
          const instructorImagePath = files.instructorImage[0].filepath;


          console.log("imagePath", imagePath)
          console.log("videoPath", videoPath)
          console.log("videoDuration", videoDuration)
          console.log("instructorImagePath", instructorImagePath)


          const imageUrl = await cloudinary.v2.uploader.upload(
            imagePath,
            {
              folder: "educationsImage",
              public_id: imageName,
              resource_type: "image",
            }
          );

          const videoUrl = await cloudinary.v2.uploader.upload(
            videoPath,
            {
              folder: "educationsVideo",
              public_id: videoName,
              resource_type: "video",
            }
          );

          const instructorImageUrl = await cloudinary.v2.uploader.upload(
            instructorImagePath,
            {
              folder: "educationsInstructorImage",
              public_id: instructorImageName,
              resource_type: "image",
            }
          );

          const data = {
            title: title[0],
            description: description[0],
            slug: slug[0].trim().toLowerCase().replace(/ /g, "-"),
            content: content[0],
            status: status[0] === "true",
            user: user[0],
            duration: videoDuration,
            category: category[0],
            instructor: instructor[0],
            image: imageUrl.secure_url,
            video: videoUrl.secure_url,
            instructorImage: instructorImageUrl.secure_url,
            price: price[0],
          };

          console.log("data", data)

          const newEducations = await Educations.create(data);
          sendSuccessResponse(res, newEducations);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        await updateEducations(req, res, fields, files);
        break;
      case "DELETE":
        try {
          const breakAndIncomDeleted = await Educations.deleteOne({
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