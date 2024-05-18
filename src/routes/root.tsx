import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
const Root = () => {
  const {
    lang,
    data,
    user,
    userEmail,
    isConnected,
    isCreatingAccount,
    handleChangeBg,
  } = useDataContext();

  return (
    <>
      {isConnected && !isCreatingAccount ? (
        <ShowMovies lang={lang} content={data} user={user} />
      ) : (
        <HeroPage
          lang={lang}
          content={data}
          handleChangeBg={handleChangeBg}
          userEmail={userEmail}
          isCreatingAccount={isCreatingAccount}
        />
      )}
    </>
  );
};

export default Root;
