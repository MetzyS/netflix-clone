import LangType from "../../types/data";
import { UserType } from "../../types/user";
import { useDataContext } from "../../layouts/RootLayout";
import { useEffect } from "react";

const ShowMovies = (props: {
  lang: string;
  content: LangType;
  user: UserType | undefined;
}) => {
  const { handleChangeBg } = useDataContext();
  useEffect(() => {
    handleChangeBg(false);
  }, [handleChangeBg]);
  return (
    <>
      <div className="w-screen overflow-hidden pr-4"></div>
      <span>ShowMovies</span>
    </>
  );
};
export default ShowMovies;
