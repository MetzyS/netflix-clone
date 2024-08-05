// import { useDataContext } from "../../layouts/RootLayout";
import { FooterLocaleType } from "../../types/useLocaleTypes/ImportedLocaleTypes";
import { useLocale } from "../../hooks/useLocale";
import FaqButton from "../ui/FaqItem";
import SelectLang from "../ui/SelectLang";
import { FooterStyle } from "../../types/footerstyle";

const Footer = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
  footerStyle: FooterStyle;
}) => {
  const { content, isLoading }: FooterLocaleType = useLocale(
    "Footer",
    props.lang
  );
  return (
    <footer
      className={`p-6 w-screen ${
        props.footerStyle.whiteTheme
          ? "bg-[#f3f3f3] border-t border-t-black/10"
          : ""
      }`}
    >
      {isLoading ? (
        <></>
      ) : (
        <div className="max-w-[1300px] m-auto">
          <a
            href="mailto:contact@metzys.net"
            className={`text-left ${
              props.footerStyle.whiteTheme ? "text-black" : "text-secondary"
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
                footerStyle={props.footerStyle.whiteTheme}
              />
            ))}
          </ul>
          <div className="w-32 my-6">
            <SelectLang
              lang={props.lang}
              handleChangeLang={props.handleChangeLang}
              bg={props.footerStyle.whiteTheme ? "bg-white" : ""}
              selectTextColor={
                props.footerStyle.whiteTheme ? "text-neutral-600" : ""
              }
              borderColor={
                props.footerStyle.whiteTheme ? "border-black/30" : undefined
              }
              showText={true}
            />
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
