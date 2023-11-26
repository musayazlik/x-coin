import React, {memo} from "react";
import {useRouter} from "next/router";
import {lang} from "@/lang/langT";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from "@nextui-org/react";
import Image from "next/image";

const LangDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();
  const {locale, asPath} = router;

  const t = lang(locale);

  const [langStatus, setLangStatus] = React.useState(locale);

  const handleLang = (langS) => {
    setLangStatus(langS);
    setIsOpen(false);
    const currentPath = asPath;
    router.push(currentPath, undefined, {locale: langS});
  };
  return (
    <>
      <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
        }}
        backdrop={"blur"}

      >
        <DropdownTrigger>
          <Button
            variant="light"
            isIconOnly={true}
          >

            {langStatus === "tr" ? (
              <Image
                src="/turkish.png"
                alt="tr"
                width={20}
                height={20}

              />
            ) : (
              <Image
                src="/united-states.png"
                alt="tr"
                width={20}
                height={20}

              />
            )}

          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded"
                      aria-label="Dropdown menu with description">
          <DropdownSection className={"mb-0"}>
            <DropdownItem
              key="Turkish"
              className={"flex gap-6 items-center"}
              onClick={() => {
                handleLang("tr");
              }}
            >
              <Image
                src="/turkish.png"
                alt="tr"
                width={20}
                height={20}
                className="inline-block"
              />
              <span
                className={"ml-2 font-medium text-base "}> Turkish</span>
            </DropdownItem>
            <DropdownItem
              key="English"
              className={"flex  items-center"}
              onClick={() => {
                handleLang("en");
              }}


            >
              <div className={"flex gap-4 items-center"}>
                <Image
                  src="/united-states.png"
                  alt="tr"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                <span
                  className={" font-medium text-base "}> English</span>
              </div>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default memo(LangDropdown);
