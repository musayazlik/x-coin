import Educations from "@models/Educations";
import dbConnect from '@/libs/dbConnect'
import isAuth from "@helpers/isAuth";


const getEducations = async (session, res, req) => {
  try {

    if (req.query.category) {
      console.log("Girdi")
      const educations = await Educations.find({
        category: req.query.category
      }).sort({createdAt: -1});
      res.status(200).json({success: true, data: educations});
    }

    console.log("Girdi")


    const educations = await Educations.find({}).sort({createdAt: -1});
    res.status(200).json({success: true, data: educations});

  } catch (error) {
    return res.status(400).json({success: false, message: error.message});
  }
}


export default async function handler(req, res) {
  await dbConnect()
  const session = await isAuth(req, res)


  const {method} = req;
  switch (method) {
    case "GET":
      try {

        await getEducations(req, res, session)
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default:
      res.status(400).json({success: false});
      break;
  }

}

