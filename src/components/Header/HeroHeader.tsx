import { Link } from "react-router-dom";
import SelectLang from "../ui/SelectLang";
import Logo from "../ui/Logo";
import TransparentButton from "../ui/TransparentButton";
import TransparentLink from "../ui/TransparentLink";
import DefaultButton from "../ui/DefaultButton";
import DefaultLink from "../ui/DefaultLink";
import { HeaderStyle } from "../../types/headerstyle";
import { useLocale } from "../../hooks/useLocale";

const HeroHeader = (props: {
  headerStyle: HeaderStyle;
  isConnected: boolean;
  isConfigured: boolean;
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
    transparentBtn,
    logoClassName,
    link,
    signupHeader,
  } = props.headerStyle;
  const { content, isLoading } = useLocale("Header", props.lang);
  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <header
          className={`${
            fixed ? "fixed" : "absolute"
          } z-20 top-0 left-0 right-0 flex flex-wrap items-center m-auto justify-between gap-2 ${background} max-w-[1600px] px-6 ${
            signupHeader ? "" : "py-6"
          } ${className ? className : ""}`}
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
                  className={`py-1 px-4 text-sm lg:text-xl`}
                />
              ) : (
                <TransparentLink
                  link={link}
                  text={content.button}
                  className={`py-1 px-4 text-sm lg:text-xl`}
                />
              )
            ) : showBtn ? (
              props.isConnected ? (
                <DefaultButton
                  primary={true}
                  className={`ring-default py-1 px-4 text-sm lg:text-xl`}
                  text={content.disconnect}
                  onClick={props.handleDisconnect}
                />
              ) : (
                <DefaultLink
                  link="/login"
                  text={content.button}
                  className={`py-1 px-4 text-sm lg:text-xl`}
                />
              )
            ) : (
              <></>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default HeroHeader;
