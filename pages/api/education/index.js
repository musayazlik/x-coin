import Educations from "@models/Educations";
import dbConnect from '@/libs/dbConnect'
import isAuth from "@helpers/isAuth";
import Orders from "@models/Orders";


const getEducations = async (session, res, req) => {
  try {

    if (req?.query?.category) {
      const educations = await Educations.find({
        category: req?.query?.category,
        status: true,
      }).sort({createdAt: -1})

      const filterBySubCategory = subCategory => educations.filter(education => education.subCategory === subCategory);

      const data = {
        freeTrainings: filterBySubCategory('free-trainings'),
        paidTrainings: filterBySubCategory('paid-trainings'),
        liveTrainings: filterBySubCategory('live-trainings'),
      };


      res.status(200).json({success: true, data: data});

    } else if (req?.query?.slug) {
      const education = await Educations.findOne({slug: req?.query?.slug}).where({
        status: true,
      })

      const orders = await Orders.find({
        user: session?.user?._id,
        education: education?._id
      }).where({
        status: true,
      })

      if (orders.length > 0) {
        res.status(200).json({success: true, data: education});
      } else {
        res.status(200).json({
          success: false, data: {
            name: education?.name,
            slug: education?.slug,
            instructor: education?.instructor,

            description: education?.description,
            category: education?.category,
            price: education?.price,
            status: education?.status,
            createdAt: education?.createdAt,
            updatedAt: education?.updatedAt,
            image: education?.image,
            video: education?.video,

          }
        });
      }


    } else {
      const educations = await Educations.find().sort({createdAt: -1}).where({
        status: true,
      })
      res.status(200).json({success: true, data: educations});
    }
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

        await getEducations(session, res, req)
      } catch (error) {
        res.status(400).json({success: false, message: error.message});
      }
      break;
    default:
      res.status(400).json({success: false, message: "Invalid method"});
      break;
  }

}

