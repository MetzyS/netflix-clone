import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
const Root = () => {
  const { lang, data, user, isConnected, isCreatingAccount, isRegistered } =
    useDataContext();

  return (
    <>
      {isRegistered ? (
        <ShowMovies lang={lang} content={data} user={user} />
      ) : (
        <HeroPage lang={lang} content={data} />
      )}
    </>
  );
};

export default Root;
