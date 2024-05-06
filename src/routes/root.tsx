import Herocard from "../components/Herocard/Herocard";
import { useDataContext } from "../layouts/RootLayout";
const Root = () => {
  const { lang, handleChangeLang, data } = useDataContext();
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
