import React from "react";
import Layout from "../../../../layouts/dashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {toast} from "react-toastify";
import {lang} from "@lang/langT";
import {Tooltip} from "@nextui-org/react";
import {RiInformationFill} from "react-icons/ri";
import IframeContent from "@/components/IframeContent";


const PostAdd = () => {
  const router = useRouter();
  const {data: session} = useSession();
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
    const homeCategory = e.target.homeCategory.value;
    const category = e.target.category.value;
    const subCategory = e.target.subCategory.value;
    const image = e.target.image.files[0];
    const iframeText = e.target.iframeText.value;
    const status = e.target.status.value;
    const content = editor.getHTML();


    if (!title || !description || !slug || !image || !content || !category || !subCategory || !status || !homeCategory) {
      toast.error("Lütfen tüm alanları doldurunuz!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
      return;
    }

    const data = {
      title,
      description,
      slug,
      image,
      content,
      status: status === "true",
      user: session.user.id,
      homeCategory,
      category,
      subCategory,
      iframeText
    };

    axios({
      method: "post",
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

  return (
    <Layout>
      <div
        className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-custom_pink">
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
                placeholder="İçerik için kısa url giriniz..."
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">Ana Kategori</label>
              <select
                name="homeCategory"
                id="homeCategory"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              >
                <option selected={true} disabled>
                  İçerik Ana kategorisini seçiniz...
                </option>
                <option value="analysis">{t.analysis}</option>
                <option value="education">{t.education}</option>
              </select>
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
                <option value="total-mc">Total MC</option>
                <option value="subcoin-mix">Subcoin Mix</option>
                <option value="sub-indices">Sub Indices</option>
                <option value="on-chain">On Chain</option>
                <option value="sp500">Sp500</option>
                <option value="nasdaq">Nasdaq</option>
                <option value="Dax">Dax</option>
                <option value="dxy">Dxy</option>
                <option value="eur-usd">Eur/Usd</option>
                <option value="usd-jpy">Usd/Jpy</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="oil">Oil</option>
                <option value="natqas">Natqas</option>
                <option value="stock-market">Stock Market</option>
                <option value="parities">Parities</option>
                <option value="enerqy-market">Energy Market</option>
                <option value="metal-market">Metal Market</option>
                <option value="commodities">Commodities</option>
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
                <option value="short-term">
                  Short Term (Kısa Vadeli)
                </option>
                <option value="long-term">
                  Long Term (Uzun Vadeli)
                </option>
                <option value="support-resistance">
                  Support - Resistance (Destek - Direnç)
                </option>
                <option value="major-factors">
                  Major Factors (Ana Faktörler)
                </option>
              </select>
            </div>


            <div className="flex flex-col">
              <label className="text-white font-semibold">Küçük Resmi</label>
              <input
                type="file"
                name="image"
                id="image"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">İçerik Metni</label>
              <EditorContent editor={editor}/>
            </div>


            <div className="flex flex-col">
              <label
                className="text-white font-semibold flex gap-2 items-center">
                <span>İframe Text</span>
                <Tooltip content={<IframeContent/>}>
                  <div>
                    <RiInformationFill className={"text-yellow-500/50"}
                                       fontSize={18}/>
                  </div>
                </Tooltip>

              </label>
              <textarea
                rows={20}
                name={"iframeText"}
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
                placeholder={"İframe içeriğini buraya yapıştırınız..."}

              ></textarea>
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
                <option value={true}>Yayınla</option>
                <option value={false}>Taslağa Al</option>
              </select>
            </div>
          </div>
          <div className="button mt-8 flex gap-6 items-center my-4">
            <button
              type="submit"
              className="bg-custom_green border-2 hover:bg-green-600 duration-300 border-green-700 flex-shrink-0 text-green-800 font-semibold rounded-md px-4  py-3  relative z-100"
            >
              Blog Oluştur
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

export default PostAdd;
