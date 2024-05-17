import { useDataContext } from "../layouts/RootLayout";
import HeroPage from "../components/HeroPage/HeroPage";
import ShowMovies from "../components/ShowMovies/ShowMovies";
import { checkUserRegisterStep } from "../hooks/UserIsCreatingAccount/creatingAccount";
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
  const tested = checkUserRegisterStep();
  console.log(tested);

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
