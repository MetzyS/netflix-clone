import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../components/Header/Header";
import { useState } from "react";
import HeroDataType from "../data/HeroDataType";
// import Data from "../data/herocard.json";
export type ContextType = {
  lang: string;
  data: HeroDataType;
  handleChangeLang: (value: string) => void;
};
const RootLayout = (props: { data: any }) => {
  const [lang, setLang] = useState<string>("fr");
  const [data, setData] = useState(props.data.fr);
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
    console.log(value);
    console.log(props.data);
    console.log(lang);
  };
  return (
    <>
      <Header
        lang={lang}
        content={data.header}
        handleChangeLang={handleChangeLang}
      />
      <main>
        <Outlet
          context={
            {
              lang,
              handleChangeLang,
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
