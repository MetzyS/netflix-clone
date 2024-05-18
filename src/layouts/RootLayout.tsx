import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContextType } from "../types/context";
import { UserProfile, UserType } from "../types/user";
import { checkEmail } from "../functions/checkEmail";
import DataType from "../types/data";
import { userIsConnected } from "../hooks/UserIsCreatingAccount/userIsConnected";
import {
  checkIfUserIsCreatingAccount,
  checkUserRegisterStep,
} from "../hooks/UserIsCreatingAccount/creatingAccount";

const RootLayout = (props: { data: Record<string, DataType> }) => {
  const defaultUser: UserType = {
    authorization: 0,
    email: "",
    fullName: "",
    password: "",
    profiles: {},
    username: "",
    avatarUrl: "",
    registerStep: 0,
  };
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<UserType>(defaultUser);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  const [lang, setLang] = useState<string>("fr");
  const [data, setData] = useState(props.data.fr);
  const [bgWhite, setBgWhite] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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

  const handleUserEmail = (value: string) => {
    setUserEmail(value);
  };

  const handleCreateAccount = (value: boolean) => {
    value
      ? (setIsCreatingAccount(value),
        localStorage.setItem("isCreating", "true"))
      : (setIsCreatingAccount(false),
        localStorage.setItem("isCreating", "false"));
  };

  const handleCreateUser = (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile;
    }>
  ) => {
    setIsCreated(true);
    setIsConnected(true);
    values.map((item) =>
      setUser((prevUser: UserType) => {
        const updatedUser = { ...prevUser, [item.key]: item.value };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        if (item.key === "email" && typeof item.value == "string") {
          const username = item.value.split("@");
          const updatedUsername = username[0];
          let update = { ...prevUser, username: updatedUsername };
          localStorage.setItem("user", JSON.stringify(update));
          return update;
        }
        return updatedUser;
      })
    );
    console.log(localStorage.getItem("user"));
  };

  const handleDisconnect = () => {
    const user = userIsConnected();
    if (user) {
      clearUser();
      const navigate = useNavigate();
      navigate("/");
    }
    setIsConnected(false);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleSubmitRegister = async (value: string): Promise<Boolean> => {
    setIsLoading(true);
    const userExists = await checkEmail(value);
    setIsLoading(false);
    return userExists;
  };

  const clearUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isCreating");
    setUserEmail("");
    setIsCreated(false);
    setIsCreatingAccount(false);
    setUser(defaultUser);
    setIsConnected(false);
    setRegisterStep(undefined);
  };

  return (
    <>
      <main
        className={`w-screen h-full flex-grow ${bgWhite ? "bg-white" : ""}`}
      >
        <Outlet
          context={
            {
              lang,
              user,
              handleChangeLang,
              handleChangeBg,
              handleUserEmail,
              handleCreateAccount,
              handleDisconnect,
              handleConnect,
              handleSubmitRegister,
              handleCreateUser,
              registerStep,
              isLoading,
              isConnected,
              isCreatingAccount,
              userEmail,
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
