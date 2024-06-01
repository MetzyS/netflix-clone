import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
// import { useEffect, useState } from "react";
const Root = () => {
  const { isRegistered, isConfigured } = useDataContext();
  // const [userIsConnected, setUserIsConnected] = useState<boolean>(
  //   isRegistered && isConfigured
  // );

  return <>{isRegistered && isConfigured ? <ShowMovies /> : <HeroPage />}</>;
};

export default Root;
