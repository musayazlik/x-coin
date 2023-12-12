import Educations from "@models/Educations";
import dbConnect from '@/libs/dbConnect';

export default async function handler(req, res) {
  await dbConnect();
  const {method} = req;
  switch (method) {
    case 'GET':
      try {
        const educations = await Educations.find({}).sort({createdAt: -1}).select('-__v -updatedAt -status -video ');

        if (req.query.limit) {
          const limit = parseInt(req.query.limit);
          const data = educations.slice(0, limit);
          return res.status(200).json({success: true, data});
        }
        const filterAndSlice = (category) => educations
          .filter(education => education.category === category)
          .slice(-6)

        const data = {
          freeTrainings: filterAndSlice('free-trainings'),
          paidTrainings: filterAndSlice('paid-trainings'),
          liveTrainings: filterAndSlice('live-trainings'),
        };

        res.status(200).json({success: true, data});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default:
      res.status(400).json({mesages: "Method not allowed"});
      break;
  }


}