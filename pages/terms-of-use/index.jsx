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
        <title>Trader Edit | {t.termsOfUse.title}</title>
        <meta name="description" content={t.termsOfUse.description}/>
        <meta name="keywords"
              content={t.termsOfUse.keywords}/>
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
                <h2 className={"my-4 font-bold text-2xl"}>Kullanım
                  Koşulları</h2>
                <p className={"my-4"}>
                  Hoş geldiniz! Lütfen TraderEdit'in kullanım koşullarını
                  dikkatlice okuyunuz. Bu koşullar, web sitemizi kullanırken
                  uymak zorunda olduğunuz kuralları ve şartları belirlemektedir.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. Site Kullanımı</h2>
                <p className={"py-4"}>
                  Web sitemizi kullanırken yasalara uygun hareket etmek ve
                  kullanım şartlarımıza uymak zorundasınız.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>2. Hesap
                  Güvenliği</h2>
                <p className={"py-4"}>
                  Kullanıcı hesaplarının güvenliği sizin sorumluluğunuzdadır.
                  Şifrelerinizi güvenli bir şekilde saklamalısınız.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>3. Yasaklar ve
                  Kısıtlamalar</h2>
                <p className={"py-4"}>
                  Web sitemizi kullanırken belirli faaliyetleri (spam, kötüye
                  kullanım vb.) yapmak yasaktır ve kullanıcılarımızın bu
                  kurallara uyması beklenir.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Sorumluluk
                  Sınırlamaları</h2>
                <p className={"py-4"}>
                  Web sitemizin kullanımından kaynaklanan herhangi bir kayıp
                  veya hasar için sorumluluğumuz sınırlıdır.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>5. İptal ve İade
                  Politikası</h2>
                <p className={"py-4"}>
                  Ürün iptal ve iade koşulları ile ilgili bilgileri belirten
                  politikamıza uygun hareket etmek kullanıcıların
                  sorumluluğundadır.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Değişiklik
                  Hakkı</h2>
                <p className={"py-4"}>
                  Kullanım koşullarını, gizlilik politikasını veya diğer
                  politikalarımızı zaman zaman güncelleme hakkımızı saklı
                  tutarız ve değişiklikleri size bildirmek için sitemizi düzenli
                  olarak kontrol etmenizi öneririz.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>7. İletişim</h2>
                <p className={"py-4"}>
                  Kullanım koşulları ile ilgili herhangi bir sorunuz varsa,
                  lütfen bize [iletişim bilgileri] üzerinden ulaşın.
                </p>

                <p className={"py-4"}>
                  Bu kullanım koşulları [etkinlik tarihi] itibariyle geçerlidir.
                </p>

                <p className={"py-4"}>
                  Teşekkür ederiz!
                </p>


              </>

            )}


            {locale === "en" && (
              <>
                <h2 className={"my-4 font-bold text-2xl"}>Terms of Use</h2>
                <p className={"my-4"}>
                  Welcome! Please carefully read the Terms of Use for
                  TraderEdit. These terms define the rules and conditions you
                  must adhere to while using our website.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>1. Site Usage</h2>
                <p className={"py-4"}>
                  You are required to act in accordance with the law and comply
                  with our terms of use while using our website.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>2. Account
                  Security</h2>
                <p className={"py-4"}>
                  The security of user accounts is your responsibility. You must
                  securely store your passwords.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>3. Prohibitions and
                  Restrictions</h2>
                <p className={"py-4"}>
                  Certain activities (spam, misuse, etc.) are prohibited while
                  using our website, and users are expected to comply with these
                  rules.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>4. Limitations of
                  Liability</h2>
                <p className={"py-4"}>
                  Our liability for any loss or damage arising from the use of
                  our website is limited.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>5. Cancellation and
                  Refund Policy</h2>
                <p className={"py-4"}>
                  Users are responsible for adhering to our product cancellation
                  and refund conditions as outlined in our policy.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>6. Right to
                  Change</h2>
                <p className={"py-4"}>
                  We reserve the right to update our terms of use, privacy
                  policy, or other policies from time to time, and we recommend
                  checking our site regularly for changes.
                </p>

                <h2 className={"my-4 font-bold text-2xl"}>7. Contact</h2>
                <p className={"py-4"}>
                  If you have any questions regarding the terms of use, please
                  contact us through [contact information].
                </p>

                <p className={"py-4"}>
                  These terms of use are effective as of [effective date].
                </p>

                <p className={"py-4"}>
                  Thank you!
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