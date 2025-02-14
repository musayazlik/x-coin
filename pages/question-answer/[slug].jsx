import React from "react";
import Layout from "@/layouts/homeLayout";
import { FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import header from "@/components/header";

const QuestionAnswer = ({ questionData }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [question, setQuestion] = React.useState(questionData.data);

  const addAnswer = (e) => {
    e.preventDefault();

    const answer = e.target.answer.value;

    const data = {
      questionId: question._id,
      user: {
        id: session.user.id,
        name: session.user.name || null,
        surname: session.user.surname || null,
        image: session.user.image || null,
      },
      answer,
      status: "addAnswer",
    };

    axios({
      method: "patch",
      url: "/api/questions/questionsCrud",
      data,
    })
      .then((res) => {
        toast.success("Cevabınız başarıyla eklendi.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setQuestion({
          ...question,
          answers: [...question.answers, res.data.data],
        });

        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const approveQuestion = async (id) => {
    const isApproval = question.approval === true ? false : true;

    const { data } = await axios.patch(`/api/questions/questionsCrud`, {
      id: question._id,
      approval: isApproval,
    });

    if (data.success) {
      setQuestion({ ...question, approval: isApproval });
      toast.success("Soru başarıyla onay durumu değiştirildi", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Soru onaylanırken bir hata oluştu.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deletedAnswer = (questionId, answerId) => {
    const data = {
      questionId,
      answerId,
    };

    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu cevabı silmek istediğinizden emin misiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Evet, sil!",
      cancelButtonText: "Hayır, vazgeç!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios({
          method: "DELETE",
          url:
            "/api/questions/questionsCrud?questionId=" +
            questionId +
            "&answerId=" +
            answerId +
            "",
        })
          .then(() => {
            const newAnswers = question.answers.filter(
              (answer) => answer._id !== answerId
            );

            setQuestion({ ...question, answers: newAnswers });
            toast.success("Yorum başarıyla silindi.", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          })
          .catch((err) => {
            toast.error(err.response.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
      }
    });
  };

  return (
    <Layout>
      <div className=" sm:px-20 mx-auto mb-8  mt-8 text-center relative z-0">
        <div className="card bg-stone-900  text-white/70 rounded-lg py-5 px-6 relative mb-8 w-full ">
          <div className="flex gap-4 relative z-10 flex-grow ">
            <div className="flex-shrink-0">
              <img
                src={question?.user?.image || "/robot.gif"}
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-zinc-500"
              />
            </div>
            <div className="flex flex-col justify-between items-start flex-1 gap-6 ">
              <div className=" w-full relative">
                {session && session.user.role === "admin" && (
                  <button
                    onClick={() => approveQuestion(question._id)}
                    className="absolute right-0 top-0 bg-rose-600/50 hover:bg-rose-600/70 duration-300 rounded-md px-2 py-1 text-xs font-light"
                  >
                    {question?.approval === true ? "Onaylandı" : "Onayla"}
                  </button>
                )}

                <h2 className="font-medium text-md text-start mb-2">
                  {question?.user?.name} {question?.user?.surname}
                </h2>
                <p className="text-start font-light text-base leading-6">
                  {question?.question}
                </p>
              </div>
            </div>
          </div>

          <span className="cardShadow bg-zinc-900/30 absolute z-0 rounded-b-lg blur-md -bottom-1.5 h-2 w-full left-0"></span>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full text-center sm:px-20	">
          <form onSubmit={(e) => addAnswer(e)}>
            <div className="w-full mb-4 border border-zinc-200 rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-zinc-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-zinc-800">
                <textarea
                  id="answer"
                  name="answer"
                  rows="4"
                  title="Lütfen bu alanı boş bırakmayın."
                  className="w-full px-0 text-sm text-zinc-900 bg-white border-0 dark:bg-zinc-800 focus:ring-0 dark:text-white dark:placeholder-zinc-400 focus-visible:ring-0 ring-0 outline-0 focus:outline-none min-h-[120px]"
                  placeholder="Bu soruya cevap vermek için bu alana yazınız.."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-zinc-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800 border border-indigo-800"
                >
                  Cevabı Gönder
                </button>
              </div>
            </div>
          </form>

          <div className="content">
            {/* {question.map((question) => (
              <div
                key={question._id}
                className="card bg-zinc-900 border-b-4 border-0 border-rose-600  text-white/70 rounded-lg py-5 px-6 relative mb-8  "
              >
                <div className="flex gap-4 relative z-10 flex-grow ">
                  <div className="flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?img=68"
                      alt="avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start flex-1 gap-6 ">
                    <div className=" w-full relative">
                      {session && session.user.role === "admin" && (
                        <button
                          onClick={() => approveQuestion(question._id)}
                          className="absolute right-0 top-0 bg-rose-600/50 hover:bg-rose-600/70 duration-300 rounded-md px-2 py-1 text-xs font-light"
                        >
                          {question.approval === true ? "Onaylandı" : "Onayla"}
                        </button>
                      )}

                      <h2 className="font-semibold text-lg text-start">
                        {question.user.name} {question.user.surname}
                      </h2>
                      <p className="text-start font-light leading-6">
                        {question.question.length >= 200
                          ? question.question.slice(0, 200) + "..."
                          : question.question}
                      </p>
                    </div>
                    <div className="flex justify-end w-full">
                      <button
                        type="button"
                        className=" border-2 border-rose-600 text-md hover:bg-rose-600 hover:text-rose-50 duration-300 px-4 py-2 rounded-md font-light  mt-2"
                      >
                        <FiMessageSquare className="inline-block mr-2" />
                        Yanıtla
                      </button>
                    </div>
                  </div>
                </div>

                <span className="cardShadow bg-rose-600/30 absolute z-0 rounded-b-lg blur-md -bottom-1.5 h-2 w-full left-0"></span>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      <div className="sm:px-20 mx-auto  text-center">
        {question?.answers?.map((item) => (
          <div
            key={item._id}
            className="card bg-zinc-900 border-2 border-zinc-700/50  text-white/70 rounded-lg py-3 px-3 sm:px-6 relative mb-4 w-full "
          >
            <div className="flex gap-4 relative z-10 flex-grow ">
              <div className="flex-shrink-0">
                <img
                  src={item.user.image || "/robot.gif"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-zinc-400/50"
                />
              </div>
              <div className="flex flex-col justify-between items-start flex-1 gap-6 ">
                <div className=" w-full relative">
                  <h2 className="font-semibold tracking-tight text-sm sm:text-lg text-start">
                    {item?.user?.name} {item?.user?.surname}
                  </h2>
                  <p className="text-start text-sm sm:text-base font-light leading-6">
                    {item?.answer}
                  </p>

                  <div className=" flex justify-start mt-3">
                    {(item.user._id === session?.user?._id ||
                      session?.user?.role === "admin") && (
                      <button
                        onClick={() => deletedAnswer(question._id, item._id)}
                        className="  bg-red-600 hover:bg-red-600/70 duration-300 rounded-md gap-1 px-2 py-1  flex justify-center items-center text-sm font-normal"
                      >
                        <AiOutlineDelete
                          className="inline-block "
                          fontSize={18}
                        />
                        Sil
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {question?.answers.length === 0 && (
          <div className="flex justify-center items-center w-full h-96">
            <div className="flex flex-col justify-center items-center">
              <FiMessageSquare className="text-rose-600 text-9xl mb-4" />
              <p className="text-rose-600 text-2xl font-semibold">
                Henüz bir cevap yok.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuestionAnswer;

export async function getServerSideProps(context) {
  const { data } = await axios({
    method: "GET",
    url: "/api/questions/questionsCrud?slug=" + context.query.slug,
    headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
  });

  return {
    props: {
      questionData: data,
    },
  };
}
