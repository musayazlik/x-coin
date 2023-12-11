import {Accordion, AccordionItem} from "@nextui-org/react";

const SubDropdownMenu = ({children, title, label, key}) => {
  return (
    <>
      <div className="overflow-hidden">
        <Accordion
          isCompact={true}
          className={"!px-0 overflow-hidden "}

        >
          <AccordionItem

            className={"w-full my-0 px-2 pt-0 border-b-2 border-zinc-950/50"}
            key={key} aria-label={label} title={title}>
            {children}
          </AccordionItem>
        </Accordion>
      </div>


    </>
  )
}

export default SubDropdownMenu