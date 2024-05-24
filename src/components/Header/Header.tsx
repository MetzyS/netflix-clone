import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";
import TransparentButton from "../ui/TransparentButton";
import TransparentLink from "../ui/TransparentLink";
import DefaultButton from "../ui/DefaultButton";
import DefaultLink from "../ui/DefaultLink";
import { useEffect, useState } from "react";
import { HeaderStyle } from "../../types/headerstyle";

const Header = (props: {
  headerStyle: HeaderStyle;

  isConnected: boolean;
  lang: string;
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  const {
    showBtn,
    showSelectLang,
    background,
    className,
    fixed,
    resizeOnScroll,
    transparentBtn,
    logoClassName,
    link,
    signupHeader,
  } = props.headerStyle;

  const { content, isLoading, error } = useLocale("Header", props.lang);
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    if (resizeOnScroll) {
      window.addEventListener("scroll", () => {
        setSmallHeader(window.scrollY > 200);
      });
    }
  }, [props.headerStyle]);

  if (isLoading) {
    return <></>;
  }
  if (error) {
    console.error(error.message);
    return <></>;
  }

  return (
    <header
      className={`${
        fixed ? "fixed" : "absolute"
      } z-20 top-0 left-0 right-0 flex flex-wrap items-center m-auto justify-between gap-2 ${background} max-w-[1600px] px-6 ${
        smallHeader ? "py-2" : ""
      } ${signupHeader ? "" : "py-6"} ${className ? className : ""}`}
    >
      <Link to="/">
        <Logo className={`${logoClassName}`} />
      </Link>
      <div className="flex items-center gap-2">
        {showSelectLang && (
          <SelectLang
            handleChangeLang={props.handleChangeLang}
            lang={props.lang}
          />
        )}
        {transparentBtn ? (
          props.isConnected ? (
            <TransparentButton
              onClick={props.handleDisconnect}
              text={content.disconnect}
              className="py-1 px-4 text-base"
            />
          ) : (
            <TransparentLink
              link={link}
              text={content.button}
              className="py-1 px-4 text-base"
            />
          )
        ) : showBtn ? (
          props.isConnected ? (
            <DefaultButton
              primary={true}
              className="ring-default py-1 px-4 text-base"
              text={content.disconnect}
              onClick={props.handleDisconnect}
            />
          ) : (
            <DefaultLink
              link="/login"
              text={content.button}
              className="py-1 px-4 text-base"
            />
          )
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
