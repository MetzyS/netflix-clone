import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useMemo, useState } from "react";
import { ContextType } from "../types/context";
import { UserProfile, UserType } from "../types/user";
import { checkEmail } from "../helpers/checkEmail";
import { userIsConnected } from "../helpers/userIsConnected";
import { createUsernameFromEmail } from "../helpers/createUsernameFromEmail";
import Header from "../components/Header/Header";
import { HeaderStyle } from "../types/headerstyle";
import useFetchPopularShows from "../hooks/useFetchPopularShows";
import Footer from "../components/Footer/Footer";
import { FooterStyle } from "../types/footerstyle";

const RootLayout = () => {
  // State gestion langage
  const [lang, setLang] = useState<string>("fr");
  // Paramètres et infos utilisateur
  const defaultUser: UserType = {
    plan: 0,
    authorization: false,
    email: "",
    fullName: "",
    password: "",
    number: "",
    profiles: [],
    selectedProfile: undefined,
    preferedDevices: [],
    username: "",
    avatarUrl: "",
    registerStep: 0,
    setupStep: 0,
    registered: false,
    isConfigured: false,
    birthDate: "",
    preferedLanguages: [],
    gender: 0,
    likedShows: [],
  };
  const savedUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState<boolean>(() =>
    userIsConnected()
  );
  const [user, setUser] = useState<UserType>(
    savedUser ? JSON.parse(savedUser) : defaultUser
  );
  const [isRegistered, setIsRegistered] = useState<boolean>(user.registered);
  const [registerStep, setRegisterStep] = useState<number>(user.registerStep);
  const [isConfigured, setAccountIsConfigured] = useState<boolean>(
    user.isConfigured
  );
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState(user.password);
  const [selectedProfile, setSelectedProfile] = useState(user.selectedProfile);

  const [overflow, setOverflow] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State gestion fetch (pas besoin de fetch si l'utilisateur est deconnecté)
  const { data, dataIsLoading, error } = useFetchPopularShows(lang);
  // console.log(data);

  const fetchedPopularShows = useMemo(() => {
    return { data, dataIsLoading, error };
  }, [data, dataIsLoading, error]);

  // Header: State gestion style

  const defaultHeaderStyle: HeaderStyle = {
    showBtn: true,
    showSelectLang: true,
    background: "bg-transparent",
    className: "",
    resizeOnScroll: false,
    transparentBtn: false,
    link: "/",
    logoClassName: "logo-default",
    signupHeader: false,
    absolutePos: true,
  };

  const whiteHeaderStyle: HeaderStyle = {
    showBtn: true,
    showSelectLang: false,
    background: "bg-transparent",
    className: "border-b border-neutral-200 px-4 py-1 sm:py-6 w-full",
    logoClassName: "w-20 sm:w-40",
    transparentBtn: true,
    signupHeader: true,
    resizeOnScroll: false,
    link: "/",
    absolutePos: false,
  };

  const defaultFooterStyle: FooterStyle = {
    whiteTheme: false,
  };

  const whiteFooterStyle: FooterStyle = {
    whiteTheme: true,
  };

  // Manipulation style
  // -- Header
  const [headerStyle, setHeaderStyle] = useState(defaultHeaderStyle);
  const [footerStyle, setFooterStyle] = useState(defaultFooterStyle);

  const handleHeaderStyle = (
    values: Array<{
      key: keyof HeaderStyle;
      value: string | boolean;
    }>
  ) => {
    values.map((item) => {
      setHeaderStyle((prevState: HeaderStyle) => {
        const update = { ...prevState, [item.key]: item.value };
        return update;
      });
    });
  };

  /**
   *
   * @param value boolean false = overflow hidden
   */
  const bodyOverflow = (value: boolean) => {
    setOverflow(value);
    if (value === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  // -- Background true: blanc, false: noir
  const handleChangeBg = (value: boolean) => {
    setBgWhite(value);
    value
      ? () => {
          document.body.classList.add("bg-white");
        }
      : () => {
          document.body.classList.remove("bg-white");
        };
  };

  // -- Style => blanc (bg + header..)
  const setWhiteTheme = (value: boolean) => {
    if (value === true) {
      setHeaderStyle(whiteHeaderStyle);
      setFooterStyle(whiteFooterStyle);
      handleChangeBg(true);
    } else {
      setHeaderStyle(defaultHeaderStyle);
      setFooterStyle(defaultFooterStyle);
      handleChangeBg(false);
    }
  };

  const resetStyle = () => {
    setHeaderStyle(defaultHeaderStyle);
    setFooterStyle(defaultFooterStyle);
  };
  // Fin manipulation style

  // Handler changement langue, "fr" / "en"
  const handleChangeLang = (value: string) => {
    setLang(value);
  };

  /**
   * Met à jour state user & userEmail
   * @param email string
   */
  const handleUserEmail = (email: string) => {
    setUserEmail(email);
    setUser((prevUser: UserType) => {
      const update = { ...prevUser, ["email"]: email };
      return update;
    });
  };

  const handleUserPassword = (password: string) => {
    setUserPassword(password);
  };

  const handleRegisterAccount = (value: boolean) => {
    setIsRegistered(value);
    handleCreateUser([{ key: "registered", value: true }]);
  };

  const handleAccountIsConfigured = (value: boolean) => {
    setAccountIsConfigured(value);
  };

  /**
   * Met à jour "user" dans localStorage + state
   * @param values [key: "keyName", value: "value"]
   */
  const handleCreateUser = (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile | undefined | {};
    }>
  ) => {
    setIsRegistered(true);
    setIsConnected(true);
    handleHeaderStyle([{ key: "showBtn", value: true }]);
    values.map((item) =>
      setUser((prevUser: UserType) => {
        const updatedUser = { ...prevUser, [item.key]: item.value };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        if (item.key === "email" && typeof item.value != "string") {
          const updatedUsername = createUsernameFromEmail(
            item.value!.toString()
          );
          let update = { ...updatedUser, username: updatedUsername };
          localStorage.setItem("user", JSON.stringify(update));
          return update;
        }
        return updatedUser;
      })
    );
  };

  const handleSaveSelectedProfile = (id: number) => {
    setSelectedProfile(id);
    handleCreateUser([{ key: "selectedProfile", value: id }]);
  };

  const handleDisconnect = () => {
    const user = userIsConnected();
    if (user) {
      clearUser();
      navigate("/");
    }
    setIsConnected(false);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  /**
   * Simule un call API (1sec de delai => isLoading)
   * @param value string (email)
   * @returns
   */
  const handleSubmitRegister = async (value: string): Promise<Boolean> => {
    setIsLoading(true);
    const userExists = await checkEmail(value);
    setIsLoading(false);
    return userExists;
  };

  const clearUser = () => {
    resetStyle();
    setUser(defaultUser);
    setUserEmail(defaultUser.email);
    setRegisterStep(0);
    setIsRegistered(false);
    setIsConnected(false);
    setIsRegistered(false);
    setAccountIsConfigured(false);
    setSelectedProfile(undefined);
    localStorage.removeItem("user");
  };

  return (
    <>
      <main
        className={`w-screen min-h-[100dvh] flex-grow ${
          bgWhite ? "bg-white" : ""
        } ${
          isConfigured && isConnected && "bg-neutral-900"
        } grid grid-rows-[auto_1fr_auto]`}
      >
        <Header
          headerStyle={headerStyle}
          lang={lang}
          isConnected={isConnected}
          isConfigured={isConfigured}
          handleDisconnect={handleDisconnect}
          handleChangeLang={handleChangeLang}
          selectedProfile={selectedProfile}
          user={user}
        />
        <Outlet
          context={
            {
              lang,
              user,
              fetchedPopularShows,
              handleChangeLang,
              handleChangeBg,
              bodyOverflow,
              handleUserEmail,
              handleRegisterAccount,
              handleDisconnect,
              handleConnect,
              handleSubmitRegister,
              handleCreateUser,
              handleUserPassword,
              resetStyle,
              handleHeaderStyle,
              setWhiteTheme,
              handleAccountIsConfigured,
              handleSaveSelectedProfile,
              headerStyle,
              registerStep,
              isRegistered,
              isLoading,
              isConnected,
              userEmail,
              userPassword,
              isConfigured,
              selectedProfile,
            } satisfies ContextType
          }
        />
        <Footer
          lang={lang}
          handleChangeLang={handleChangeLang}
          footerStyle={footerStyle}
          // showLangText={true}
        />
      </main>
    </>
  );
};

export default RootLayout;
export function useDataContext() {
  return useOutletContext<ContextType>();
}
