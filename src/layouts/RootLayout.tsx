import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContextType } from "../types/context";
import { UserProfile, UserType } from "../types/user";
import { checkEmail } from "../functions/checkEmail";

const RootLayout = (props: { data: any }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsConnected(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [lang, setLang] = useState<string>("fr");
  const [data, setData] = useState(props.data.fr);
  const [bgWhite, setBgWhite] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    if (value) {
      document.body.classList.add("bg-white");
    } else {
      document.body.classList.remove("bg-white");
    }
  };

  const handleUserEmail = (value: string) => {
    setUserEmail(value);
  };

  const handleCreateAccount = (value: boolean) => {
    setIsCreated(value);
  };

  const handleCreateUser = (values: {
    key: keyof UserType;
    value: string | number | UserProfile;
  }) => {
    setUser((prevUser: UserType | undefined) => {
      if (!prevUser) return prevUser;
      return { ...prevUser, [values.key]: values.value };
    });
    console.log(user);
    // const storedUser = localStorage.getItem("user");
    // if (!storedUser) {
    // setIsConnected(true);
    // setUser(JSON.parse(storedUser));
    // }
  };

  const handleConnected = () => {
    setIsConnected(!isConnected);
  };

  const handleSubmitRegister = async (value: string): Promise<Boolean> => {
    setIsLoading(true);
    const userExists = await checkEmail(value);
    // if (userExists) {
    // console.log("user exist: " + userExists);
    // gestion => l'email possède déjà un compte
    // }
    console.log("user exist: " + userExists);
    setIsLoading(false);
    return userExists;
  };
  return (
    <>
      <main className={bgWhite ? "bg-white" : undefined}>
        <Outlet
          context={
            {
              lang,
              user,
              handleChangeLang,
              handleChangeBg,
              handleUserEmail,
              handleCreateAccount,
              handleConnected,
              handleSubmitRegister,
              handleCreateUser,
              isLoading,
              isConnected,
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
