import { useLocale } from "../../hooks/useLocale";
import DefaultButton from "../ui/DefaultButton";
import DefaultLink from "../ui/DefaultLink";
import { useEffect, useState } from "react";
import { HeaderStyle } from "../../types/headerstyle";
import HeroHeader from "./HeroHeader";

const Header = (props: {
  headerStyle: HeaderStyle;
  isConnected: boolean;
  isConfigured: boolean;
  lang: string;
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  const { showBtn } = props.headerStyle;

  const { content, isLoading } = useLocale("Header", props.lang);
  const [mainHeader, setMainHeader] = useState(
    props.isConfigured && props.isConnected
  );

  useEffect(() => {
    setMainHeader(props.isConnected && props.isConfigured);
  }, [props.isConnected, props.isConfigured]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {mainHeader ? (
        <header>
          {showBtn ? (
            props.isConnected ? (
              <DefaultButton
                primary={true}
                className={`ring-default py-1 px-4 text-base lg:text-xl`}
                text={content.disconnect}
                onClick={props.handleDisconnect}
              />
            ) : (
              <DefaultLink
                link="/login"
                text={content.button}
                className={`py-1 px-4 text-base lg:text-xl`}
              />
            )
          ) : (
            <></>
          )}
        </header>
      ) : (
        <HeroHeader
          headerStyle={props.headerStyle}
          isConnected={props.isConnected}
          isConfigured={props.isConfigured}
          lang={props.lang}
          handleDisconnect={props.handleDisconnect}
          handleChangeLang={props.handleChangeLang}
        />
      )}
    </>
  );
};

export default Header;
