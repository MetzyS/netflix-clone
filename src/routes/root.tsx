import Herocard from "../components/Herocard/Herocard";
// import { TestType } from "../layouts/RootLayout";
// import { ContextType } from "react";
// import HeroDataType from "../data/HeroDataType";
import { useDataContext } from "../layouts/RootLayout";
const Root = () => {
  const { lang, handleChangeLang, data } = useDataContext();
  console.log(lang, handleChangeLang, data);
  return (
    <>
      {/* <span>test</span> */}
      <Herocard
        handleChangeLang={handleChangeLang}
        lang={lang}
        content={data}
      />
    </>
  );
};

export default Root;
