import Post from '@/models/Posts'
import dbConnect from '@/libs/dbConnect'

const getPosts = async (req, res) => {
  try {
    if (req.query.id) {
      const post = await Post.findById(req.query.id)
      res.status(200).json({success: true, data: post})
    } else if (req.query.category && req.query.page) {
      const post = await Post.find({
        category: req.query.category
      }).populate('user', 'name email image role').select('-__v').limit(16).skip((req.query.page - 1) * 16)

      res.status(200).json({success: true, data: post})
    } else if (
      req.query.slug
    ) {
      const post = await Post.findOne({
        slug: req.query.slug
      }).populate('user', 'name email image role').select('-__v')

      console.log(post)

      res.status(200).json({success: true, data: post})
    } else {
      const posts = await Post.find({})
      res.status(200).json({success: true, data: posts})
    }
  } catch (error) {
    res.status(400).json({success: false})
  }
}

export default function handler(req, res) {
  dbConnect()
  switch (req.method) {
    case 'GET':
      getPosts(req, res,)
      break
    default:
      res.status(400).json({success: false})
      break
  }
}