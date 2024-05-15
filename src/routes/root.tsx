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
    handleChangeBg,
    handleUserEmail,
  } = useDataContext();
  const test = localStorage.getItem("user");
  console.log(test);
  console.log(isConnected);
  return (
    <>
      {isConnected ? (
        <ShowMovies lang={lang} content={data} />
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
