import Post from "@/models/Posts";
import dbConnect from "@/libs/dbConnect";

const getPosts = async (req, res) => {
  const limit = 6;
  try {
    if (req.query.id) {
      const post = await Post.findById(req.query.id);
      res.status(200).json({ success: true, data: post });
    } else if (req.query.category && req.query.page && req.query.subCategory) {
      const post = await Post.find({
        category: req.query.category,
        subCategory: req.query.subCategory,
      })
        .populate("user", "name email image role")
        .select("-__v")
        .limit(limit)
        .skip((Number(req.query.page) - 1) * limit)
        .sort({ createdAt: -1 });

      res.status(200).json({ success: true, data: post });
    } else if (req.query.category && req.query.page) {
      const post = await Post.find({
        category: req.query.category,
      })
        .populate("user", "name email image role")
        .select("-__v")
        .limit(limit)
        .skip((Number(req.query.page) - 1) * limit)
        .sort({ createdAt: -1 });

      res.status(200).json({ success: true, data: post });
    } else if (req.query.slug) {
      const post = await Post.findOne({
        slug: req.query.slug,
      })
        .populate("user", "name email image role")
        .select("-__v");

      res.status(200).json({ success: true, data: post });
    } else {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      await getPosts(req, res);
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
