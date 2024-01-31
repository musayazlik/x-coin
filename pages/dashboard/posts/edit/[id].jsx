import React, { useEffect } from "react";
import Layout from "../../../../layouts/dashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { lang } from "@lang/langT";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import categoriesList from "@/libs/catagoriesList";
import { RiImageAddFill } from "react-icons/ri";

const PostEdit = ({ resData }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = lang(router.locale);

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text, Image, Dropcursor],
    placeholder: "Blog içeriğini buraya yazınız...",
    editorProps: {
      attributes: {
        class:
          " w-full overflow-auto prose-p:text-16-30  border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500 min-h-[400px]",
      },
    },
  });
  const blogAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const subCategory = e.target.subCategory.value;
    const status = e.target.status.value;
    const content = editor.getHTML();

    const data = {
      id: resData._id,
      title,
      description,
      content,
      status: status === "true" ? true : false,
      user: session.user.id,
      category,
      subCategory,
    };

    axios({
      method: "PATCH",
      url: "/api/dashboard/posts",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Başarılı",
          text: "İçerik başarıyla eklendi!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/dashboard/posts");
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
          Bu sayfa analiz düzenleme sayfasıdır.
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
              <label className="text-white font-semibold">Kısa Metin</label>
              <input
                type="text"
                name="description"
                id="description"
                maxLength={160}
                defaultValue={resData.description}
                placeholder="İçerik için kısa metin giriniz... (Max: 160 karakter) "
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
                <option selected={true} disabled>
                  İçerik kategorisini seçiniz...
                </option>
                {categoriesList.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    selected={resData.category === item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Alt Kategori</label>
              <select
                name="subCategory"
                id="subCategory"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              >
                <option selected={true} disabled>
                  İçerik kategorisini seçiniz...
                </option>
                <option
                  value="short-term"
                  selected={resData.subCategory === "short-term"}
                >
                  Short Term (Kısa Vadeli)
                </option>
                <option
                  value="subcoin-mix"
                  selected={resData.subCategory === "subcoin-mix"}
                >
                  Long Term (Uzun Vadeli)
                </option>
                <option
                  value="support-resistance"
                  selected={resData.subCategory === "support-resistance"}
                >
                  Support - Resistance (Destek - Direnç)
                </option>
                <option
                  value="major-factors"
                  selected={resData.subCategory === "major-factors"}
                >
                  Major Factors (Ana Faktörler)
                </option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">İçerik Metni</label>
              <div
                onClick={addImage}
                className="bg-green-500 cursor-pointer mt-2 inline-flex border-2 hover:bg-green-600 duration-300 border-green-700 flex-shrink-0 text-green-800 font-semibold rounded-md px-4  py-3  relative z-100"
              >
                <RiImageAddFill className="inline-block mr-2" fontSize={24} />
                Analiz Resmi Ekle
              </div>
              <div className="w-full">
                <EditorContent editor={editor} />
              </div>
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
    `/api/dashboard/posts?id=${context.params.id}`,
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
