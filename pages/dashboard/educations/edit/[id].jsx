import React, { useEffect } from "react";
import Layout from "../../../../layouts/dashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { lang } from "@lang/langT";

const PostEdit = ({ resData }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = lang(router.locale);

  const editor = useEditor({
    extensions: [StarterKit],
    placeholder: "Blog içeriğini buraya yazınız...",
    editorProps: {
      attributes: {
        class:
          "prose prose-p:font-inter prose-p:text-16-30 prose-p:mb-6 border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500 min-h-[400px]",
      },
    },
  });

  const blogAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const slug = e.target.slug.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const image = e.target.image.files[0];
    const video = e.target.video.files[0];
    const status = e.target.status.value;
    const instructor = e.target.instructor.value;
    const instructorImage = e.target.instructorImage.files[0];
    const content = editor.getHTML();

    const data = {
      id: resData._id,
      title,
      description,
      slug,
      instructor,
      instructorImage,
      price,
      image,
      video,
      content,
      status: status === "true" ? true : false,
      user: session.user.id,
      category,
    };

    axios({
      method: "PATCH",
      url: "/api/dashboard/educations",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Başarılı",
          text: "İçerik başarıyla güncellendi.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/dashboard/educations");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Bir hata oluştu!",
          footer: "<p>" + err.message + "</p>",
        });
      });
  };

  useEffect(() => {
    editor?.commands.setContent(resData.content);
  }, [editor]);

  return (
    <Layout>
      <div className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-custom_pink">
        <h1 className=" px-2 text-3xl font-bold text-white">İçerik Ekle</h1>
        <p className=" px-2 text-base font-normal mt-2 text-white">
          Bu sayfa kırılımlar ve uyumsuzluklar için içerik ekleme sayfasıdır.
        </p>

        <form
          className="contentArea px-2"
          encType="multipart/form-data"
          onSubmit={(e) => {
            blogAdd(e);
          }}
        >
          <div className="flex flex-col w-full md:w-1/2 mt-6">
            <div className="flex flex-col">
              <label className="text-white font-semibold">Başlık</label>
              <input
                type="text"
                name="title"
                id="title"
                maxLength={60}
                defaultValue={resData.title}
                placeholder="İçeriğin başlığını giriniz... (Max: 60 karakter) "
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Eğitmen</label>
              <input
                type="text"
                name="instructor"
                id="instructor"
                defaultValue={resData?.instructor}
                maxLength={60}
                placeholder="İçeriğin eğitmenini giriniz... (Max: 60 karakter)"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Eğitmen Resmi</label>
              <input
                type="file"
                name="instructorImage"
                id="instructorImage"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Kısa Metin</label>
              <input
                type="text"
                name="description"
                id="description"
                maxLength={160}
                defaultValue={resData?.description}
                placeholder="İçerik için kısa metin giriniz... (Max: 160 karakter) "
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Kısa Url</label>
              <input
                type="text"
                name="slug"
                id="slug"
                defaultValue={resData?.slug}
                placeholder="İçerik için kısa url giriniz..."
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Fiyat</label>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={resData?.price}
                placeholder="İçerik için fiyat giriniz. (Ücretsiz olacak ise 0 giriniz...)"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Kategori</label>
              <select
                name="category"
                id="category"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              >
                <option disabled>İçerik kategorisini seçiniz...</option>
                <option
                  value="free-trainings"
                  selected={resData.category === "free-trainings"}
                >
                  Free Trainings (Ücretsiz Eğitimler)
                </option>

                <option
                  value="paid-trainings"
                  selected={resData.category === "paid-trainings"}
                >
                  Paid Trainings (Ücretli Eğitimler)
                </option>

                <option
                  value="live-trainings"
                  selected={resData.category === "live-trainings"}
                >
                  Live Trainings (Canlı Eğitimler)
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Küçük Resmi</label>
              <Image
                src={resData?.image}
                alt={"Post Image"}
                width={50}
                height={50}
                className={
                  "border-4" +
                  " border-gray-600 rounded-lg object-cover min-w-[50px]" +
                  " min-h-[50px]"
                }
              />
              <input
                type="file"
                name="image"
                id="image"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Video</label>

              <video
                src={resData.video}
                controls
                className={
                  "w-40 h-40 object-cover border-gray-600 border-4" +
                  " rounded-lg min-w-[50px] min-h-[50px]"
                }
              ></video>
              <input
                type="file"
                name="video"
                id="video"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">İçerik Metni</label>
              <EditorContent editor={editor} />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Durum</label>
              <select
                name="status"
                id="status"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              >
                <option defaultValue="" disabled>
                  İçerik durumunu seçiniz...
                </option>
                <option value={true} selected={resData.status === true}>
                  Yayınla
                </option>
                <option value={false} selected={resData.status === false}>
                  Taslağa Al
                </option>
              </select>
            </div>
          </div>
          <div className="button mt-8 flex gap-6 items-center my-4">
            <button
              type="submit"
              className="bg-custom_green border-2 hover:bg-green-600 duration-300 border-green-700 flex-shrink-0 text-green-800 font-semibold rounded-md px-4  py-3  relative z-100"
            >
              Kaydet
            </button>
            <Link href="/admin/blogs" className="text-red-700">
              İptal Et
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;

  const { data } = await axios.get(
    `/api/dashboard/educations?id=${context.params.id}`,
    {
      headers: {
        cookie: cookie,
      },
    }
  );

  return {
    props: {
      resData: data.data,
    },
  };
}
