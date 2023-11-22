import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from "@nextui-org/react";
import {PiShoppingCartDuotone, PiTrashDuotone} from "react-icons/pi";
import {useAppContext} from "@context/index";


const Basket = () => {
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
      <DropdownTrigger>
        <Button
          variant="light"
          isIconOnly={true}

        >
          <PiShoppingCartDuotone fontSize={24}/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection className={"min-w-[280px]"}>
          {basket.length <= 0 ? (
            <DropdownItem variant={"light"} className={"py-4 px-2 text-center" +
              " flex justify-center "}>
              <div className=" flex flex-col items-center gap-4">
                <PiTrashDuotone fontSize={48} className={"text-zinc-400"}/>
                <p className={"text-zinc-400"}>Sepette ürün bulunmamaktadır.</p>
              </div>
            </DropdownItem>
          ) : (
            basket.map((item, index) => (
              <DropdownItem key={index} className={"py-4 px-2"}>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title}
                       className={"w-16 h-16"}/>
                  <div className="flex flex-col">
                    <p className={"text-default-900"}>{item.title}</p>
                    <p className={"text-default-500"}>{item.price} TL</p>
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
                <Button variant={"flat"} color={"danger"} className={""}>
                  Sepeti Boşalt
                </Button>

                <Button variant={"flat"} color={"success"} className={""}>
                  Ödeme Yap
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


