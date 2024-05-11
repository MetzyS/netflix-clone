import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
const Root = () => {
  const { lang, data, handleChangeBg, handleUserEmail } = useDataContext();
  return (
    <>
      <HeroPage
        lang={lang}
        content={data}
        handleChangeBg={handleChangeBg}
        onChangeForm={handleUserEmail}
      />
    </>
  );
};

export default Root;
