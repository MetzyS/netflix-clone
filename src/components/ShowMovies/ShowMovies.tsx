import { useDataContext } from "../../layouts/RootLayout";
import { useEffect } from "react";

const ShowMovies = () => {
  const { setWhiteTheme } = useDataContext();
  useEffect(() => {
    setWhiteTheme(false);
  }, []);
  return (
    <>
      <div className="w-screen overflow-hidden pr-4"></div>
      <span>ShowMovies</span>
    </>
  );
};
export default ShowMovies;
