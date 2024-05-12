import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
const Root = () => {
  const { lang, data, userEmail, handleChangeBg, handleUserEmail } =
    useDataContext();
  return (
    <>
      <HeroPage
        lang={lang}
        content={data}
        handleChangeBg={handleChangeBg}
        onChangeForm={handleUserEmail}
        userEmail={userEmail}
      />
    </>
  );
};

export default Root;
