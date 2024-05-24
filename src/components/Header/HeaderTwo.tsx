import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";
import TransparentButton from "../ui/TransparentButton";
import TransparentLink from "../ui/TransparentLink";
import DefaultButton from "../ui/DefaultButton";
import DefaultLink from "../ui/DefaultLink";
import InputSpinner from "../Form/InputSpinner";
import { useEffect, useState } from "react";

const HeaderTwo = (props: {
  selectLang: boolean;
  showButton: boolean;
  transparentButton: boolean;
  link?: string;
  className?: string;
  logoClassname?: string;
  isConnected: boolean;
  lang: string;
  bg: string;
  resizeOnScroll: boolean;
  fixed: boolean;
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  //   console.log(props.isConnected);
  const { content, isLoading, error } = useLocale("Header", props.lang);
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    if (props.resizeOnScroll) {
      window.addEventListener("scroll", () => {
        setSmallHeader(window.scrollY > 200);
      });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex max-w-[1600px] m-auto">
        <InputSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-screen">
        <p className="m-auto">Error: {error.message}</p>
      </div>
    );
  }
  let logoClassname = "logo-default";
  let link = "/";
  if (props.logoClassname != undefined) {
    logoClassname = props.logoClassname;
  }
  if (props.link != undefined) {
    link = props.link;
  }
  return (
    <header
      className={`${
        props.fixed ? "fixed" : "absolute"
      } z-20 top-0 left-0 right-0 flex flex-wrap items-center m-auto justify-between gap-2 ${
        props.bg
      } max-w-[1600px] px-6 ${smallHeader ? "py-2" : "py-6"} ${
        props.className ? props.className : ""
      }`}
    >
      <Link to="/">
        <Logo className={`${logoClassname}`} />
      </Link>
      <div className="flex items-center gap-2">
        {props.selectLang && (
          <SelectLang
            handleChangeLang={props.handleChangeLang}
            lang={props.lang}
          />
        )}
        {props.transparentButton ? (
          props.isConnected ? (
            <TransparentButton
              onClick={props.handleDisconnect}
              text={content.disconnect}
              className="py-1 px-4 text-base"
            />
          ) : (
            <TransparentLink
              link={link}
              text={content.content}
              className="py-1 px-4 text-base"
            />
          )
        ) : props.showButton && props.isConnected ? (
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
        )}
      </div>
    </header>
  );
};

export default HeaderTwo;
