import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
const Root = () => {
  const { isRegistered, isConfigured } = useDataContext();

  return <>{isRegistered && isConfigured ? <ShowMovies /> : <HeroPage />}</>;
};

export default Root;
