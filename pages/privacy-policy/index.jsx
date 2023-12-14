import Head from "next/head";
import Menu from "@components/menü";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import Footer from "@components/footer";
import Link from "next/link";

const AboutUs = () => {
  const {locale} = useRouter();
  const t = lang(locale);
  return (


    <>
      <Head>
        <title>Trader Edit | {t.privacy_policy}</title>
        <meta name="description" content={
          "Trader Edit Privacy Policy, Trader Edit Gizlilik Politikası"
        }/>
        <meta name="keywords"
              content={
                "Trader Edit, Trader Edit Privacy Policy, Trader Edit Gizlilik Politikası"
              }/>
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
                <h2 className={"my-4 font-bold text-2xl"}>Gizlilik
                  Politikası</h2>
                <p className={"my-4"}>
                  Hoş geldiniz! TraderEdit olarak, müşterilerimizin ve
                  ziyaretçilerimizin gizliliğini korumak amacıyla bu gizlilik
                  politikasını oluşturduk. Lütfen aşağıdaki metni dikkatlice
                  okuyunuz:
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. Kişisel Bilgilerin
                  Toplanması ve Kullanılması</h2>
                <p className={"my-4"}>
                  <b>Ziyaretçi Bilgileri:</b> Web sitemizi ziyaret ettiğinizde,
                  IP
                  adresiniz, tarayıcı tipiniz, ziyaret ettiğiniz sayfalar gibi
                  bilgiler otomatik olarak kaydedilebilir.
                </p>

                <p className={"py-4"}>
                  <b>Kişisel Bilgiler:</b> Alışveriş yaparken veya sitemize
                  kaydolduğunuzda adınız, adresiniz, telefon numaranız ve
                  e-posta
                  adresiniz gibi kişisel bilgiler toplanabilir.
                </p>
                <p className={"py-4"}>
                  <b>Çerezler:</b> Çerezler aracılığıyla, sitemizin
                  performansını
                  ölçmek ve kullanıcı deneyimini iyileştirmek amacıyla bilgiler
                  toplanabilir.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>2. Bilgilerin
                  Kullanımı </h2>
                <p className={"py-4"}>
                  Topladığımız bilgiler, siparişlerinizi işleme koymak, müşteri
                  hizmetleri sağlamak, kampanya bilgileri göndermek ve kullanıcı
                  deneyimini iyileştirmek amacıyla kullanılabilir.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>2. Bilgilerin
                  Kullanımı </h2>
                <p className={"py-4"}>
                  Bilgileriniz, üçüncü taraf hizmet sağlayıcılarıyla (örneğin,
                  kargo
                  şirketleri) işbirliği yapmak veya yasal yükümlülükleri yerine
                  getirmek için paylaşılabilir.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}> 3. Bilgilerin
                  Paylaşımı </h2>
                <p className={"py-4"}>
                  Bilgileriniz, üçüncü taraf hizmet sağlayıcılarıyla (örneğin,
                  kargo
                  şirketleri) işbirliği yapmak veya yasal yükümlülükleri yerine
                  getirmek için paylaşılabilir.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Güvenlik </h2>
                <p className={"py-4"}>
                  Kişisel bilgilerinizin güvenliği için uygun fiziksel,
                  elektronik
                  ve yönetimsel önlemleri alıyoruz.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>5. Çocukların
                  Gizliliği </h2>
                <p className={"py-4"}>13 yaşın altındaki çocuklardan bilgi
                  toplamıyoruz.</p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Çerezler </h2>
                <p className={"py-4"}>
                  Çerezlerin nasıl kullanıldığına dair daha fazla bilgi
                  için <Link
                  href={"/cookie-preferences"}>Çerez Politikamızı</Link> ziyaret
                  edebilirsiniz.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>7. Değişiklikler </h2>
                <p className={"py-4"}>
                  Gizlilik politikamız zaman zaman güncellenebilir.
                  Değişiklikler
                  hakkında size bilgi vermek için sitemizi düzenli olarak
                  kontrol
                  etmenizi öneririz..
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>8. İletişim </h2>


                <p className={"py-4"}>
                  Gizlilik politikamızla ilgili herhangi bir sorunuz varsa,
                  lütfen
                  bize [iletişim bilgileri] üzerinden ulaşın.
                </p>

                <p className={"py-4"}>
                  Bu gizlilik politikası, TraderEdit'nın çevrim içi
                  faaliyetlerini
                  ve müşteri hizmetlerini düzenlemektedir. Gizliliğiniz bizim
                  için
                  önemlidir ve bu politika, kişisel bilgilerinizin nasıl
                  işlendiği
                  konusunda sizi bilgilendirmek amacıyla oluşturulmuştur.
                </p>

                <p className={"py-4"}>Teşekkür ederiz!</p>

              </>

            )}


            {locale === "en" && (
              <>
                <h2 className={"my-4 font-bold text-2xl"}>Privacy Policy</h2>
                <p className={"my-4"}>
                  Welcome! At TraderEdit, we have created this privacy policy to
                  protect the privacy of our customers and visitors. Please read
                  the text below carefully:
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. Collection and Use
                  of Personal Information</h2>
                <p className={"my-4"}>
                  <b>Visitor Information:</b> When you visit our website,
                  information such as your IP address, browser type, and pages
                  visited may be automatically recorded.
                </p>

                <p className={"py-4"}>
                  <b>Personal Information:</b> When shopping or registering on
                  our site, personal information such as your name, address,
                  phone number, and email address may be collected.
                </p>
                <p className={"py-4"}>
                  <b>Cookies:</b> Information may be collected through cookies
                  to measure the performance of our site and improve the user
                  experience.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>2. Use of
                  Information</h2>
                <p className={"py-4"}>
                  The information we collect may be used to process your orders,
                  provide customer service, send campaign information, and
                  improve the user experience.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>3. Sharing of
                  Information</h2>
                <p className={"py-4"}>
                  Your information may be shared with third-party service
                  providers (e.g., shipping companies) to collaborate or to
                  fulfill legal obligations.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Security</h2>
                <p className={"py-4"}>
                  We take appropriate physical, electronic, and managerial
                  measures to ensure the security of your personal information.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>5. Children's
                  Privacy</h2>
                <p className={"py-4"}>
                  We do not collect information from children under the age of
                  13.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Cookies</h2>
                <p className={"py-4"}>
                  For more information on how cookies are used, you can visit
                  our <Link href={"/cookie-preferences"}>Cookie Policy</Link>.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>7. Changes</h2>
                <p className={"py-4"}>
                  Our privacy policy may be updated from time to time. We
                  recommend checking our site regularly to stay informed about
                  any changes.
                </p>
                <h2 className={"my-4 font-bold text-2xl"}>8. Contact</h2>

                <p className={"py-4"}>
                  If you have any questions about our privacy policy, please
                  contact us through [contact information].
                </p>

                <p className={"py-4"}>
                  This privacy policy regulates TraderEdit's online activities
                  and customer services. Your privacy is important to us, and
                  this policy is created to inform you about how your personal
                  information is processed.
                </p>

                <p className={"py-4"}>Thank you!</p>


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