import { useDataContext } from "../../layouts/RootLayout";
import { FooterLocaleType } from "../../types/useLocaleTypes/ImportedLocaleTypes";
import { useLocale } from "../../hooks/useLocale";
import FaqButton from "../ui/FaqItem";
import SelectLang from "../ui/SelectLang";

const Footer = (props: {
  selectBg?: string;
  selectTextColor?: string;
  className?: string;
  textColor?: string;
  selectBorderColor?: string;
  underline?: boolean;
  showLangText?: boolean;
}) => {
  const { lang, handleChangeLang } = useDataContext();
  const { content, isLoading }: FooterLocaleType = useLocale("Footer", lang);
  return (
    <footer
      className={`p-6 w-screen ${
        props.className ? props.className : undefined
      }`}
    >
      {isLoading ? (
        <></>
      ) : (
        <div className="max-w-[1300px] m-auto">
          <a
            href="mailto:contact@metzys.net"
            className={`text-left ${
              props.textColor ? props.textColor : "text-secondary"
            } hover:underline`}
          >
            {content.footerText}
          </a>
          <ul className="grid grid-cols-2 mt-6 text-sm lg:grid-cols-4">
            {Object.values(content.footer).map((item, index) => (
              <FaqButton
                key={"footer-item-" + index}
                item={item}
                index={index}
                textColor={props.textColor}
                underline={props.underline}
              />
            ))}
          </ul>
          <div className="w-32 my-6">
            <SelectLang
              lang={lang}
              handleChangeLang={handleChangeLang}
              bg={props.selectBg ? props.selectBg : undefined}
              selectTextColor={
                props.selectTextColor ? props.selectTextColor : undefined
              }
              borderColor={
                props.selectBorderColor ? props.selectBorderColor : undefined
              }
              showText={props.showLangText ? props.showLangText : undefined}
            />
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
