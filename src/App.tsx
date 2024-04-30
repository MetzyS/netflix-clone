import Landingpage from "./pages/Landingpage";
import { useState } from "react";
import Data from "./data/herocard.json";

function App() {
  const [lang, setLang] = useState("fr");
  const [data, setData] = useState(Data.fr);
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
      <Landingpage
        lang={lang}
        handleChangeLang={handleChangeLang}
        data={data}
      />
    </>
  );
}

export default App;
