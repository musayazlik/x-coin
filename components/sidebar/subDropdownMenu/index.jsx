import {Accordion, AccordionItem} from "@nextui-org/react";
import {usePathname} from "next/navigation";

const SubDropdownMenu = ({children, title, label}) => {
  const pathname = usePathname()

  console.log("Key Değeri : ", label)

  return (
    <>
      <div className="overflow-hidden">
        <Accordion
          isCompact={true}
          className={"!px-0 overflow-hidden "}
        >
          <AccordionItem

            className={"w-full my-0 px-2 pt-0 border-b-2 border-zinc-950/50"}
            key={`${label}`} aria-label={label} title={title}>
            {children}
          </AccordionItem>
        </Accordion>
      </div>


    </>
  )
}

export default SubDropdownMenu