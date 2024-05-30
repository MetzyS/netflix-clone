import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContextType } from "../types/context";
import { UserProfile, UserType } from "../types/user";
import { checkEmail } from "../helpers/checkEmail";
import { userIsConnected } from "../helpers/userIsConnected";
import { createUsernameFromEmail } from "../helpers/createUsernameFromEmail";
import HeaderTwo from "../components/Header/Header";
import { HeaderStyle } from "../types/headerstyle";
import useFetch from "../hooks/useFetch";
// import { useFetch } from "../hooks/useFetch";

const RootLayout = () => {
  // Paramètres et infos utilisateur
  const defaultUser: UserType = {
    plan: 0,
    authorization: false,
    email: "",
    fullName: "",
    password: "",
    number: "",
    profiles: [],
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
  // State gestion langage
  const [lang, setLang] = useState<string>("fr");

  const [bgWhite, setBgWhite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State gestion fetch (pas besoin de fetch si l'utilisateur est deconnecté)
  // const [fetchIsNeeded, setFetchIsNeeded] = useState<boolean>(false);
  const { data, dataIsLoading } = useFetch();
  const [fetchedData, setFetchedData] = useState<{
    data: any;
    dataIsLoading: boolean;
  }>({ data: null, dataIsLoading: true });

  useEffect(() => {
    setFetchedData({ data, dataIsLoading });
  }, [data, isLoading]);

  // Header: State gestion style

  const defaultHeaderStyle: HeaderStyle = {
    showBtn: true,
    showSelectLang: true,
    background: "bg-transparent",
    className: "",
    fixed: false,
    resizeOnScroll: false,
    transparentBtn: false,
    link: "/",
    logoClassName: "logo-default",
    signupHeader: false,
  };

  const whiteHeaderStyle: HeaderStyle = {
    showBtn: true,
    showSelectLang: false,
    background: "bg-transparent",
    className: "border-b border-neutral-200 px-4 py-1 sm:py-6 w-full",
    logoClassName: "w-20 sm:w-40",
    transparentBtn: true,
    signupHeader: true,
    fixed: false,
    resizeOnScroll: false,
    link: "/",
  };

  // Manipulation style
  // -- Header
  const [headerStyle, setHeaderStyle] = useState(defaultHeaderStyle);
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
      handleChangeBg(true);
    } else {
      setHeaderStyle(defaultHeaderStyle);
      handleChangeBg(false);
    }
  };

  const resetHeaderStyle = () => {
    setHeaderStyle(defaultHeaderStyle);
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
      value: string | number | UserProfile | {};
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
            item.value.toString()
          );
          let update = { ...updatedUser, username: updatedUsername };
          localStorage.setItem("user", JSON.stringify(update));
          return update;
        }
        return updatedUser;
      })
    );
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
    resetHeaderStyle();
    setUser(defaultUser);
    setUserEmail(defaultUser.email);
    setRegisterStep(0);
    setIsRegistered(false);
    setIsConnected(false);
    setIsRegistered(false);
    setAccountIsConfigured(false);
    localStorage.removeItem("user");
  };

  // Manipulation data fetch
  // const handleFetchIsNeeded = (value: boolean) => {
  //   setFetchIsNeeded(value);
  //   if (value === true) {
  //     // const fetch = useFetch();
  //     // setData(fetch);
  //   }
  // };

  // useEffect(() => {
  //   const fetchedData = useFetch();
  //   setData(fetchedData);
  // }, []);

  return (
    <>
      <main
        className={`w-screen h-full flex-grow ${bgWhite ? "bg-white" : ""}`}
      >
        <HeaderTwo
          headerStyle={headerStyle}
          lang={lang}
          isConnected={isConnected}
          handleDisconnect={handleDisconnect}
          handleChangeLang={handleChangeLang}
        />
        <Outlet
          context={
            {
              lang,
              user,
              fetchedData,
              handleChangeLang,
              handleChangeBg,
              handleUserEmail,
              handleRegisterAccount,
              handleDisconnect,
              handleConnect,
              handleSubmitRegister,
              handleCreateUser,
              handleUserPassword,
              resetHeaderStyle,
              handleHeaderStyle,
              setWhiteTheme,
              handleAccountIsConfigured,
              // handleFetchIsNeeded,
              headerStyle,
              registerStep,
              isRegistered,
              isLoading,
              isConnected,
              userEmail,
              userPassword,
              isConfigured,
              // fetchIsNeeded,
            } satisfies ContextType
          }
        />
      </main>
    </>
  );
};

export default RootLayout;
export function useDataContext() {
  return useOutletContext<ContextType>();
}
