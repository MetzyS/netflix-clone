import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";
import HeroDataType from "../data/HeroDataType";
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
  };
  return (
    <>
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
