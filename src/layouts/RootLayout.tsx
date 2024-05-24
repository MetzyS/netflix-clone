import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContextType } from "../types/context";
import { UserProfile, UserType } from "../types/user";
import { checkEmail } from "../helpers/checkEmail";
import LangType, { PlanCard } from "../types/data";
import { userIsConnected } from "../helpers/userIsConnected";
import {
  checkIfUserIsCreatingAccount,
  checkUserRegisterStep,
} from "../helpers/creatingAccount";
import { createUsernameFromEmail } from "../helpers/createUsernameFromEmail";
import HeaderTwo from "../components/Header/HeaderTwo";

const RootLayout = (props: { data: Record<string, LangType> }) => {
  const defaultUser: UserType = {
    plan: 0,
    authorization: false,
    email: "",
    fullName: "",
    password: "",
    profiles: {},
    username: "",
    avatarUrl: "",
    registerStep: 0,
    registered: false,
  };
  const savedUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState<boolean>(() =>
    userIsConnected()
  );
  const [isRegistered, setIsRegistered] = useState<boolean>(
    savedUser ? JSON.parse(savedUser).registered : false
  );
  const [user, setUser] = useState<UserType>(
    savedUser ? JSON.parse(savedUser) : defaultUser
  );
  // console.log(user);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  // State gestion langage
  const [lang, setLang] = useState<string>("fr");
  const [data, setData] = useState(props.data.fr);

  const [bgWhite, setBgWhite] = useState(false);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState(user.password);
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState<boolean>(
    (): boolean => {
      return checkIfUserIsCreatingAccount();
    }
  );
  const [registerStep, setRegisterStep] = useState<number | undefined>(
    (): number | undefined => {
      return checkUserRegisterStep();
    }
  );

  // Header: State gestion style
  const [showHeaderBtn, setShowHeaderBtn] = useState(false);
  const [showSelectLang, setShowSelectLang] = useState(true);
  const [headerBg, setHeaderBg] = useState("bg-transparent");
  const [fixedHeader, setFixedHeader] = useState(false);
  const [headerResizeOnScroll, setHeaderResizeOnScroll] = useState(false);
  const [transparentBtn, setTransparentBtn] = useState(false);

  // Header: State handlers
  const handleShowHeaderBtn = (value: boolean) => {
    setShowHeaderBtn(value);
  };

  const handleShowSelectLang = (value: boolean) => {
    setShowSelectLang(value);
  };

  const handleHeaderBg = (value: string) => {
    setHeaderBg(value);
  };

  const handleFixedHeader = (value: boolean) => {
    setFixedHeader(value);
  };

  const handleResizeOnScroll = (value: boolean) => {
    setHeaderResizeOnScroll(value);
  };

  const handleTransparentBtn = (value: boolean) => {
    setTransparentBtn(value);
  };

  const handleChangeLang = (value: string) => {
    setLang(value);
    switch (value) {
      case "fr":
        setData(props.data.fr);
        break;
      case "en":
        setData(props.data.en);
        break;
      default:
        setData(props.data.fr);
    }
  };

  const plans: Record<string, PlanCard> = data.signup.firstStepPlanChoiceCards;

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

  const handleCreateAccount = (value: boolean) => {
    value
      ? (setIsCreatingAccount(value),
        localStorage.setItem("isCreating", "true"))
      : (setIsCreatingAccount(false),
        localStorage.setItem("isCreating", "false"));
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
    setIsCreated(true);
    setIsConnected(true);
    handleShowHeaderBtn(true);
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
    handleShowHeaderBtn(false);
    setUser(defaultUser);
    setUserEmail(defaultUser.email);
    setRegisterStep(undefined);
    setIsCreated(false);
    setIsCreatingAccount(false);
    setIsConnected(false);
    setIsRegistered(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isCreating");
  };

  return (
    <>
      <main
        className={`w-screen h-full flex-grow ${bgWhite ? "bg-white" : ""}`}
      >
        <HeaderTwo
          selectLang={true}
          showButton={showHeaderBtn}
          transparentButton={transparentBtn}
          lang={lang}
          isConnected={isConnected}
          handleDisconnect={handleDisconnect}
          handleChangeLang={handleChangeLang}
          bg={headerBg}
          fixed={fixedHeader}
          resizeOnScroll={headerResizeOnScroll}
        />
        <Outlet
          context={
            {
              lang,
              user,
              plans,
              handleChangeLang,
              handleChangeBg,
              handleUserEmail,
              handleCreateAccount,
              handleDisconnect,
              handleConnect,
              handleSubmitRegister,
              handleCreateUser,
              handleUserPassword,
              setIsRegistered,
              handleShowHeaderBtn,
              handleHeaderBg,
              handleFixedHeader,
              handleResizeOnScroll,
              handleShowSelectLang,
              handleTransparentBtn,
              registerStep,
              isRegistered,
              isLoading,
              isConnected,
              isCreatingAccount,
              userEmail,
              userPassword,
              isCreated,
              data,
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
