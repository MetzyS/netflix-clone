import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
const Root = () => {
  const { isRegistered, accountIsConfigured } = useDataContext();

  return (
    <>{isRegistered && accountIsConfigured ? <ShowMovies /> : <HeroPage />}</>
  );
};

export default Root;
