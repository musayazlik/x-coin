import Head from "next/head";
import Menu from "@components/menü";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import Footer from "@components/footer";
import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {
  RiLiveLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine
} from "react-icons/ri";

const AboutUs = () => {
  const {locale} = useRouter();
  const t = lang(locale)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const lastname = e.target.lastname.value
    const email = e.target.email.value
    const message = e.target.message.value

    const data = {
      name,
      lastname,
      email,
      message,
    }

    axios.post('/api/contact', data)
      .then(res => {
        toast("Mesajınız başarıyla gönderildi.", {
          type: "success",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
          draggable: true,
          progress: undefined,

        })
      })
      .catch(err => {
        toast("Mesajınız gönderilemedi.", {
          type: "error",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
          draggable: true,
          progress: undefined,
        })
      })
    e.target.reset()
  }
  return (


    <>
      <Head>
        <title>Trader Edit | {t.aboutUsPage.title}</title>
        <meta name="description" content={t.aboutUsPage.description}/>
        <meta name="keywords"
              content={t.aboutUsPage.keywords}/>
        <meta name="author" content="Trader Edit"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#000000"/>

        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Menu/>

      <section className="bg-zinc-900 py-20">
        <div className="container px-6 py-12 mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-4xl font-semibold text-primary">
               Contact us
              </span>
                <h2
                  className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Get in touch
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  We are here to help and answer any question you might have.
                  We look forward to hearing from you.
                </p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
          <span
            className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <RiMailLine fontSize={24}/>
          </span>
                <h2
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  hello@merakiui.com
                </p>
              </div>
              <div>
          <span
            className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <RiLiveLine fontSize={24}/>
          </span>
                <h2
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  Start new chat
                </p>
              </div>
              <div>
          <span
            className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
             <RiMapPinLine fontSize={24}/>
          </span>
                <h2
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>
              <div>
          <span
            className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <RiPhoneLine fontSize={24}/>
          </span>
                <h2
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
            <div
              className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="İsminizi giriniz... "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Soyisminizi giriniz..."
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta adresinizi giriniz..."
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full mt-4">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer/>


    </>


  )
}

export default AboutUs