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


const EducationAdd = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const t = lang(router.locale);

  const editor = useEditor({
    extensions: [StarterKit],
    placeholder: "Education içeriğini buraya yazınız...",
    editorProps: {
      attributes: {
        class:
          "prose prose-p:font-inter prose-p:text-16-30 prose-p:mb-6 border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500 min-h-[400px]",
      },
    },
  });

  const educationAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const slug = e.target.slug.value;
    const category = e.target.category.value;
    const subCategory = e.target.subCategory.value;
    const image = e.target.image.files[0];
    const video = e.target.video.files[0];
    const status = e.target.status.value;
    const price = e.target.price.value;
    const instructor = e.target.instructor.value;
    const content = editor.getHTML();


    if (!title || !description || !slug || !image || !content || !category || !subCategory || !status || !video || !price || !instructor) {
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
      instructor,
      slug,
      price,
      image,
      video,
      content,
      status: status === "true",
      user: session.user.id,
      category,
      subCategory,
    };

    axios({
      method: "post",
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
          text: "İçerik başarıyla eklendi!",
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

  return (
    <Layout>
      <div
        className="bg-zinc-800 shadow-md shadow-zinc-900/20 px-2 py-8 border-t-2 border-custom_pink">
        <h1 className=" px-2 text-3xl font-bold text-white">İçerik Ekle</h1>
        <p className=" px-2 text-base font-normal mt-2 text-white">
          Bu sayfadan eğitimler içeriklerini ekleyebilirsiniz.
        </p>

        <form
          className="contentArea px-2"
          encType="multipart/form-data"
          onSubmit={(e) => {
            educationAdd(e);
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
              <label className="text-white font-semibold">Eğitmen</label>
              <input
                type="text"
                name="instructor"
                id="instructor"
                maxLength={60}
                placeholder="İçeriğin eğitmenini giriniz... (Max: 60 karakter)"
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
              <label className="text-white font-semibold">Fiyat</label>
              <input
                type="number"
                name="price"
                id="price"

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
                <option selected={true} disabled>
                  İçerik kategorisini seçiniz...
                </option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="crypto-indices">Crypto Indices</option>
                <option value="sub-coin">Alt Coin</option>
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
                  İçerik alt kategorisini seçiniz...
                </option>
                <option value="free-trainings"
                >
                  Free Trainings (Ücretsiz Eğitimler)
                </option>

                <option value="paid-trainings"
                >
                  Paid Trainings (Ücretli Eğitimler)
                </option>

                <option value="live-trainings"
                >
                  Live Trainings (Canlı Eğitimler)
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
              <label className="text-white font-semibold">Video</label>
              <input
                type="file"
                name="video"
                id="video"
                className="border-2 border-zinc-700 rounded-md px-4 mt-2 mb-5 py-3 bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent w-full text-zinc-500 placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold">İçerik Metni</label>
              <EditorContent editor={editor}/>
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
              Eğitimi Ekle
            </button>
            <Link href="/admin/educations" className="text-red-700">
              İptal Et
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EducationAdd;
