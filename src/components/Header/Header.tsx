import { useLocale } from "../../hooks/useLocale";
import { useMemo } from "react";
import { HeaderStyle } from "../../types/headerstyle";
import HeroHeader from "./HeroHeader";
import MainHeader from "./MainHeader";
import { UserType } from "../../types/user";
import UserProfileIconOne from "../../assets/profile-0.png";
import UserProfileIconTwo from "../../assets/profile-1.png";
import UserProfileIconThree from "../../assets/profile-2.png";
import UserProfileIconFour from "../../assets/profile-3.png";
import UserProfileIconFive from "../../assets/profile-4.png";

const Header = (props: {
  headerStyle: HeaderStyle;
  isConnected: boolean;
  isConfigured: boolean;
  selectedProfile: undefined | number;
  lang: string;
  user: UserType;
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  const { content, isLoading } = useLocale("Header", props.lang);
  const mainHeader = useMemo(() => {
    return props.isConfigured && props.isConnected;
  }, [props.isConfigured, props.isConnected]);

  const userProfileIcons: string[] = [
    UserProfileIconOne,
    UserProfileIconTwo,
    UserProfileIconThree,
    UserProfileIconFour,
    UserProfileIconFive,
  ];

  return (
    <>
      {mainHeader ? (
        <MainHeader
          content={content}
          lang={props.lang}
          isLoading={isLoading}
          handleDisconnect={props.handleDisconnect}
          handleChangeLang={props.handleChangeLang}
          selectedProfile={props.selectedProfile}
          user={props.user}
          userProfileIcons={userProfileIcons}
        />
      ) : (
        <HeroHeader
          headerStyle={props.headerStyle}
          isConnected={props.isConnected}
          isConfigured={props.isConfigured}
          lang={props.lang}
          handleDisconnect={props.handleDisconnect}
          handleChangeLang={props.handleChangeLang}
          isLoading={isLoading}
          content={content}
        />
      )}
    </>
  );
};

export default Header;
