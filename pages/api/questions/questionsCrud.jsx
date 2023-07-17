import dbConnect from "@/libs/dbConnect";
import Question from "@/models/Questions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  await dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        let questions;

        if (req.query.slug) {
          questions = await Question.findOne({ slug: req.query.slug })
            .populate("user", "name surname")
            .sort({ createdAt: -1 })
            .select("-__v");

          const answers = questions.answers.filter(
            (answer) => answer.deletedStatus === false
          );

          questions.answers = answers;

          res.status(200).json({ success: true, data: questions });
          return;
        }

        if (session && session.user.role === "admin") {
          questions = await Question.find({})
            .populate("user", "name surname")
            .sort({ createdAt: -1 })
            .select("-__v");
          res.status(200).json({ success: true, data: questions });

          return;
        } else {
          questions = await Question.find({})
            .populate("user", "name surname")
            .sort({ createdAt: -1 })
            .where({ approval: true })
            .select("-__v");
          res.status(200).json({ success: true, data: questions });

          return;
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const question = await Question.create(req.body);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "PATCH":
      try {
        if (!session) {
          res.status(401).json({ success: false, message: "Unauthorized" });
          return;
        }
        const { user, questionId, answer, status } = req.body;
        if (status === "addAnswer") {
          const answerAdd = await Question.findOneAndUpdate(
            { _id: questionId },
            { $push: { answers: { user: user, answer: answer } } },
            { new: true }
          );

          const addedAnswer = answerAdd.answers[answerAdd.answers.length - 1];
          res.status(200).json({ success: true, data: addedAnswer });
          return;
        }

        if (session.user.role !== "admin") {
          res.status(401).json({ success: false, message: "Unauthorized" });
          return;
        } else {
          const { id, approval } = req.body;
          const question = await Question.findOneAndUpdate(
            { _id: id },
            { approval: approval },
            { new: true }
          );

          res.status(200).json({ success: true, data: question });
          return;
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "DELETE":
      try {
        console.log(req.query);
        const { questionId, answerId } = req.query;

        const deletedAnswer = await Question.findOneAndUpdate(
          { _id: questionId },
          { $set: { "answers.$[elem].deletedStatus": true } },
          { arrayFilters: [{ "elem._id": answerId }], new: true }
        );

        res.status(200).json({ success: true, data: answerId });
        return;
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Method not allowed" });
      break;
  }
}
