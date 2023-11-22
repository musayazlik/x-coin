import Head from "next/head";
import Menu from "@components/menü";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import Footer from "@components/footer";

const AboutUs = () => {
  const {locale} = useRouter();
  const t = lang(locale);
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


      <section className={"py-14"}>
        <div className="container flex justify-center">
          <div className={"max-w-4xl"}>

            {locale === "tr" && (
              <>
                <h2 className={"my-4 font-bold text-2xl"}>Çerez Politikası</h2>
                <p className={"my-4"}>
                  TraderEdit'e hoş geldiniz! Çevrimiçi deneyiminizi geliştirmek
                  için çerezler gibi teknolojileri kullanıyoruz. Bu Çerez
                  Politikası, bu teknolojilerin nasıl kullanıldığını ve sahip
                  olduğunuz seçenekleri açıklar.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. Çerezler
                  Nedir?</h2>
                <p className={"py-4"}>
                  Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza
                  kaydedilen küçük metin dosyalarıdır. Web sitelerinin daha
                  verimli çalışmasını ve web site sahiplerine bilgi sağlamak
                  amacıyla yaygın bir şekilde kullanılır.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>2. Çerezleri Nasıl
                  Kullanıyoruz?</h2>
                <p className={"py-4"}>
                  Çerezleri çeşitli amaçlarla kullanıyoruz, bunlar arasında:
                </p>
                <ul className={"list-disc pl-8"}>
                  <li>Web sitemizin düzgün çalışmasını sağlama.</li>
                  <li>Gezinti deneyiminizi iyileştirme.</li>
                  <li>Web sitesi trafiğini ve trendlerini analiz etme.</li>
                  <li>Özelleştirilmiş içerik ve reklamları sunma.</li>
                </ul>

                <h2 className={"my-4 font-bold text-2xl"}>3. Kullandığımız Çerez
                  Türleri</h2>
                <p className={"py-4"}>
                  <b>Oturum Çerezleri:</b> Gezgin pencerenizi kapattığınızda
                  süresi dolan geçici çerezlerdir ve sitenin düzgün çalışması
                  için gereklidir.
                </p>
                <p className={"py-4"}>
                  <b>Kalıcı Çerezler:</b> Tarayıcınızı kapattıktan sonra
                  cihazınızda kalan ve sitemize geri döndüğünüzde sizi
                  tanımamıza yardımcı olan çerezlerdir.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Çerez
                  Seçenekleriniz</h2>
                <p className={"py-4"}>
                  Çerezleri tarayıcı ayarlarınız aracılığıyla yönetme
                  seçeneğiniz bulunmaktadır. Ancak, belirli çerezleri devre dışı
                  bırakmak, web sitemizin işlevselliğini etkileyebilir.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>5. Çerez
                  Politikamızdaki Değişiklikler</h2>
                <p className={"py-4"}>
                  Çerez Politikamızı zaman zaman güncelleyebiliriz. Herhangi bir
                  değişiklik bu sayfada yayımlanacak, bu nedenle düzenli olarak
                  kontrol etmeyi öneririz.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Bizimle
                  İletişim</h2>
                <p className={"py-4"}>
                  Çerez Politikamızla ilgili herhangi bir sorunuz varsa, lütfen
                  bize [iletişim bilgileri] aracılığıyla ulaşın.
                </p>

                <p className={"py-4"}>
                  Bu Çerez Politikası [etkinlik tarihi] itibariyle geçerlidir.
                </p>

                <p className={"py-4"}>
                  TraderEdit'i tercih ettiğiniz için teşekkür ederiz!
                </p>


              </>

            )}


            {locale === "en" && (
              <>
                <h2 className={"my-4 font-bold text-2xl"}>Cookie Policy</h2>
                <p className={"my-4"}>
                  Welcome to TraderEdit! To enhance your online experience, we
                  use technologies like cookies. This Cookie Policy explains how
                  we use these technologies and the choices you have.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. What Are
                  Cookies?</h2>
                <p className={"py-4"}>
                  Cookies are small text files that are stored on your device
                  when you visit a website. They are widely used to make
                  websites work more efficiently and to provide information to
                  website owners.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>2. How We Use
                  Cookies</h2>
                <p className={"py-4"}>
                  We use cookies for various purposes, including:
                </p>
                <ul className={"list-disc pl-8"}>
                  <li>Ensuring the proper functioning of our website.</li>
                  <li>Improving your browsing experience.</li>
                  <li>Analyzing website traffic and trends.</li>
                  <li>Delivering personalized content and advertisements.</li>
                </ul>

                <h2 className={"my-4 font-bold text-2xl"}>3. Types of Cookies We
                  Use</h2>
                <p className={"py-4"}>
                  <b>Session Cookies:</b> These are temporary cookies that
                  expire when you close your browser and are essential for the
                  proper functioning of the site.
                </p>
                <p className={"py-4"}>
                  <b>Persistent Cookies:</b> These cookies remain on your device
                  after you close your browser and help us recognize you when
                  you return to our site.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Your Cookie
                  Choices</h2>
                <p className={"py-4"}>
                  You have the option to manage cookies through your browser
                  settings. However, please note that disabling certain cookies
                  may affect the functionality of our website.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>5. Changes to Our
                  Cookie Policy</h2>
                <p className={"py-4"}>
                  We may update our Cookie Policy from time to time. Any changes
                  will be posted on this page, so we recommend checking it
                  regularly.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Contact Us</h2>
                <p className={"py-4"}>
                  If you have any questions about our Cookie Policy, please
                  contact us through [contact information].
                </p>

                <p className={"py-4"}>
                  This Cookie Policy is effective as of [effective date].
                </p>

                <p className={"py-4"}>
                  Thank you for choosing TraderEdit!
                </p>


              </>

            )}


          </div>
        </div>
      </section>


      <Footer/>


    </>


  )
}

export default AboutUs