import { Link } from "react-router-dom";
import SelectLang from "../ui/SelectLang";
import Logo from "../ui/Logo";
import TransparentButton from "../ui/TransparentButton";
import TransparentLink from "../ui/TransparentLink";
import DefaultButton from "../ui/DefaultButton";
import DefaultLink from "../ui/DefaultLink";
import { HeaderStyle } from "../../types/headerstyle";
import { Header } from "../../types/data";

const HeroHeader = (props: {
  headerStyle: HeaderStyle;
  isConnected: boolean;
  isConfigured: boolean;
  lang: string;
  content: Header;
  isLoading: boolean;
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  const {
    showBtn,
    showSelectLang,
    background,
    className,
    transparentBtn,
    logoClassName,
    link,
    signupHeader,
    absolutePos,
  } = props.headerStyle;

  return (
    <>
      {props.isLoading ? (
        <div>loading</div>
      ) : (
        <header
          className={`${
            absolutePos ? "absolute" : ""
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
                  text={props.content.disconnect}
                  className={`py-1 px-4 text-sm lg:text-xl`}
                />
              ) : (
                <TransparentLink
                  link={link}
                  text={props.content.button}
                  className={`py-1 px-4 text-sm lg:text-xl`}
                />
              )
            ) : showBtn ? (
              props.isConnected ? (
                <DefaultButton
                  primary={true}
                  className={`ring-default py-1 px-4 text-sm lg:text-xl`}
                  text={props.content.disconnect}
                  onClick={props.handleDisconnect}
                />
              ) : (
                <DefaultLink
                  link="/login"
                  text={props.content.button}
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
