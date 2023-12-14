import React from "react";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Tooltip
} from "@nextui-org/react";
import {PiShoppingCartDuotone, PiTrashDuotone} from "react-icons/pi";
import {useAppContext} from "@context/index";
import {useRouter} from "next/router";
import {lang} from "@lang/langT";
import {RiDeleteBinFill} from "react-icons/ri";
import {toast} from "react-toastify";


const Basket = () => {
  const {locale, push} = useRouter();
  const t = lang(locale);
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const {basket, setBasket} = useAppContext();

  return (
    <Dropdown
      backdrop={"blur"}

      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <Badge content={basket.length} color="warning" variant={"solid"}
             className={"top-2.5" +
               " right-2.5"}>
        <DropdownTrigger>

          <Button
            variant="light"
            isIconOnly={true}

          >
            <PiShoppingCartDuotone fontSize={24}/>
          </Button>

        </DropdownTrigger>
      </Badge>
      <DropdownMenu emptyContent={"sffsdf"} variant="faded"
                    aria-label="Dropdown menu with description"
      >
        <DropdownSection>
          {basket.length <= 0 ? (
            <DropdownItem variant={"light"} className={"py-4 px-2" +
              " text-center gap" +
              " flex justify-center "}>
              <div className=" flex flex-col items-center gap-4">
                <PiTrashDuotone fontSize={48} className={"text-zinc-400"}/>
                <p className={"text-zinc-400"}>{t.basket.basketEmpty}</p>
              </div>
            </DropdownItem>
          ) : (
            basket.map((item, index) => (
              <DropdownItem key={index}
                            className={"py-4 px-2 w-full "}>
                <div className="inline-flex gap-4 justify-between w-full">
                  <div className="flex gap-4 items-center">
                    <img src={item?.image || "/noImage.jpg"} alt={item.title}
                         className={"w-12 h-12 rounded-lg border-2" +
                           " border-gray-600" +
                           " "}/>
                    <div className="flex flex-col">
                      <p
                        className={"text-default-900 max-w-[150px] truncate" +
                          " "}>{item.title}</p>
                      <p className={"text-default-500"}>{item.price}
                        {locale === "tr" ? " ₺" : " $"}
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-center relative z-50"}>
                    <Tooltip color="danger" content={t.basket.basketRemove}

                    >
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiDeleteBinFill fontSize={20} onClick={
                  () => {
                    console.log("Tıklandı")
                    setBasket(basket.filter((i) => i._id !== item._id));
                    toast(`${item.title}  ${t.basket.removedFromBasket} `, {
                      type: "error",
                      autoClose: 2000,
                      position: "bottom-right",
                      theme: "dark",
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,


                    });

                  }
                }/>
              </span>
                    </Tooltip>
                  </div>
                </div>
              </DropdownItem>
            ))
          )}


        </DropdownSection>


        {basket.length > 0 && (

          <DropdownSection>
            <DropdownItem className={""}
                          variant={"light"}>
              <div className="flex gap-4 justify-center">
                <Button variant={"flat"} color={"danger"} className={""}
                        onClick={() => setBasket([])}
                >
                  {t.basket.basketRemove}
                </Button>

                <Button variant={"flat"} color={"success"} className={""}
                        onClick={() => push("/my-cart")}
                >
                  {t.basket.basketCheckout}
                </Button>
              </div>

            </DropdownItem>
          </DropdownSection>

        )}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Basket;


