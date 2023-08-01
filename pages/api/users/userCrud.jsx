import User from "@/models/Users";
import dbConnect from "@/libs/dbConnect";
import { hash } from "bcryptjs";
import cloudinary from "cloudinary";
import formidable from "formidable";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js built-in body parsing
  },
};

// Helper functions to handle HTTP responses
const sendSuccessResponse = (res, data) => {
  res.status(200).json({ success: true, data });
};

const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, message });
};

// Function to update user's password
const updatePassword = async (req, res, fields) => {
  try {
    const { password } = fields;
    const hashedPassword = await hash(password, 12);
    await User.findOneAndUpdate(
      { _id: req.query.id },
      { password: hashedPassword },
      { new: true }
    );
    sendSuccessResponse(res, {});
  } catch (error) {
    sendErrorResponse(res, 400, error.message);
  }
};

// Function to update user's profile information
const updateProfile = async (req, res, fields) => {
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

// Function to update user's avatar
const updateAvatar = async (req, res, files) => {
  try {
    const fileData = files.file;
    if (!fileData || fileData.length === 0) {
      sendErrorResponse(res, 400, "Lütfen bir dosya seçiniz.");
    } else {
      const uploadedFile = await cloudinary.v2.uploader.upload(
        fileData[0].filepath,
        {
          folder: "xcoin/avatar",
          use_filename: true,
          unique_filename: true,
        }
      );

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.query.id },
        { $set: { image: uploadedFile.secure_url } },
        { new: true }
      );

      if (!updatedUser) {
        sendErrorResponse(res, 404, "User not found");
      } else {
        sendSuccessResponse(res, []);
      }
    }
  } catch (error) {
    sendErrorResponse(res, 400, error.message);
  }
};

export default async function handler(req, res) {
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
      return;
    }

    switch (req.method) {
      case "GET":
        try {
          const users = await User.find({ _id: req.query.id }).select(
            "-password"
          );
          sendSuccessResponse(res, users);
        } catch (error) {
          sendErrorResponse(res, 400, error.message);
        }
        break;

      case "PATCH":
        if (req.query.status === "password") {
          updatePassword(req, res, fields);
        } else if (req.query.status === "profile") {
          updateProfile(req, res, fields);
        } else if (req.query.status === "avatar") {
          updateAvatar(req, res, files);
        }
        break;

      default:
        sendErrorResponse(res, 400, "Invalid request");
        break;
    }
  });
}
