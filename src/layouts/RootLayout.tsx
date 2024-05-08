import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";
import HeroDataType from "../data/HeroDataType";
export type ContextType = {
  lang: string;
  data: HeroDataType;
  userEmail: string;
  handleChangeLang: (value: string) => void;
  handleChangeBg: (value: boolean) => void;
  handleUserEmail: (value: string) => void;
};
const RootLayout = (props: { data: any }) => {
  const [lang, setLang] = useState<string>("fr");
  const [data, setData] = useState(props.data.fr);
  const [bgWhite, setBgWhite] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
  return (
    <>
      <main className={bgWhite ? "bg-white" : undefined}>
        <Outlet
          context={
            {
              lang,
              handleChangeLang,
              handleChangeBg,
              handleUserEmail,
              userEmail,
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
