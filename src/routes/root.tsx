import { useState } from "react";
import Herocard from "../components/Herocard/Herocard";
import HeroDataType from "../data/HeroDataType";
import Data from "../data/herocard.json";
const Root = () => {
  const [lang, setLang] = useState("fr");
  const [data, setData] = useState<HeroDataType>(Data.fr);
  const handleChangeLang = (value: string) => {
    setLang(value);
    switch (value) {
      case "fr":
        setData(Data.fr);
        break;
      case "en":
        setData(Data.en);
        break;
      default:
        setData(Data.fr);
    }
    console.log(value);
  };
  return (
    <>
      <Herocard
        handleChangeLang={handleChangeLang}
        lang={lang}
        content={data}
      />
    </>
  );
};

export default Root;
