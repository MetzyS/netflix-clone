import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
const Root = () => {
  const { isRegistered, isConfigured, selectedProfile } = useDataContext();

  return (
    <>
      {isRegistered && isConfigured ? (
        <ShowMovies selectedProfile={selectedProfile} />
      ) : (
        <HeroPage />
      )}
    </>
  );
};

export default Root;
