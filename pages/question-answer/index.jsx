import React from "react";
import Layout from "../layout";
import { FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { useSession, getSession } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";

const QuestionAnswer = () => {
  const { data: session } = useSession();

  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    const { data } = await axios.get("/api/questions/questionsCrud");
    setQuestions(data.data);
  };

  const addQuestion = (e) => {
    e.preventDefault();

    const question = e.target.question.value;

    const data = {
      user: session.user.id,
      question,
      slug: question.substring(0, 60).trim().replace(/\s+/g, "-").toLowerCase(),
    };

    axios({
      method: "POST",
      url: "/api/questions/questionsCrud",
      data,
    })
      .then(() => {
        toast.success(
          "Sorunuz başarıyla gönderildi. Admin onayından sonra yayınlanacaktır.",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

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
    const question = questions.find((question) => question._id === id);

    const isApproval = question.approval === true ? false : true;

    const { data } = await axios.patch(`/api/questions/questionsCrud`, {
      id,
      approval: isApproval,
    });

    if (data.success) {
      setQuestions(
        questions.map((question) =>
          question._id === id ? { ...question, approval: isApproval } : question
        )
      );
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

  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Layout>
      <div className="max-w-xl mx-auto mb-14  mt-8 text-center relative z-0">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-rose-600">
          <span className="text-indigo-600">Soru</span> Cevap
        </h1>
        <p className="text-xl text-gray-500 font-medium mb-2">
          Burada sorularınızı sorabilir, cevaplarınızı verebilirsiniz.
        </p>

        <p className=" text-gray-500 font-normal text-sm">
          Sorularınız admin onayından sonra yayınlanacaktır. Soru sormadan önce
          lütfen
          <a href="http://www.google.com" className="text-indigo-600 mx-2">
            soru sorma kuralları
          </a>
          nı okuyunuz.
        </p>

        <p className="mt-2">
          {session && session.user.role === "admin" && (
            <span className="text-red-500">
              *Admin olarak giriş yaptınız. Soruları onaylayabilirsiniz.
              Onaylamak için onaylama butonuna tıklayınız.
            </span>
          )}
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full text-center px-4 sm:px-20	">
          <form onSubmit={(e) => addQuestion(e)}>
            <div className="w-full mb-4 border border-zinc-200 rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-zinc-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-zinc-800">
                <textarea
                  id="question"
                  name="question"
                  rows="4"
                  title="Lütfen bu alanı boş bırakmayın."
                  className="w-full px-0 text-sm text-zinc-900 bg-white border-0 dark:bg-zinc-800 focus:ring-0 dark:text-white dark:placeholder-zinc-400 focus-visible:ring-0 ring-0 outline-0 focus:outline-none min-h-[150px]"
                  placeholder="Sorunuzu yazın..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-zinc-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800"
                >
                  Sorunu Gönder
                </button>
              </div>
            </div>
          </form>

          <div className="content">
            {questions.map((question) => (
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
                      <Link
                        href={`/question-answer/${question.slug}`}
                        type="button"
                        title="Yorumu Sil"
                        className=" border-2 border-rose-600 text-md hover:bg-rose-600 hover:text-rose-50 duration-300 px-4 py-2 rounded-md font-light  mt-2"
                      >
                        <FiMessageSquare className="inline-block mr-2" />
                        Yanıtla
                      </Link>
                    </div>
                  </div>
                </div>

                <span className="cardShadow bg-rose-600/30 absolute z-0 rounded-b-lg blur-md -bottom-1.5 h-2 w-full left-0"></span>
              </div>
            ))}

            {questions.length === 0 && (
              <div className="flex justify-center items-center w-full h-96">
                <div className="flex flex-col justify-center items-center">
                  <FiMessageSquare className="text-rose-600 text-9xl mb-4" />
                  <p className="text-rose-600 text-2xl font-semibold">
                    Henüz soru sorulmamış.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionAnswer;
