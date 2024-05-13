import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
const Root = () => {
  const {
    lang,
    data,
    user,
    userEmail,
    isConnected,
    handleChangeBg,
    handleUserEmail,
  } = useDataContext();
  return (
    <>
      {isConnected ? (
        <div>IS CONNECTED</div>
      ) : (
        <HeroPage
          lang={lang}
          content={data}
          handleChangeBg={handleChangeBg}
          onChangeForm={handleUserEmail}
          userEmail={userEmail}
        />
      )}
    </>
  );
};

export default Root;
