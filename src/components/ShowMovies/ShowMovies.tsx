import { useDataContext } from "../../layouts/RootLayout";
import { useEffect } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";

const ShowMovies = () => {
  const { setWhiteTheme, lang } = useDataContext();
  const { content, isLoading } = useLocale("ShowMovies", lang);
  useEffect(() => {
    setWhiteTheme(false);
  }, []);
  return (
    <>
      <DefaultContainer className="w-screen overflow-hidden px-4 md:px-12 pt-36">
        {isLoading ? <span>loading</span> : <></>}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
