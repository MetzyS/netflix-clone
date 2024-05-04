import Landing from "./pages/Landing";
import { useState } from "react";
import Data from "./data/herocard.json";
import HeroDataType from "./data/HeroDataType";

function App() {
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
      <Landing lang={lang} handleChangeLang={handleChangeLang} data={data} />
    </>
  );
}

export default App;
