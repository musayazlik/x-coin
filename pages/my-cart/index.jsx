import {useRef} from "react";
import Menu from "@components/menü";
import {useAppContext} from "@/context";
import {useRouter} from "next/router";
import {RiCloseLine} from "react-icons/ri";
import {Button} from "@nextui-org/react";
import {
  PiCreditCardDuotone,
  PiShoppingCartDuotone,
  PiTrashSimpleDuotone
} from "react-icons/pi";
import {lang} from "@lang/langT";
import {toast} from "react-toastify";
import Image from "next/image";
import Footer from "@components/footer";

const MyCart = () => {
  const {locale} = useRouter()
  const t = lang(locale)
  const {basket, setBasket} = useAppContext()
  let discountTotal = 0
  const couponRef = useRef(null)

  const subTotal = (locale) => {
    let total = 0
    basket.map((item) => {
      total += item.price
    })

    if (locale === 'en') {
      return "$" + total
    } else {
      return (total * 29) + "tl"
    }

    return total
  }

  const removeItem = (id) => {
    const newBasket = basket.filter((item) => item.id !== id)
    setBasket(newBasket)
  }

  const couponHandle = () => {
    const coupon = couponRef.current.value
    if (coupon === "TRADEREDIT") {
      discountTotal = subTotal(locale) * 0.1
    } else {
      toast.error("Invalid Coupon Code", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      })
    }
  }


  return (
    <>
      <div className=" bg-zinc-900 ">
        <Menu/>
        <div className="flex flex-col items-center mt-16 ">
          <Button isIconOnly variant="faded"
                  aria-label="shop button" className={"p-1 w-16 mb-4 h-16" +
            " text-zinc-500 shadow-lg shadow-black/40"}>
            <PiShoppingCartDuotone fontSize={120}/>
          </Button>

          <h1
            className="mb-10 text-center text-2xl font-bold text-blue-600 ">My
            Card</h1>
        </div>
        <div
          className="mx-auto pb-16 max-w-6xl justify-center px-6 md:flex md:space-x-3 xl:px-0">
          <div className="rounded-lg md:w-2/3">

            {basket.map((item, index) => (
              <div
                className="justify-between mb-3 border border-zinc-800 shadow-lg shadow-black/40 rounded-lg bg-zinc-950 p-6 sm:flex sm:justify-start hover:scale-[1.01] duration-300 hover:shadow-xl hover:shadow-black/50">
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-zinc-100">
                      {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
                    </h2>
                    <p
                      className="mt-1 text-xs text-zinc-400">{item.description.length > 80 ? item.description.slice(0, 80) + "..." : item.description}</p>
                  </div>
                  <div
                    className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{
                        locale === 'en' ? "$" + item.price : (item.price * 29) + "tl"
                      }</p>
                      <RiCloseLine fontSize={20} className="cursor-pointer"/>
                    </div>
                  </div>
                </div>
              </div>

            ))}

            {basket && basket.length === 0 && (
              <div
                className="flex flex-col justify-center items-center min-h-[300px] h-full bg-zinc-950 rounded border border-zinc-800">

                <PiTrashSimpleDuotone fontSize={80}
                                      className={"text-zinc-200"}/>

                <p className="text-2xl font-bold text-zinc-200">

                  No items in your cart
                </p>

              </div>
            )}


          </div>
          {/* Sub total */}
          <div
            className="mt-6 h-full rounded-lg border border-zinc-800 shadow-lg shadow-black/40 bg-zinc-950 p-6  md:mt-0 md:w-1/3">

            <div className="coupon mb-4">
              <input type="text" placeholder="Coupon Code"
                     className="w-full rounded-md bg-zinc-900 text-sm py-2 px-2 font-medium text-zinc-300 "
                     ref={couponRef}
              />
              <button
                className="mt-2 w-full rounded-md bg-blue-600 text-sm py-2 font-medium text-white hover:bg-blue-800 duration-300"
                onClick={() => {
                  couponHandle()
                }}

              >
                Apply
              </button>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-zinc-300">Subtotal</p>
              <p className="text-zinc-300">{
                subTotal(locale)

              }</p>
            </div>
            <div className="flex justify-between">
              <p className="text-zinc-300">İndirim</p>
              <p className="text-zinc-300">
                {
                  locale === 'en' ? "$" + discountTotal : (discountTotal * 29) + "tl"
                }
              </p>
            </div>
            <hr className="my-4"/>
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-end">
                  {
                    locale === 'en' ? subTotal(locale) : (subTotal(locale))
                  }
                </p>
                <p className="text-sm text-zinc-300">{
                  t.basket.taxIncluded
                }</p>
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-md bg-blue-600 py-3 px-2 text-sm font-medium text-white hover:bg-blue-800 duration-300 flex justify-center gap-2 items-center">
              <PiCreditCardDuotone fontSize={20} className="inline-block"/>
              {t.basket.cardCheckout}
            </button>
            <button
              className="mt-4 w-full text-sm rounded-md bg-blue-600 py-3 px-2 font-medium text-white hover:bg-blue-800 duration-300 flex justify-center items-center gap-2">
              <Image src={"/coinPayments.svg"} width={20} height={20}
                     className={"bg-white rounded"}/>
              {t.basket.coinPaymentscheckout}
            </button>
          </div>
        </div>
      </div>

      <Footer/>


    </>
  )
}

export default MyCart