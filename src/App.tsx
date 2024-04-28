import "./App.css";
import Landingpage from "./pages/Landingpage";
import { useState } from "react";

function App() {
  // 1 = FR, 2 = EN
  const [lang, setLang] = useState("en");
  const handleChangeLang = (value: string) => {
    setLang(value);
    // console.log(value);
  };
  return (
    <>
      <Landingpage lang={lang} handleChangeLang={handleChangeLang} />
    </>
  );
}

export default App;
