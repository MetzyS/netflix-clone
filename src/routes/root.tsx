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
    isCreatingAccount,
    handleChangeBg,
    handleUserEmail,
  } = useDataContext();
  const test = localStorage.getItem("user");
  console.log("user: " + test);
  console.log("is creating: " + isCreatingAccount);
  const tested = checkUserRegisterStep();
  console.log("register step: " + tested);

  return (
    <>
      {isConnected && !isCreatingAccount ? (
        <ShowMovies lang={lang} content={data} user={user} />
      ) : (
        <HeroPage
          lang={lang}
          content={data}
          handleChangeBg={handleChangeBg}
          onChangeForm={handleUserEmail}
          userEmail={userEmail}
          isCreatingAccount={isCreatingAccount}
        />
      )}
    </>
  );
};

export default Root;
