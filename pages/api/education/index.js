import dbConnect from '@/libs/dbConnect'
import isAuth from "@helpers/isAuth";
import Order from "@models/Orders";
import Education from "@models/Educations";


const getEducations = async (session, res, req) => {
  const isPaymentProduct = await Order.find({user: session.user.id,})
  const hasUserPaidForProduct = isPaymentProduct.some((item) => item.slug === req.query.slug)

  try {
    if (req.query.slug) {
      const education = await Education.findOne({
        slug: req.query.slug,
        status: true,
      }).select('-__v');
      if (education) {
        // Eğitim bulundu ve aktif durumdaysa
        if (hasUserPaidForProduct) {
          return res.status(200).json({success: true, data: education});
        } else {
          // Eğitim bulundu, ancak kullanıcı ödeme yapmamışsa
          education.video = null;
          return res.status(200).json({
            success: true,
            data: education,
          });
        }
      } else {
        // Eğitim bulunamadı
        return res.status(404).json({
          success: false,
          message: 'Eğitim bulunamadı'
        });
      }
    }

    const isAllEducation = await Education.find({status: true}).select('-__v');

    const educations = isAllEducation.map((item) => {
      if (hasUserPaidForProduct) {
        return item
      } else {
        item.video = null;
        return item
      }
    })

    const educationsCategoryList = {
      "freeTrainings": [],
      "paidTrainings": [],
      "liveTrainings": [],
    }

    educations.forEach((item) => {
      if (item.category === "free-trainings") {
        return educationsCategoryList.freeTrainings.push(item)
      } else {
        return educationsCategoryList.paidTrainings.push(item)
      }
      return educationsCategoryList.liveTrainings.push(item)
    })


    return res.status(200).json({success: true, data: educationsCategoryList});
  } catch (error) {

    return res.status(500).json({success: false, message: error.message});
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

